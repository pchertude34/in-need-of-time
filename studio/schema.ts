import { type SchemaTypeDefinition } from "sanity";
import providerSchema from "./src/schemas/provider/provider";
import regionalProviderSchema from "./src/schemas/provider/regionalProvider";
import serviceTypeSchema from "./src/schemas/service/serviceType";
import serviceCategorySchema from "./src/schemas/service/serviceCategory";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [providerSchema, regionalProviderSchema, serviceTypeSchema, serviceCategorySchema],
};
