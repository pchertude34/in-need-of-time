import React, { Suspense, useEffect, useRef, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSanityInstance } from "@sanity/sdk-react";
import { toast } from "sonner";
import { parseCoordinates } from "@in-need-of-time/utils";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@in-need-of-time/ui";
import { ProviderField } from "./ProviderField";
import { HoursOfOperationInput } from "./HoursOfOperationInput";
import { DuplicateProviderBanner } from "./DuplicateProviderBanner";
import { DuplicateProviderCheck, IDLE_DUPLICATE_CHECK, type DuplicateCheckState } from "./DuplicateProviderCheck";
import { DuplicateSaveConfirmDialog } from "./DuplicateSaveConfirmDialog";
import { RichTextEditor } from "../RichTextEditor/RichTextEditor";
import { EMPTY_PROVIDER_FORM_VALUES, EMPTY_SERVICE_TYPE } from "./constants";
import { geocodeAddress, serviceTypesQuery } from "../../queries";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import type { ProviderFormValues, ServiceType } from "../../types";
import type { DuplicateCheckResult } from "@in-need-of-time/utils";

// A stable fallback, so the options list isn't a new array on every render
// before the query resolves.
const NO_SERVICE_TYPES: ServiceType[] = [];

// Long enough that typing out a name or a coordinate doesn't fire a query per
// keystroke, short enough that the warning still feels tied to the edit.
const DUPLICATE_CHECK_DEBOUNCE_MS = 500;

// The provider schema requires a name, an address and a location (see
// studio/src/schemas/provider/provider.ts), so the form holds a draft to the
// same bar rather than letting a save through that can never be published.
// Coordinates aren't typed in, so their message points at the address instead.
const LOCATION_REQUIRED_MESSAGE = "Coordinates are required. Enter an address the geocoder can match.";

function getServiceTypePlaceholder(isLoading: boolean, hasOptions: boolean) {
  if (isLoading) {
    return "Loading service types…";
  }

  return hasOptions ? "Select a service type" : "No service types found";
}

type ProviderFormProps = {
  /** The structured provider the details agent produced, once it has finished. */
  provider?: ProviderFormValues;
  /** Locks every field — used while the agent is still filling the form in. */
  disabled?: boolean;
  /** Locks every field and swaps the submit button's label — used while the save itself is in flight. */
  isSaving?: boolean;
  onSubmit?: (values: ProviderFormValues) => void;
};

