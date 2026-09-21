import { Router } from "express";
import { classifyDuplicateMatches, type DuplicateProviderCandidate } from "@in-need-of-time/utils";
import { sanityClient } from "../sanity";

// ~150ft — close enough to be the same building, not just the same block.
// Matches on either the current `location` field or the legacy `place.location`,
// since providers predating the current schema only have the latter.
const DUPLICATE_ADDRESS_RADIUS_METERS = 45;

const DUPLICATE_PROVIDERS_GROQ = `*[_type == "provider" && (
  (defined(location) && geo::distance(geo::latLng(location.lat, location.lng), geo::latLng($lat, $lng)) < $radius) ||
  (defined(place.location) && geo::distance(geo::latLng(place.location.lat, place.location.lng), geo::latLng($lat, $lng)) < $radius)
)] {_id, title, "address": coalesce(address, place.address)}`;

export const providersRouter = Router();

// GET /providers/duplicates?lat=&lng=&name= — providers already in the directory
// at roughly the given coordinates, scored against `name`.
//
// Returns a `DuplicateCheckResult`: `status` is "none", "potential" (same
// address, different-looking name — possibly a rename) or "likely" (same address
// and a similar name).
providersRouter.get("/duplicates", async (req, res) => {
  const lat = Number(req.query.lat);
  const lng = Number(req.query.lng);
  const name = typeof req.query.name === "string" ? req.query.name : "";

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    res.status(400).json({ error: "lat and lng are required and must be numbers" });
    return;
  }

  const candidates = await sanityClient.fetch<DuplicateProviderCandidate[]>(DUPLICATE_PROVIDERS_GROQ, {
    lat,
    lng,
    radius: DUPLICATE_ADDRESS_RADIUS_METERS,
  });

  res.json(classifyDuplicateMatches(candidates, name));
});
