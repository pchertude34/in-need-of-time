import { at, defineMigration, set, unset } from "sanity/migrate";

// Brings existing documents in line with the schema change in
// studio/src/schemas/provider/baseProvider.ts: the `publicContact` object's
// `phone`, `email` and `website` fields are now top-level fields on the
// document, and the `internalContact` object was dropped entirely. Schema
// changes don't touch existing data, so documents saved before this change
// still have the old shape until this runs. A top-level value that's already
// set wins over the nested one, so re-running is safe.
type LegacyPublicContact = { phone?: string; email?: string; website?: string };

const CONTACT_FIELDS = ["phone", "email", "website"] as const;

export default defineMigration({
  title: "flatten provider public contact and remove internal contact",
  documentTypes: ["provider", "regionalProvider"],
  filter: "defined(publicContact) || defined(internalContact)",
  migrate: {
    document(doc) {
      const publicContact = (doc.publicContact ?? {}) as LegacyPublicContact;
      const patches = [];

      for (const field of CONTACT_FIELDS) {
        const value = publicContact[field]?.trim();
        if (value && !doc[field]) {
          console.log(`-> Moving publicContact.${field} to ${field} on ${doc._id}`);
          patches.push(at(field, set(value)));
        }
      }

      if (doc.publicContact !== undefined) {
        console.log(`-> Removing publicContact on ${doc._id}`);
        patches.push(at("publicContact", unset()));
      }

      if (doc.internalContact !== undefined) {
        console.log(`-> Removing internalContact on ${doc._id}`);
        patches.push(at("internalContact", unset()));
      }

      return patches;
    },
  },
});
