import { defineConfig, defineType } from "sanity";
import MapInput from "../components/MapInput/MapInput";

export default defineType({
  name: "regionalProvider",
  type: "document",
  title: "Regional Provider",
  fields: [
    {
      name: "point",
      title: "Point",
      type: "geopoint",
    },
  ],
  components: {
    input: MapInput,
  },
});
