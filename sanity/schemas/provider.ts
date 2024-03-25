// import PlaceInput from '../sanitycomponents/PlaceInput';
import { defineField, defineType, ValidationContext } from "sanity";
import PlaceInput from "@/sanity/components/PlaceInput/PlaceInput";

const providerSchema = defineType({
  name: "provider",
  type: "document",
  title: "Provider",
  fields: [
    defineField({
      name: "title",
      title: "Provider Name",
      type: "string",
    }),
    defineField({
      name: "place",
      title: "Place",
      type: "object",
      fields: [
        { name: "name", title: "Name", type: "string" },
        { name: "address", title: "Address", type: "string" },
        {
          name: "placeId",
          title: "Place ID",
          type: "string",
          validation: (Rule) =>
            Rule.custom((fields) => {
              console.log("placeId validation", fields);
              return "error with place id";
            }),
        },
        { name: "location", title: "Location", type: "geopoint" },
      ],
      components: {
        input: PlaceInput,
      },
    }),
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
      validation: (ServiceType) => ServiceType.unique(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "place.address",
    },
  },
});

export default providerSchema;