export function ProviderForm(props: ProviderFormProps) {
  const { provider, disabled = false, isSaving = false, onSubmit } = props;
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ProviderFormValues>({
    defaultValues: provider ?? EMPTY_PROVIDER_FORM_VALUES,
    // "onTouched" rather than "onBlur": a field is checked when it's first left,
    // so a problem surfaces there instead of at submit, and from then on it
    // re-checks as the user types, so the message clears as soon as it's fixed.
    mode: "onTouched",
  });
  const { fields, append, remove } = useFieldArray({ control, name: "serviceTypes" });

  // Fetched once for the whole form rather than per row — every service type
  // picker offers the same list.
  const instance = useSanityInstance();
  const { data: serviceTypeOptions = NO_SERVICE_TYPES, isPending: isLoadingServiceTypes } = useQuery(
    serviceTypesQuery(instance),
  );

  // The address the coordinates in the form were geocoded from, so blurring the
  // address field without having changed it doesn't cost a lookup. A ref rather
  // than state: nothing renders it, and it must be readable by the blur handler
  // of the same render that set it.
  const geocodedAddress = useRef("");

  // The agent fills the form in asynchronously, so re-seed it whenever a new
  // provider arrives rather than only on first render.
  useEffect(() => {
    reset(provider ?? EMPTY_PROVIDER_FORM_VALUES);
    // The agent geocoded the address it found, so the coordinates arriving with
    // it already match — only an edit to the address should trigger a lookup.
    geocodedAddress.current = provider?.address.value.trim() ?? "";
  }, [provider, reset]);

  // Confidence and source URL aren't editable — they're read back out of form
  // state purely so each field can show where its value came from.
  const values = watch();

  const geocode = useMutation({ mutationFn: geocodeAddress });

  // Registered up here rather than inline, so the input can wrap the field's own
  // blur handler with the geocode lookup below.
  const addressField = register("address.value", { required: "An address is required." });

  // Both coordinates carry the same message, and only one of them is ever shown
  // — they're filled in and cleared as a pair, so a second copy says nothing new.
  const locationError = errors.location?.value?.latitude ?? errors.location?.value?.longitude;

  // The coordinates can't be typed in, so whenever the address stops yielding
  // any — cleared, or no longer matching — they have to go too. Leaving them
  // would save the provider at wherever the previous address was.
  // `shouldValidate` here and on the filled-in coordinates below is what puts the
  // location's own error on screen at the right moment: the inputs are disabled,
  // so they never fire a blur of their own to be validated by — leaving the
  // address is the only point at which the coordinates can change.
  function clearLocation() {
    setValue("location.value.latitude", "", { shouldDirty: true, shouldValidate: true });
    setValue("location.value.longitude", "", { shouldDirty: true, shouldValidate: true });
    setValue("location.confidence", "very_low");
    setValue("location.sourceUrl", null);
  }

  // Brings the coordinates back in step with the address the user just finished
  // editing. Runs on blur rather than debounced-on-change like the duplicate
  // check below: every lookup hits the Census geocoder, and a half-typed
  // address won't match.
  async function updateLocationFromAddress(address: string) {
    const trimmedAddress = address.trim();

    if (trimmedAddress === geocodedAddress.current) {
      return;
    }

    // Nothing left to geocode — an emptied address means no location at all.
    if (!trimmedAddress) {
      geocodedAddress.current = "";
      clearLocation();
      return;
    }

    try {
      const match = await geocode.mutateAsync(trimmedAddress);

      // The geocoder answered for this address either way — only a failed
      // request (below) is worth retrying on the next blur.
      geocodedAddress.current = trimmedAddress;

      if (!match) {
        clearLocation();
        toast.warning("No coordinates found for that address. Check the address — the coordinates come from it.");
        return;
      }

      setValue("location.value.latitude", String(match.latitude), { shouldDirty: true, shouldValidate: true });
      setValue("location.value.longitude", String(match.longitude), { shouldDirty: true, shouldValidate: true });
      // Location is derived from the address, so it inherits how much that
      // address is trusted and where it came from — the same rule the format
      // agent follows when it geocodes.
      setValue("location.confidence", values.address.confidence);
      setValue("location.sourceUrl", values.address.sourceUrl);
    } catch {
      toast.error("Couldn't look up coordinates for that address. Leave the field again to retry.");
    }
  }

  // The duplicate lookup follows the name and the coordinates, debounced so a
  // keystroke doesn't cost a query. The address field isn't watched directly:
  // the coordinates are what actually move the lookup, and they already follow
  // the address — editing it re-geocodes on blur, which lands here anyway.
  const debouncedName = useDebouncedValue(values.name.value, DUPLICATE_CHECK_DEBOUNCE_MS);
  const debouncedLatitude = useDebouncedValue(values.location.value.latitude, DUPLICATE_CHECK_DEBOUNCE_MS);
  const debouncedLongitude = useDebouncedValue(values.location.value.longitude, DUPLICATE_CHECK_DEBOUNCE_MS);
  const debouncedCoordinates = parseCoordinates(debouncedLatitude, debouncedLongitude);

  const [duplicateCheck, setDuplicateCheck] = useState<DuplicateCheckState>(IDLE_DUPLICATE_CHECK);

  // Nothing renders the lookup without coordinates, so clear the last result
  // rather than leaving a warning up for a location the form no longer has.
  useEffect(() => {
    if (!parseCoordinates(debouncedLatitude, debouncedLongitude)) {
      setDuplicateCheck(IDLE_DUPLICATE_CHECK);
    }
  }, [debouncedLatitude, debouncedLongitude]);

  // A settled result is what the save gate checks, so treat "still debouncing"
  // and "query in flight" the same way: not ready to be trusted yet.
  const isCheckingDuplicates =
    duplicateCheck.isPending ||
    debouncedName !== values.name.value ||
    debouncedLatitude !== values.location.value.latitude ||
    debouncedLongitude !== values.location.value.longitude;

  // Set only while a same-address/similar-name match is found and the user
  // hasn't confirmed past it yet. The duplicate check's result is captured
  // alongside the values, so the dialog's copy can't drift from what
  // triggered it even if the form changes underneath while it's open.
  const [pendingSave, setPendingSave] = useState<{
    values: ProviderFormValues;
    status: Exclude<DuplicateCheckResult["status"], "none">;
    matches: DuplicateCheckResult["matches"];
  } | null>(null);

  function onFormSubmit(formValues: ProviderFormValues) {
    // The lookup already tracks the form, and the submit button stays disabled
    // until it settles, so the current result describes these exact values.
    const { result } = duplicateCheck;

    if (result.status === "none") {
      onSubmit?.(formValues);
      return;
    }

    setPendingSave({ values: formValues, status: result.status, matches: result.matches });
  }

  return (
    <>
      {/* Renders nothing. Mounted only with coordinates to look up, and behind its
          own boundary because `useQuery` suspends on its first load. */}
      {debouncedCoordinates && (
        <Suspense fallback={null}>
          <DuplicateProviderCheck
            coordinates={debouncedCoordinates}
            name={debouncedName}
            onChange={setDuplicateCheck}
          />
        </Suspense>
      )}
      <form onSubmit={handleSubmit(onFormSubmit)}>
        {/* One disabled fieldset locks every control inside it — inputs, textareas,
          the select triggers and the buttons — without threading a prop through each.
          Deliberately not disabled while the duplicate check runs: typing is what
          makes it run, so that would lock the field mid-edit. */}
        <fieldset className="space-y-6" disabled={disabled || isSaving}>
          {duplicateCheck.result.status !== "none" && (
            <DuplicateProviderBanner status={duplicateCheck.result.status} matches={duplicateCheck.result.matches} />
          )}
          {disabled && (
            <p className="text-sm text-slate-500">The agent is still working. Fields unlock when it finishes.</p>
          )}
          <Card className="space-y-5 p-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Provider</h2>
              <p className="text-sm text-slate-500">Review what the agent found and correct anything that looks off.</p>
            </div>
            <ProviderField
              label="Name"
              htmlFor="provider-name"
              confidence={values.name.confidence}
              sourceUrl={values.name.sourceUrl}
              error={errors.name?.value?.message}
            >
              <Input
                id="provider-name"
                placeholder="e.g. St. Austin's Day Care"
                aria-invalid={Boolean(errors.name?.value)}
                {...register("name.value", { required: "A name is required." })}
              />
            </ProviderField>
            <ProviderField
              label="Description"
              confidence={values.description.confidence}
              sourceUrl={values.description.sourceUrl}
              description="1-5 sentences on mission, services, population served, requirements, and upcoming schedule changes."
            >
              <Controller
                control={control}
                name="description.value"
                render={({ field: descriptionField }) => (
                  // A contenteditable isn't a form control, so the surrounding
                  // disabled fieldset can't reach it — pass `disabled` through.
                  <RichTextEditor
                    value={descriptionField.value}
                    onChange={descriptionField.onChange}
                    disabled={disabled}
                  />
                )}
              />
            </ProviderField>
            <ProviderField
              label="Address"
              htmlFor="provider-address"
              confidence={values.address.confidence}
              sourceUrl={values.address.sourceUrl}
              error={errors.address?.value?.message}
            >
              <Input
                id="provider-address"
                placeholder="Street address, city, state, ZIP"
                aria-invalid={Boolean(errors.address?.value)}
                {...addressField}
                // Composed rather than replaced: react-hook-form's own onBlur is
                // what marks the field touched and runs its validation.
                onBlur={(event) => {
                  addressField.onBlur(event);
                  void updateLocationFromAddress(event.target.value);
                }}
              />
            </ProviderField>
            <ProviderField
              label="Location"
              confidence={values.location.confidence}
              sourceUrl={values.location.sourceUrl}
              description={
                geocode.isPending
                  ? "Looking up coordinates…"
                  : "Not editable — geocoded from the address above. Change the address to change these."
              }
              error={locationError?.message}
            >
              {/* Read-only on purpose: coordinates come from the agent or from
                  geocoding the address, never typed in. `disabled` as a prop
                  rather than a `register` option — the option would strip the
                  value out of form state, and these still have to be saved. */}
              <div className="flex flex-wrap gap-4">
                <Input
                  className="flex-1"
                  aria-label="Latitude"
                  placeholder="Latitude"
                  aria-invalid={Boolean(locationError)}
                  {...register("location.value.latitude", { required: LOCATION_REQUIRED_MESSAGE })}
                  disabled
                />
                <Input
                  className="flex-1"
                  aria-label="Longitude"
                  placeholder="Longitude"
                  aria-invalid={Boolean(locationError)}
                  {...register("location.value.longitude", { required: LOCATION_REQUIRED_MESSAGE })}
                  disabled
                />
              </div>
            </ProviderField>
            <ProviderField
              label="Hours of operation"
              confidence={values.hoursOfOperation.confidence}
              sourceUrl={values.hoursOfOperation.sourceUrl}
              description="The provider's overall hours, used when every service shares the same schedule."
            >
              <Controller
                control={control}
                name="hoursOfOperation.value"
                render={({ field: hoursField }) => (
                  <HoursOfOperationInput value={hoursField.value} onChange={hoursField.onChange} />
                )}
              />
            </ProviderField>
          </Card>

          <Card className="space-y-5 p-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Services</h2>
              <p className="text-sm text-slate-500">
                The service types this provider offers. Add per-service hours only when they differ from the hours
                above.
              </p>
            </div>
            {fields.length === 0 && (
              <p className="rounded-xl border border-dashed border-slate-300 px-3.5 py-6 text-center text-sm text-slate-500">
                No service types yet
              </p>
            )}
            {fields.map((field, index) => {
              const serviceType = values.serviceTypes?.[index];
              // A saved id the list doesn't contain would otherwise render as an
              // empty trigger — the id stays in form state but nothing shows it,
              // and a save would write a reference nobody could see in the form.
              const isUnknownServiceType =
                Boolean(serviceType?._id) &&
                !isLoadingServiceTypes &&
                !serviceTypeOptions.some((option) => option._id === serviceType?._id);

              return (
                <div key={field.id} className="space-y-4 rounded-xl border border-slate-200 p-4">
                  <div className="flex items-start gap-4">
                    <ProviderField label="Service type" htmlFor={`service-type-${index}`} className="flex-1">
                      <Controller
                        control={control}
                        name={`serviceTypes.${index}._id`}
                        render={({ field: selectField }) => (
                          // Disabled rather than hidden while the options load, so
                          // the control keeps its place and stays paired with its label.
                          <Select
                            value={selectField.value}
                            onValueChange={selectField.onChange}
                            disabled={isLoadingServiceTypes || serviceTypeOptions.length === 0}
                          >
                            <SelectTrigger
                              id={`service-type-${index}`}
                              ref={selectField.ref}
                              onBlur={selectField.onBlur}
                            >
                              <SelectValue
                                placeholder={getServiceTypePlaceholder(
                                  isLoadingServiceTypes,
                                  serviceTypeOptions.length > 0,
                                )}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              {isUnknownServiceType && (
                                <SelectItem value={selectField.value}>
                                  Unknown service type ({selectField.value})
                                </SelectItem>
                              )}
                              {serviceTypeOptions.map((option) => (
                                <SelectItem key={option._id} value={option._id}>
                                  {option.name ?? option._id}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </ProviderField>
                    <Button
                      type="button"
                      variant="text-error"
                      size="icon"
                      aria-label="Remove service type"
                      className="mt-7"
                      onClick={() => remove(index)}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <ProviderField
                    label="Service hours"
                    confidence={serviceType?.hoursOfOperation.confidence}
                    sourceUrl={serviceType?.hoursOfOperation.sourceUrl}
                    description="Only needed when this service's hours differ from the provider's."
                  >
                    <Controller
                      control={control}
                      name={`serviceTypes.${index}.hoursOfOperation.value`}
                      render={({ field: hoursField }) => (
                        <HoursOfOperationInput value={hoursField.value} onChange={hoursField.onChange} />
                      )}
                    />
                  </ProviderField>
                </div>
              );
            })}
            <Button type="button" variant="light" size="sm" onClick={() => append(EMPTY_SERVICE_TYPE)}>
              <PlusIcon className="mr-1.5 h-4 w-4" />
              Add service type
            </Button>
          </Card>

          <Card className="space-y-5 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
            <div className="flex flex-wrap gap-4">
              <ProviderField
                label="Phone"
                htmlFor="provider-phone"
                className="flex-1 basis-56"
                confidence={values.contact.phone.confidence}
                sourceUrl={values.contact.phone.sourceUrl}
              >
                <Input
                  id="provider-phone"
                  type="tel"
                  placeholder="(555) 555-5555"
                  {...register("contact.phone.value")}
                />
              </ProviderField>
              <ProviderField
                label="Email"
                htmlFor="provider-email"
                className="flex-1 basis-56"
                confidence={values.contact.email.confidence}
                sourceUrl={values.contact.email.sourceUrl}
              >
                <Input
                  id="provider-email"
                  type="email"
                  placeholder="contact@example.org"
                  {...register("contact.email.value")}
                />
              </ProviderField>
            </div>
            <ProviderField
              label="Website"
              htmlFor="provider-website"
              confidence={values.contact.website.confidence}
              sourceUrl={values.contact.website.sourceUrl}
            >
              <Input id="provider-website" placeholder="https://example.org" {...register("contact.website.value")} />
            </ProviderField>
            <ProviderField
              label="Provider page URL"
              htmlFor="provider-url"
              confidence={values.url.confidence}
              sourceUrl={values.url.sourceUrl}
              description="A direct link to this provider's own page on the source site, if there is one."
            >
              <Input
                id="provider-url"
                placeholder="https://example.org/locations/downtown"
                {...register("url.value")}
              />
            </ProviderField>
          </Card>

          <Card className="space-y-5 p-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Why this provider qualifies</h2>
              <p className="text-sm text-slate-500">The agent's justification for including this provider.</p>
            </div>
            <ProviderField label="Reason" htmlFor="provider-reason">
              <Textarea id="provider-reason" rows={3} {...register("reason")} />
            </ProviderField>
          </Card>

          <div className="flex justify-end gap-3">
            <Button type="button" variant="light" onClick={() => reset(provider ?? EMPTY_PROVIDER_FORM_VALUES)}>
              Reset
            </Button>
            {/* Held until the check settles, so a save can't slip past a warning
                that was still resolving — and until a geocode in flight lands,
                since clicking Save is itself what blurs the address field. */}
            <Button type="submit" disabled={geocode.isPending || isCheckingDuplicates}>
              {geocode.isPending
                ? "Locating…"
                : isCheckingDuplicates
                  ? "Checking…"
                  : isSaving
                    ? "Saving…"
                    : "Save provider"}
            </Button>
          </div>
        </fieldset>
      </form>
      {pendingSave && (
        <DuplicateSaveConfirmDialog
          open
          status={pendingSave.status}
          matches={pendingSave.matches}
          onOpenChange={(open) => {
            if (!open) setPendingSave(null);
          }}
          onConfirm={() => onSubmit?.(pendingSave.values)}
        />
      )}
    </>
  );
}
