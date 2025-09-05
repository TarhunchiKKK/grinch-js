import { toEqualsGenerator } from "./to-equals";
import { toBeStringGenerator } from "./to-be-string";
import { toBeNumberGenerator } from "./to-be-number";
import { toBeNaNGenerator } from "./to-be-nan";
import { toBeBooleanGenerator } from "./to-be-boolean";
import { toBeBigIntGenerator } from "./to-be-bigint";
import { toBeInstanceOfGenerator } from "./to-be-instance-of";
import { toBeRecordGenerator } from "./to-be-record";
import { toBeObjectGenerator } from "./to-be-object";
import { toBeArrayGenerator } from "./to-be-array";

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
