import { defineField, defineType } from "sanity";

export default defineType({
  name: "serviceCategory",
  type: "document",
  title: "Service Category",
  fields: [
    defineField({
      name: "title",
      title: "Service Category Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "This is used to generate the URL path for the service category. Please seperate words with hyphens and use no other special characters.",
      options: {
        source: "title",
        slugify: (input: string) => input.toLowerCase().replace(/[`~!@#$%^&*()_|\-=?;:'",.<>\s\{\}\[\]\\\/]/gi, "-"),
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
    }),
  ],
});
