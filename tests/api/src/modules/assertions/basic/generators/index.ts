import { toBeGenerator } from "./to-be.generator";
import { toBeDefinedGenerator } from "./to-be-defined.generator";
import { toBeNullGenerator } from "./to-be-null.generator";
import { toBeEmptyGenerator } from "./to-be-empty.generator";
import { toBeTruthyGenerator } from "./to-be-truthy.generator";
import { toBeFalsyGenerator } from "./to-be-falsy.generator";
import { toBeInGenerator } from "./to-be-in.generator";

export const GENERATORS = {
    toBe: {
        valid: () => toBeGenerator.valid(),
        invalid: () => toBeGenerator.invalid()
    },
    toBeDefined: {
        valid: () => toBeDefinedGenerator.valid(),
        invalid: () => toBeDefinedGenerator.invalid()
    },
    toBeNull: {
        valid: () => toBeNullGenerator.valid(),
        invalid: () => toBeNullGenerator.invalid()
    },
    toBeEmpty: {
        valid: () => toBeEmptyGenerator.valid(),
        invalid: () => toBeEmptyGenerator.invalid()
    },
    toBeTruthy: {
        valid: () => toBeTruthyGenerator.valid(),
        invalid: () => toBeTruthyGenerator.invalid()
    },
    toBeFalsy: {
        valid: () => toBeFalsyGenerator.valid(),
        invalid: () => toBeFalsyGenerator.invalid()
    },
    toBeIn: {
        valid: () => toBeInGenerator.valid(),
        invalid: () => toBeInGenerator.invalid()
    }
};
