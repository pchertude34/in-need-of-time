import React, { useEffect } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { useSanityInstance } from "@sanity/sdk-react";
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
import { RichTextEditor } from "../RichTextEditor/RichTextEditor";
import { EMPTY_PROVIDER_FORM_VALUES, EMPTY_SERVICE_TYPE } from "./constants";
import { serviceTypesQuery } from "../../queries";
import type { ProviderFormValues, ServiceType } from "../../types";

// A stable fallback, so the options list isn't a new array on every render
// before the query resolves.
const NO_SERVICE_TYPES: ServiceType[] = [];

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
  const { register, control, handleSubmit, watch, reset } = useForm<ProviderFormValues>({
    defaultValues: provider ?? EMPTY_PROVIDER_FORM_VALUES,
  });
  const { fields, append, remove } = useFieldArray({ control, name: "serviceTypes" });

  // Fetched once for the whole form rather than per row — every service type
  // picker offers the same list.
  const instance = useSanityInstance();
  const { data: serviceTypeOptions = NO_SERVICE_TYPES, isPending: isLoadingServiceTypes } = useQuery(
    serviceTypesQuery(instance),
  );

  // The agent fills the form in asynchronously, so re-seed it whenever a new
  // provider arrives rather than only on first render.
  useEffect(() => {
    reset(provider ?? EMPTY_PROVIDER_FORM_VALUES);
  }, [provider, reset]);

  // Confidence and source URL aren't editable — they're read back out of form
  // state purely so each field can show where its value came from.
  const values = watch();

  return (
    <form onSubmit={handleSubmit((formValues) => onSubmit?.(formValues))}>
      {/* One disabled fieldset locks every control inside it — inputs, textareas,
          the select triggers and the buttons — without threading a prop through each. */}
      <fieldset className="space-y-6" disabled={disabled || isSaving}>
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
          >
            <Input id="provider-name" placeholder="e.g. St. Austin's Day Care" {...register("name.value")} />
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
          >
            <Input
              id="provider-address"
              placeholder="Street address, city, state, ZIP"
              {...register("address.value")}
            />
          </ProviderField>
          <ProviderField
            label="Location"
            confidence={values.location.confidence}
            sourceUrl={values.location.sourceUrl}
            description="Geocoded from the address above."
          >
            <div className="flex flex-wrap gap-4">
              <Input
                className="flex-1"
                aria-label="Latitude"
                placeholder="Latitude"
                {...register("location.value.latitude")}
              />
              <Input
                className="flex-1"
                aria-label="Longitude"
                placeholder="Longitude"
                {...register("location.value.longitude")}
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
              The service types this provider offers. Add per-service hours only when they differ from the hours above.
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
                          <SelectTrigger id={`service-type-${index}`} ref={selectField.ref} onBlur={selectField.onBlur}>
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
              <Input id="provider-phone" type="tel" placeholder="(555) 555-5555" {...register("contact.phone.value")} />
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
            <Input id="provider-url" placeholder="https://example.org/locations/downtown" {...register("url.value")} />
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
          <Button type="submit">{isSaving ? "Saving…" : "Save provider"}</Button>
        </div>
      </fieldset>
    </form>
  );
}
