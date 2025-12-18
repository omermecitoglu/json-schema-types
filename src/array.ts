import type { SchemaObject } from ".";

export type ArraySchema = {
  type: "array",
  minItems?: number,
  maxItems?: number,
  uniqueItems?: boolean,
} & ({
  items?: SchemaObject,
  prefixItems?: never,
} | {
  prefixItems: SchemaObject[],
  items?: SchemaObject | false,
});
