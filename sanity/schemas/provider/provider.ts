import { defineField, defineType } from "sanity";
import baseProviderFields from "./baseProvider";
import PlaceInput from "@/sanity/components/PlaceInput/PlaceInput";
import AgentInput from "@/sanity/components/AgentInput/AgentInput";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

function isUniquePlace(placeId: string, context: any) {
  const { document } = context;
  const id = document._id.replace(/^drafts\./, "");

  const params = {
    draft: `drafts.${id}`,
    published: id,
    placeId,
  };

  // This will check if there is a different document with the same placeId
  // If the document is the same, or there is no other document with the same placeId it will return false.
  // Otherwise it will return true
  const query = groq`!defined(*[
    _type == "provider" &&
    !(_id in [$draft, $published]) &&
    place.placeId == $placeId
  ][0]._id)`;

  return client.fetch(query, params);
}

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
      name: "Agent",
      title: "Agent",
      type: "object",
      fields: [{ name: "name", title: "Name", type: "string" }],
      components: {
        input: AgentInput,
      },
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
        },
        { name: "location", title: "Location", type: "geopoint" },
        { name: "type", title: "Type", type: "string" },
      ],
      components: {
        input: PlaceInput,
      },
      validation: (Rule) =>
        Rule.custom(async (value: any, context) => {
          // This validation runs whenever a change is detected which can cause alot of API calls.
          // Don't run the query if we don't have a placeId to save on API calls.
          if (!value || !value.placeId) return "Place is required.";

          const isUnique = await isUniquePlace(value.placeId, context);

          if (!isUnique)
            return `A Provider with the Place ID ${value.placeId} already exists. Please choose a different Place, or edit the existing Provider.`;

          return true;
        }),
    }),
    ...baseProviderFields,
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "place.address",
    },
  },
});

export default providerSchema;
