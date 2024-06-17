import { defineType, defineField } from "sanity";
import baseProviderFields from "./provider/baseProvider";
import MapInput from "../components/MapInput/MapInput";

export default defineType({
  name: "regionalProvider",
  type: "document",
  title: "Regional Provider",
  fields: [
    defineField({
      name: "title",
      title: "Provider Name",
      type: "string",
    }),
    defineField({
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
      validation: (Rule) =>
        Rule.custom((value: any) => {
          console.log("value :>> ", value);
          if (value.distanceRadius <= 0) {
            return "Distance Radius must be greater than 0";
          }
          return true;
        }),
    }),
    ...baseProviderFields,
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
