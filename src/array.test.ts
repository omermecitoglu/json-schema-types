import Ajv from "ajv/dist/2020.js";
import { describe, expect, it } from "vitest";
import type { SchemaObject } from "./index";

describe("ArraySchema", () => {
  const ajv = new Ajv({});

  it("can be an array schema with no constraints", () => {
    const schema: SchemaObject = {
      type: "array",
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array of strings", () => {
    const schema: SchemaObject = {
      type: "array",
      items: { type: "string" },
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with no items allowed", () => {
    const schema: SchemaObject = {
      type: "array",
      items: false,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with at least one item", () => {
    const schema: SchemaObject = {
      type: "array",
      minItems: 1,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with at most five items", () => {
    const schema: SchemaObject = {
      type: "array",
      maxItems: 5,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with 1 to 5 items", () => {
    const schema: SchemaObject = {
      type: "array",
      minItems: 1,
      maxItems: 5,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array of strings with at least one item", () => {
    const schema: SchemaObject = {
      type: "array",
      items: { type: "string" },
      minItems: 1,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array of strings with at most five items", () => {
    const schema: SchemaObject = {
      type: "array",
      items: { type: "string" },
      maxItems: 5,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array of strings with 1 to 5 items", () => {
    const schema: SchemaObject = {
      type: "array",
      items: { type: "string" },
      minItems: 1,
      maxItems: 5,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an empty array", () => {
    const schema: SchemaObject = {
      type: "array",
      items: false,
      maxItems: 0,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can not be an array with no prefix items", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [],
    };

    expect(ajv.validateSchema(schema)).toBe(false);
  });

  it("can be an array with the first item being a string", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }],
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with the first item being a string and additional items allowed", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }],
      items: true,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with exactly one string item", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }],
      items: false,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with the first item being a string and subsequent items being numbers", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }],
      items: { type: "number" },
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with the first item being a string and at least one item", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }],
      minItems: 1,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with the first item being a string and at most one item", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }],
      maxItems: 1,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with exactly one string item", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }],
      minItems: 1,
      maxItems: 1,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with the first item being a string, subsequent items being numbers, and at least one item", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }],
      items: { type: "number" },
      minItems: 1,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with the first item being a string, subsequent items being numbers, and at most five items", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }],
      items: { type: "number" },
      maxItems: 5,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with the first item being a string, subsequent items being numbers, and 1 to 5 items", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }],
      items: { type: "number" },
      minItems: 1,
      maxItems: 5,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with the first item being a string and the second being a number", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }, { type: "number" }],
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with the first item being a string, the second being a number, and additional items allowed", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }, { type: "number" }],
      items: true,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with exactly two items: a string and a number", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }, { type: "number" }],
      items: false,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with the first item being a string, the second being a number, and subsequent items being booleans", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }, { type: "number" }],
      items: { type: "boolean" },
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with the first item being a string, the second being a number, and at least two items", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }, { type: "number" }],
      minItems: 2,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with the first item being a string, the second being a number, and at most two items", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }, { type: "number" }],
      maxItems: 2,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with exactly two items: a string and a number", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }, { type: "number" }],
      minItems: 2,
      maxItems: 2,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with the first item being a string, the second being a number, subsequent items being booleans, and at least two items", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }, { type: "number" }],
      items: { type: "boolean" },
      minItems: 2,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with the first item being a string, the second being a number, subsequent items being booleans, and at most five items", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }, { type: "number" }],
      items: { type: "boolean" },
      maxItems: 5,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });

  it("can be an array with the first item being a string, the second being a number, subsequent items being booleans, and 2 to 5 items", () => {
    const schema: SchemaObject = {
      type: "array",
      prefixItems: [{ type: "string" }, { type: "number" }],
      items: { type: "boolean" },
      minItems: 2,
      maxItems: 5,
    };

    expect(ajv.validateSchema(schema)).toBe(true);
  });
});
