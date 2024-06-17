import { defineField } from "sanity";

// This is a shared collection of provider fields that should be extened by other provider types.
const baseProviderFields = [
  defineField({
    name: "serviceTypes",
    title: "Service Types",
    type: "array",
    of: [
      {
        type: "reference",
        to: [{ type: "serviceType" }],
      },
    ],
    validation: (ServiceType) => ServiceType.required().unique(),
  }),
  defineField({
    name: "publicContact",
    title: "Public Contact",
    type: "object",
    description:
      "Additional contact information to be shown to the public. This information will be prioritized over contact information from google if it exists in the provider data.",
    fields: [
      {
        name: "phone",
        title: "Phone",
        type: "string",
      },
      {
        name: "website",
        title: "Website",
        type: "url",
      },
    ],
  }),
  defineField({
    name: "description",
    title: "Description",
    type: "array",
    of: [{ type: "block" }],
  }),
  defineField({
    name: "internalContact",
    title: "Internal Contact",
    type: "object",
    description: "Internal Contact information for IToN Team Members. This data will not be shown to the public.",
    fields: [
      {
        name: "contactName",
        title: "Contact Name",
        type: "string",
        description: "The name of the internal contact person.",
      },
      {
        name: "contactEmail",
        title: "Contact Email",
        type: "string",
        description: "The email of the internal contact person.",
      },
      {
        name: "contactPhone",
        title: "Contact Phone",
        type: "string",
        description: "The phone number of the internal contact person.",
      },
    ],
  }),
];

export default baseProviderFields;
