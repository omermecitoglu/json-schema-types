import Ajv from "ajv";
import { describe, expect, it } from "vitest";
import type { ArraySchema } from "./array";

describe("ArraySchema", () => {
  const ajv = new Ajv();

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
});
