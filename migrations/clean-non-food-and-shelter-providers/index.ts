import { at, defineMigration, delete_, set } from "sanity/migrate";
import { ServiceType, Provider } from "@/sanity.types";

const serviceTypesToKeep = ["Food Delivery", "Food Pantry", "Food boxes", "Hot Meals"];

// Also keep anything that starts with "Temporary shelter" (case insensitive)
const shouldKeepServiceType = (name: string): boolean => {
  if (!name) return false;
  const lowerName = name.toLowerCase();
  return (
    serviceTypesToKeep.some((keepType) => lowerName.includes(keepType.toLowerCase())) ||
    lowerName.includes("temporary shelter")
  );
};

function shouldKeepProvider(serviceTypes: ServiceType[] = []): boolean {
  for (const st of serviceTypes) {
    if (!st) continue;
    if (st.name && shouldKeepServiceType(st.name)) {
      return true;
    }
  }
  return false;
}

const SERVICE_TYPE_QUERY = `*[_id == $id] { serviceTypes[]->{ _id, slug, name}}`;

export default defineMigration({
  title: "clean non-food and shelter service types from providers",
  documentTypes: ["provider"],
  migrate: {
    async document(doc, context) {
      if (!doc.serviceTypes) {
        console.log(`-> Deleting provider ${doc._id} (no service types)`);
        return delete_(doc._id);
      }

      const response = await context.client.fetch(SERVICE_TYPE_QUERY, { id: doc._id });
      const serviceTypes = response[0]?.serviceTypes as ServiceType[];

      const serviceTypesToKeepRefs = serviceTypes
        .filter((st) => {
          const shouldKeep = shouldKeepServiceType(st.name || "");
          console.log(`  - ${st.name} (keep: ${shouldKeep})`);
          return shouldKeep;
        })
        .map((st) => ({ _type: "reference", _ref: st._id }));

      if (serviceTypesToKeepRefs.length === 0) {
        console.log(`-> Deleting provider ${doc._id} (no matching service types)`);
        return delete_(doc._id);
      }

      if (serviceTypesToKeepRefs.length !== serviceTypes.length) {
        console.log(`-> Updating provider ${doc._id} with filtered service types`);
        return at("serviceTypes", set(serviceTypesToKeepRefs));
      }

      console.log(`-> Keeping provider ${doc._id}`);
      return;
    },
  },
});
