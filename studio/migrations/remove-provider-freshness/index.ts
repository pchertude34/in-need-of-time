import { at, defineMigration, unset } from "sanity/migrate";

// Removes the `freshness` object some provider documents carry. It was written
// by an external freshness checker (status, lastCheckedAt, sourceUrl, etc.) and
// was never part of studio/src/schemas/provider/provider.ts, so the Studio
// flags it as an unknown field and nothing reads it.
export default defineMigration({
  title: "remove provider freshness",
  documentTypes: ["provider"],
  filter: "defined(freshness)",
  migrate: {
    document(doc) {
      console.log(`-> Removing freshness on ${doc._id}`);
      return at("freshness", unset());
    },
  },
});
