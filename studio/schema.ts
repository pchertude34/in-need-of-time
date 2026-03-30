import { type SchemaTypeDefinition } from "sanity";
import providerSchema from "./schemas/provider/provider";
import regionalProviderSchema from "./schemas/provider/regionalProvider";
import serviceTypeSchema from "./schemas/service/serviceType";
import serviceCategorySchema from "./schemas/service/serviceCategory";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [providerSchema, regionalProviderSchema, serviceTypeSchema, serviceCategorySchema],
};
