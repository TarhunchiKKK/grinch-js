import { toEqualsGenerator } from "./to-equals";
import { toBeStringGenerator } from "./to-be-string";
import { toBeNumberGenerator } from "./to-be-number";
import { toBeNaNGenerator } from "./to-be-nan";
import { toBeBooleanGenerator } from "./to-be-boolean";
import { toBeInstanceOfGenerator } from "./to-be-instance-of";
import { toBeRecordGenerator } from "./to-be-record";
import { toBeObjectGenerator } from "./to-be-object";
import { toBeArrayGenerator } from "./to-be-array";

export const unknownExpectationGenerators = {
    toEquals: toEqualsGenerator,
    toBeString: toBeStringGenerator,
    toBeNumber: toBeNumberGenerator,
    toBeNaN: toBeNaNGenerator,
    toBeBoolean: toBeBooleanGenerator,
    toBeInstanceOf: toBeInstanceOfGenerator,
    toBeRecord: toBeRecordGenerator,
    toBeObject: toBeObjectGenerator,
    toBeArray: toBeArrayGenerator
};
