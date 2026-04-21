import { defineMigration, delete_ } from "sanity/migrate";

export default defineMigration({
  title: "Delete unused service types",
  documentTypes: ["serviceType"],
  migrate: {
    async document(doc, context) {
      // Check if this service type is referenced by any provider
      const referencingProvidersQuery = `count(*[_type == "provider" && references($id)])`;
      const referenceCount = await context.client.fetch(referencingProvidersQuery, { id: doc._id });

      if (referenceCount === 0) {
        console.log(`-> Deleting unused service type: ${doc.name} (${doc._id})`);
        return delete_(doc._id);
      }

      console.log(`-> Keeping service type: ${doc.name} (referenced by ${referenceCount} providers)`);
      return [] as any; // No changes needed
    },
  },
});
