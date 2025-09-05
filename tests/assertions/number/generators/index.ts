import { toBePositiveGenerator } from "./to-be-positive.generator";
import { toBeNegativeGenerator } from "./to-be-negative.generator";
import { toBeIntegerGenerator } from "./to-be-integer.generator";
import { toBeFloatGenerator } from "./to-be-float.generator";
import { toBeNaNGenerator } from "./to-be-nan.generator";
import { toBeLessThanGenerator } from "./to-be-less-than.generator";
import { toBeLessThanOrEqualsGenerator } from "./to-be-less-than-or-equals.generator";
import { toBeGrateThanGenerator } from "./to-be-grater-than.generator";
import { toBeGraterThanOrEqualsGenerator } from "./to-be-grater-than-or-equals.generator";
import { toHaveValueBetweenGenerator } from "./to-have-value-between.generator";

export const GENERATORS = {
    toBePositive: toBePositiveGenerator,
    toBeNegative: toBeNegativeGenerator,
    toBeInteger: toBeIntegerGenerator,
    toBeFloat: toBeFloatGenerator,
    toBeNaN: toBeNaNGenerator,
    toBeLessThan: toBeLessThanGenerator,
    toBeLessThanOrEquals: toBeLessThanOrEqualsGenerator,
    toBeGrater: toBeGrateThanGenerator,
    toBeGraterOrEquals: toBeGraterThanOrEqualsGenerator,
    toHaveValueBetween: toHaveValueBetweenGenerator
};
