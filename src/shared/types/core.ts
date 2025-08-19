export type TypeofResponse = "string" | "number" | "boolean" | "bigint" | "object";

export type ClassConstructor = new (...args: unknown[]) => object;

export type ElementType<T> = T extends Array<infer U> ? U : never;
