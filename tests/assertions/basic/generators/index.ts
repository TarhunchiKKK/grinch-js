import { toBeGenerator } from "./to-be";
import { toBeDefinedGenerator } from "./to-be-defined";
import { toBeNullGenerator } from "./to-be-null";
import { toBeEmptyGenerator } from "./to-be-empty";
import { toBeTruthyGenerator } from "./to-be-truthy";
import { toBeFalsyGenerator } from "./to-be-falsy";
import { toBeInGenerator } from "./to-be-in";
import { toMatchZodSchemaGenerator } from "./to-match-zod-schema";
import { toSatisfyGenerator } from "./to-satisfy";

export const basicExpectationGenerators = {
    toBe: toBeGenerator,
    toBeDefined: toBeDefinedGenerator,
    toBeNull: toBeNullGenerator,
    toBeEmpty: toBeEmptyGenerator,
    toBeTruthy: toBeTruthyGenerator,
    toBeFalsy: toBeFalsyGenerator,
    toBeIn: toBeInGenerator,
    toMatchZodSchema: toMatchZodSchemaGenerator,
    toSatisfy: toSatisfyGenerator
};
