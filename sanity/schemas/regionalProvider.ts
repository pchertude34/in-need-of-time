import { defineType } from "sanity";
import MapInput from "../components/MapInput/MapInput";

export default defineType({
  name: "regionalProvider",
  type: "document",
  title: "Regional Provider",
  fields: [
    {
      name: "title",
      title: "Provider Name",
      type: "string",
    },
    {
      name: "region",
      title: "Region",
      type: "object",
      fields: [
        {
          name: "location",
          title: "Location",
          type: "geopoint",
        },
        { name: "distanceRadius", title: "Distance Radius", type: "number" },
      ],
      components: {
        input: MapInput,
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
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "website",
      title: "Website",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
