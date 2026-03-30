import { type SchemaTypeDefinition } from "sanity";
import providerSchema from "../studio/schemas/provider/provider";
import regionalProviderSchema from "../studio/schemas/provider/regionalProvider";
import serviceTypeSchema from "../studio/schemas/service/serviceType";
import serviceCategorySchema from "../studio/schemas/service/serviceCategory";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [providerSchema, regionalProviderSchema, serviceTypeSchema, serviceCategorySchema],
};
