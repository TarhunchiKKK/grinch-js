import { toEqualsGenerator } from "./to-equals.generator";
import { toBeStringGenerator } from "./to-be-string.generator";
import { toBeNumberGenerator } from "./to-be-number.generator";
import { toBeNaNGenerator } from "./to-be-nan.generator";
import { toBeBooleanGenerator } from "./to-be-boolean.generator";
import { toBeBigIntGenerator } from "./to-be-bigint.generate";
import { toBeInstanceOfGenerator } from "./to-be-instance-of.generator";
import { toBeRecordGenerator } from "./to-be-record.generator";
import { toBeObjectGenerator } from "./to-be-object.generator";
import { toBeArrayGenerator } from "./to-be-array.generator";

export const unknownAssertionGenerators = {
    toEquals: toEqualsGenerator,
    toBeString: toBeStringGenerator,
    toBeNumber: toBeNumberGenerator,
    toBeNaN: toBeNaNGenerator,
    toBeBoolean: toBeBooleanGenerator,
    toBeBigInt: toBeBigIntGenerator,
    toBeInstanceOf: toBeInstanceOfGenerator,
    toBeRecord: toBeRecordGenerator,
    toBeObject: toBeObjectGenerator,
    toBeArray: toBeArrayGenerator
};
