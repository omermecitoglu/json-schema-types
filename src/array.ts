import type { SchemaObject } from ".";

export type ArraySchema = {
  type: "array",
  prefixItems?: SchemaObject[],
  items?: SchemaObject | boolean,
  minItems?: number,
  maxItems?: number,
  uniqueItems?: boolean,
};
