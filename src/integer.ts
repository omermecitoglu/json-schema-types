export type IntegerSchema = {
  type: "integer",
  format?: "int32" | "int64",
  const?: number,
  minimum?: number,
  exclusiveMinimum?: number,
  maximum?: number,
  exclusiveMaximum?: number,
  default?: number,
  multipleOf?: number,
};
