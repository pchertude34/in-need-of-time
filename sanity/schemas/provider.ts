import { defineType } from "sanity";
import PlaceInput from "@/sanity/components/PlaceInput/PlaceInput";

const providerSchema = defineType({
  name: "provider",
  type: "document",
  title: "Provider",
  fields: [
    {
      name: "title",
      title: "Provider Name",
      type: "string",
    },
    {
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
        },
        { name: "location", title: "Location", type: "geopoint" },
      ],
      components: {
        input: PlaceInput,
      },
    },
    {
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
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "place.address",
    },
  },
});

export default providerSchema;
