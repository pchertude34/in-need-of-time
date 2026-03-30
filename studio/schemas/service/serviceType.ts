import { defineType, defineField } from "sanity";

export default defineType({
  name: "serviceType",
  type: "document",
  title: "Service Type",
  fields: [
    defineField({
      name: "name",
      title: "Service Type Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        slugify: (input: string) => input.toLowerCase().replace(/[`~!@#$%^&*()_|\-=?;:'",.<>\s\{\}\[\]\\\/]/gi, "-"),
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "serviceCategory",
      title: "Service Category",
      type: "array",
      of: [{ type: "reference", to: [{ type: "serviceCategory" }] }],
    }),
  ],
});
