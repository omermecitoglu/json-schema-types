export type NumberSchema = {
  type: "number",
  format?: "float" | "double",
  const?: number,
  minimum?: number,
  exclusiveMinimum?: number,
  maximum?: number,
  exclusiveMaximum?: number,
  default?: number,
  multipleOf?: number,
};
