import { defineField, defineType } from "sanity";
import baseProviderFields from "./baseProvider";
import hoursOfOperationFields from "./hoursOfOperationFields";

const providerSchema = defineType({
  name: "provider",
  type: "document",
  title: "Provider",
  fields: [
    defineField({
      name: "title",
      title: "Provider Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "geopoint",
      description: "The location of the provider on the map.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hoursOfOperation",
      title: "Hours of Operation",
      type: "object",
      description: "The provider's overall hours, used when every service shares the same schedule.",
      fields: hoursOfOperationFields,
    }),
    defineField({
      name: "url",
      title: "Provider Page URL",
      type: "url",
      description: "A direct link to this provider's own page on the source site, if there is one.",
    }),
    ...baseProviderFields,
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "address",
    },
  },
});

export default providerSchema;
