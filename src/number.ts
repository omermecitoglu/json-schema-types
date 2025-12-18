export type NumberSchema = {
  type: "number",
  format?: "float" | "double",
  minimum?: number,
  exclusiveMinimum?: number,
  maximum?: number,
  exclusiveMaximum?: number,
  default?: number,
  multipleOf?: number,
};
