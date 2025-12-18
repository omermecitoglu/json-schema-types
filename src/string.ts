export type StringSchema = {
  type: "string",
  format?: "date" | "date-time" | "password" | "byte" | "binary" | "email" | "uuid" | "uri" | "hostname" | "ipv4" | "ipv6",
  contentMediaType?: string,
  contentEncoding?: "base16" | "base32" | "base64" | "base64url",
  pattern?: string,
  default?: string,
  enum?: string[],
  minLength?: number,
  maxLength?: number,
};
