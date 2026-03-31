import { defineMigration, delete_ } from "sanity/migrate";

export default defineMigration({
  title: "Remove regional providers",
  documentTypes: ["regionalProvider"],
  migrate: {
    document(doc) {
      console.log(`-> Deleting regional provider ${doc._id}`);
      return delete_(doc._id);
    },
  },
});
