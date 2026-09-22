import { Router } from "express";
import { CensusGeocodeError, geocodeAddress, type GeocodeResult } from "@in-need-of-time/utils";

/** What the endpoint returns — the coordinates, without the geocoder's raw match. */
export type GeocodedAddress = Pick<GeocodeResult, "latitude" | "longitude" | "matchedAddress">;

export const geocodeRouter = Router();

// GET /geocode?address= — the coordinates of a free-form US address, via the
// same Census geocoder the provider agent's `geocode_address` tool uses, so a
// hand-edited address in the provider form resolves exactly the way the agent's
// would.
//
// Responds 200 with `null` when the geocoder finds no match: an unmatched
// address is an answer (bad or ambiguous address), not a failed request.
geocodeRouter.get("/", async (req, res) => {
  const address = typeof req.query.address === "string" ? req.query.address.trim() : "";

  if (!address) {
    res.status(400).json({ error: "address is required" });
    return;
  }

  try {
    const match = await geocodeAddress(address);
    const result: GeocodedAddress | null = match && {
      latitude: match.latitude,
      longitude: match.longitude,
      matchedAddress: match.matchedAddress,
    };

    res.json(result);
  } catch (error) {
    // The geocoder is a third-party service this route only proxies, so a
    // failure there is an upstream problem rather than the caller's.
    res.status(502).json({
      error: error instanceof CensusGeocodeError ? error.message : "Failed to geocode the address",
    });
  }
});
