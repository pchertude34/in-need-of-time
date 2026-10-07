import { defineField, defineArrayMember } from "sanity";
import hoursOfOperationFields from "./hoursOfOperationFields";

// A duplicate serviceType reference across entries, rather than within one
// entry, is what actually needs catching — Rule.unique() would instead compare
// whole entries (including their independent hoursOfOperation overrides).
function hasDuplicateServiceTypes(serviceTypes: { serviceType?: { _ref?: string } }[] | undefined) {
  if (!serviceTypes) return false;

  const refs = serviceTypes.map((entry) => entry.serviceType?._ref).filter(Boolean);

  return new Set(refs).size !== refs.length;
}

// This is a shared collection of provider fields that should be extened by other provider types.
const baseProviderFields = [
  defineField({
    name: "serviceTypes",
    title: "Service Types",
    type: "array",
    of: [
      defineArrayMember({
        type: "object",
        name: "providerServiceType",
        fields: [
          defineField({
            name: "serviceType",
            title: "Service Type",
            type: "reference",
            to: [{ type: "serviceType" }],
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: "hoursOfOperation",
            title: "Service Hours",
            type: "object",
            description: "Only needed when this service's hours differ from the provider's overall hours.",
            fields: hoursOfOperationFields,
          }),
        ],
        preview: {
          select: { title: "serviceType.name" },
        },
      }),
    ],
    validation: (Rule) =>
      Rule.required().custom((serviceTypes: { serviceType?: { _ref?: string } }[] | undefined) =>
        hasDuplicateServiceTypes(serviceTypes) ? "Each service type can only be added once." : true,
      ),
  }),
  defineField({
    name: "phone",
    title: "Phone",
    type: "string",
  }),
  defineField({
    name: "email",
    title: "Email",
    type: "string",
  }),
  defineField({
    name: "website",
    title: "Website",
    type: "url",
  }),
  defineField({
    name: "description",
    title: "Description",
    type: "array",
    of: [{ type: "block" }],
  }),
];

export default baseProviderFields;
