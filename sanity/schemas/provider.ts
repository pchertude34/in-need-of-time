import { defineField, defineType } from "sanity";
import PlaceInput from "@/sanity/components/PlaceInput/PlaceInput";
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
      name: "publicContact",
      title: "Public Contact",
      type: "object",
      description:
        "Additional contact information that may not be available in the Place API. This information will be shown to the public, and prioritiezed over the Place API data.",
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
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
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
