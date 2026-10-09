import { at, defineMigration, set, unset } from "sanity/migrate";

// Brings existing documents in line with the removal of the legacy `place`
// object from studio/src/schemas/provider/provider.ts. Its `address` and
// `location` move to the top-level fields of the same name; its Google
// `placeId`, `name` and `type` are dropped. Schema changes don't touch existing
// data, so documents saved before this change still carry `place` until this
// runs.
//
// A top-level `address` that's already set wins, since it was written after
// `place` was phased out. A top-level `location` only wins if it's a real
// geopoint — some agent-written documents have `{ latitude, longitude }`
// instead, which GROQ's geo functions can't read.
type Geopoint = { _type: "geopoint"; lat: number; lng: number; alt?: number };
type LegacyPlace = { address?: string; location?: Geopoint };

const isGeopoint = (value: unknown): value is Geopoint =>
  typeof (value as Geopoint)?.lat === "number" && typeof (value as Geopoint)?.lng === "number";

export default defineMigration({
  title: "move provider place to address and location",
  documentTypes: ["provider"],
  filter: "defined(place)",
  migrate: {
    document(doc) {
      const place = doc.place as LegacyPlace;
      const patches = [];

      const placeAddress = place.address?.trim();
      if (placeAddress && !doc.address) {
        console.log(`-> Moving place.address to address on ${doc._id}`);
        patches.push(at("address", set(placeAddress)));
      }

      if (isGeopoint(place.location) && !isGeopoint(doc.location)) {
        const { lat, lng } = place.location;
        console.log(`-> Moving place.location to location on ${doc._id}`);
        patches.push(at("location", set({ _type: "geopoint", lat, lng })));
      }

      if (!isGeopoint(doc.location) && !isGeopoint(place.location)) {
        console.warn(`!! No location to migrate on ${doc._id} (${doc.title}) — it won't appear in map search`);
      }

      console.log(`-> Removing place on ${doc._id}`);
      patches.push(at("place", unset()));

      return patches;
    },
  },
});
