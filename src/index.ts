import type { ArraySchema } from "./array";
import type { BooleanSchema } from "./boolean";
import type { IntegerSchema } from "./integer";
import type { NullSchema } from "./null";
import type { NumberSchema } from "./number";
import type { ObjectSchema } from "./object";
import type { StringSchema } from "./string";
import type { UnknownSchema } from "./unknown";
import type { ReferenceObject } from "@omer-x/openapi-types/reference";

/**
 * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is a superset of the JSON Schema Specification Draft 2020-12.
 */
export type SchemaObject = ({
  /**
   * Adds support for polymorphism. The discriminator is an object name that is used to differentiate between other schemas which may satisfy the payload description. See Composition and Inheritance for more details.
   */
  discriminator?: unknown,
  /**
   * This MAY be used only on properties schemas. It has no effect on root schemas. Adds additional metadata to describe the XML representation of this property.
   */
  xml?: unknown,
  /**
   * Additional external documentation for this schema.
   */
  externalDocs?: unknown,
  description?: string,
  readOnly?: boolean,
  writeOnly?: boolean,
  /**
   * @deprecated The nullable keyword has been removed from the Schema Object (null can be used as a type value).
   */
  nullable?: boolean,
  oneOf?: SchemaObject[],
  anyOf?: SchemaObject[],
} & (
  ObjectSchema |
  StringSchema |
  NumberSchema |
  IntegerSchema |
  ArraySchema |
  NullSchema |
  BooleanSchema |
  UnknownSchema
)) | ReferenceObject;
