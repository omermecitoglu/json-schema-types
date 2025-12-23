import type { SchemaObject } from ".";
import type { ReferenceObject } from "@omer-x/openapi-types/reference";

export type ObjectSchema = {
  type: "object",
  /**
   * An object is a collection of property/value pairs. The properties keyword is used to define the object properties – you need to list the property names and specify a schema for each property.
   */
  properties?: Record<string, SchemaObject>,
  /**
   * By default, all object properties are optional. You can specify the required properties in the required list
   */
  required?: string[],
  additionalProperties?: SchemaObject | ReferenceObject | boolean,
  propertyNames?: SchemaObject & { type: "string" },
  minProperties?: number,
  maxProperties?: number,
};
