import Ajv from "ajv/dist/2020.js";
import { describe, expect, it } from "vitest";
import type { ArraySchema } from "./array";

describe("ArraySchema", () => {
  const ajv = new Ajv({});

  it("should be a valid array schema", () => {
    const schema: ArraySchema = {
      type: "array",
      items: { type: "string" },
    };

    const validate = ajv.compile(schema);

    const data = ["hello", "world"];

    expect(validate.errors).toBeNull();
    expect(validate(data)).toBe(true);
  });

  it("should be a valid array schema with prefixItems without additional items", () => {
    const schema: ArraySchema = {
      type: "array",
      prefixItems: [{ type: "string" }, { type: "number" }],
      items: false,
    };

    const validate = ajv.compile(schema);

    const data = ["hello", 42];

    expect(validate.errors).toBeNull();
    expect(validate(data)).toBe(true);
  });

  it("should be a valid array schema with prefixItems and items", () => {
    const schema: ArraySchema = {
      type: "array",
      prefixItems: [{ type: "string" }, { type: "number" }],
      items: { type: "boolean" },
    };

    const validate = ajv.compile(schema);

    expect(validate(["hello", 42])).toBe(true);
    expect(validate(["hello", 42, true])).toBe(true);
    expect(validate(["hello", 42, true, false])).toBe(true);
    expect(validate(["hello"])).toBe(true);
    expect(validate([42, "hello"])).toBe(false);
  });

  it("should be a valid array schema with prefixItems without items", () => {
    const schema: ArraySchema = {
      type: "array",
      prefixItems: [{ type: "string" }, { type: "number" }],
    };

    const validate = ajv.compile(schema);

    expect(validate(["hello", 42])).toBe(true);
    expect(validate(["hello", 42, "can-be-anything"])).toBe(true);
    expect(validate(["hello"])).toBe(true);
    expect(validate([42, "hello"])).toBe(false);
  });
});
