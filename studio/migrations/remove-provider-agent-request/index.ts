import { at, defineMigration, unset } from "sanity/migrate";

// Brings existing documents in line with the removal of the `agentRequest`
// field from studio/src/schemas/provider/provider.ts. It held the instructions
// for the old in-Studio "Run Provider Agent" action, which no longer exists.
// Schema changes don't touch existing data, so documents saved before this
// change still carry the field until this runs.
export default defineMigration({
  title: "remove provider agent request",
  documentTypes: ["provider"],
  filter: "defined(agentRequest)",
  migrate: {
    document(doc) {
      console.log(`-> Removing agentRequest on ${doc._id}`);
      return at("agentRequest", unset());
    },
  },
});
