import { type SchemaTypeDefinition } from "sanity";
import providerSchema from "./schemas/provider";
import regionalProviderSchema from "./schemas/regionalProvider";
import serviceTypeSchema from "./schemas/serviceType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [providerSchema, regionalProviderSchema, serviceTypeSchema],
};
