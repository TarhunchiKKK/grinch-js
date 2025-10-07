import { toBePositiveGenerator } from "./to-be-positive";
import { toBeNegativeGenerator } from "./to-be-negative";
import { toBeIntegerGenerator } from "./to-be-integer";
import { toBeFloatGenerator } from "./to-be-float";
import { toBeNaNGenerator } from "./to-be-nan";
import { toBeLessThanGenerator } from "./to-be-less-than";
import { toBeLessThanOrEqualsGenerator } from "./to-be-less-than-or-equals";
import { toBeGrateThanGenerator } from "./to-be-grater-than";
import { toBeGraterThanOrEqualsGenerator } from "./to-be-grater-than-or-equals";
import { toHaveValueBetweenGenerator } from "./to-have-value-between";

export const numberExpectationGenertors = {
    toBePositive: toBePositiveGenerator,
    toBeNegative: toBeNegativeGenerator,
    toBeInteger: toBeIntegerGenerator,
    toBeFloat: toBeFloatGenerator,
    toBeNaN: toBeNaNGenerator,
    toBeLessThan: toBeLessThanGenerator,
    toBeLessThanOrEquals: toBeLessThanOrEqualsGenerator,
    toBeGraterThan: toBeGrateThanGenerator,
    toBeGraterThanOrEquals: toBeGraterThanOrEqualsGenerator,
    toHaveValueBetween: toHaveValueBetweenGenerator
};
