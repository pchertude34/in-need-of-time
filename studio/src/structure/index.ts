import type { StructureResolver, DefaultDocumentNodeResolver } from "sanity/structure";
import DocumentPane from "sanity-plugin-documents-pane";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Services")
        .child(
          S.list()
            .title("Services")
            .items([S.documentTypeListItem("serviceType"), S.documentTypeListItem("serviceCategory")]),
        ),
      S.listItem()
        .title("Providers")
        .child(
          S.list()
            .title("Providers")
            .items([S.documentTypeListItem("provider"), S.documentTypeListItem("regionalProvider")]),
        ),
    ]);
// .items([...S.documentTypeListItems()]);

export const defaultDocumentNodeResolver: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  if (schemaType === "serviceType") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(DocumentPane)
        .options({
          query: `*[references($id)] | order(lower(title) asc)`,
          params: { id: `_id` },
          options: { perspective: "previewDrafts" },
        })
        .title("Providers"),
    ]);
  } else {
    return S.document().views([S.view.form()]);
  }
};
