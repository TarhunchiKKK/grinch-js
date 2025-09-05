import { toBeGenerator } from "./to-be.generator";
import { toBeDefinedGenerator } from "./to-be-defined.generator";
import { toBeNullGenerator } from "./to-be-null.generator";
import { toBeEmptyGenerator } from "./to-be-empty.generator";
import { toBeTruthyGenerator } from "./to-be-truthy.generator";
import { toBeFalsyGenerator } from "./to-be-falsy.generator";
import { toBeInGenerator } from "./to-be-in.generator";

export const basicAssertionGenerators = {
    toBe: toBeGenerator,
    toBeDefined: toBeDefinedGenerator,
    toBeNull: toBeNullGenerator,
    toBeEmpty: toBeEmptyGenerator,
    toBeTruthy: toBeTruthyGenerator,
    toBeFalsy: toBeFalsyGenerator,
    toBeIn: toBeInGenerator
};
