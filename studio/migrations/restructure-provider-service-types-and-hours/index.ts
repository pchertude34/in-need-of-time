import { nanoid } from "nanoid";
import { at, defineMigration, set } from "sanity/migrate";

// Brings existing documents in line with the schema change in
// studio/src/schemas/provider/{provider,baseProvider}.ts: `serviceTypes` entries
// are now `{ serviceType, hoursOfOperation? }` objects instead of bare
// references, and `hoursOfOperation` is now `{ periods, weekdayText }` instead
// of a bare periods array. Schema changes don't touch existing data, so
// documents saved before this change still have the old shape until this runs.
type LegacyServiceTypeRef = { _type: "reference"; _ref: string; _key?: string };
type LegacyPeriod = { open: { day: number; time: string }; close: { day: number; time: string }; _key?: string };

const isLegacyServiceTypes = (serviceTypes: unknown): serviceTypes is LegacyServiceTypeRef[] =>
  Array.isArray(serviceTypes) && serviceTypes.every((entry) => entry?._type === "reference");

const isLegacyHoursOfOperation = (hoursOfOperation: unknown): hoursOfOperation is LegacyPeriod[] =>
  Array.isArray(hoursOfOperation);

export default defineMigration({
  title: "restructure provider service types and hours of operation",
  documentTypes: ["provider", "regionalProvider"],
  migrate: {
    document(doc) {
      const patches = [];

      if (isLegacyServiceTypes(doc.serviceTypes)) {
        console.log(`-> Wrapping serviceTypes on ${doc._id}`);
        patches.push(
          at(
            "serviceTypes",
            set(
              doc.serviceTypes.map((ref) => ({
                _type: "providerServiceType",
                _key: ref._key ?? nanoid(),
                serviceType: { _type: "reference", _ref: ref._ref },
              })),
            ),
          ),
        );
      }

      if (isLegacyHoursOfOperation(doc.hoursOfOperation)) {
        console.log(`-> Restructuring hoursOfOperation on ${doc._id}`);
        patches.push(at("hoursOfOperation", set({ periods: doc.hoursOfOperation, weekdayText: [] })));
      }

      return patches;
    },
  },
});
