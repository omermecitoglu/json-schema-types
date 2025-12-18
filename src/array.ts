import type { SchemaObject } from ".";

export type ArraySchema = {
  type: "array",
  items?: SchemaObject,
  prefixItems?: SchemaObject[],
  minItems?: number,
  maxItems?: number,
  uniqueItems?: boolean,
};
