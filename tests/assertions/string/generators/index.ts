import { toBeUpperCaseGenerator } from "./to-be-upper-case";
import { toBeLowerCaseGenerator } from "./to-be-lower-case";
import { toStartsWithGenerator } from "./to-starts-with";
import { toEndsWithGenerator } from "./to-ends-with";
import { toBeNumericStringGenerator } from "./to-be-numeric-string";
import { toBeBooleanStringGenerator } from "./to-be-boolean-string";
import { toBeUUIDGenerator } from "./to-be-uuid";
import { toHaveLengthGenerator } from "./to-have-length";
import { toBeShorterThanGenerator } from "./to-be-shorter-than";
import { toBeShorterThanOrEqualsGenerator } from "./to-be-shorter-than-or-equals";
import { toBeLongerThanGenerator } from "./to-be-longer-than";
import { toBeLongerThanOrEqualsGenerator } from "./to-be-longer-than-or-equals";
import { toHaveLengthBetweenGenerator } from "./to-have-length-between";
import { toIncludesGenerator } from "./to-includes";
import { toHaveValueAtIndexGenerator } from "./to-have-value-at-index";
import { toMatchRegexGenerator } from "./to-match-rexex";

export const stringExpectationGenerators = {
    toBeUpperCase: toBeUpperCaseGenerator,
    toBeLowerCase: toBeLowerCaseGenerator,
    toStartsWith: toStartsWithGenerator,
    toEndsWith: toEndsWithGenerator,
    toBeNumericString: toBeNumericStringGenerator,
    toBeBooleanString: toBeBooleanStringGenerator,
    toMatchRegex: toMatchRegexGenerator,
    toBeUUID: toBeUUIDGenerator,
    toHaveLength: toHaveLengthGenerator,
    toBeShorterThan: toBeShorterThanGenerator,
    toBeShorterThanOrEquals: toBeShorterThanOrEqualsGenerator,
    toBeLongerThan: toBeLongerThanGenerator,
    toBeLongerThanOrEquals: toBeLongerThanOrEqualsGenerator,
    toHaveLengthBetween: toHaveLengthBetweenGenerator,
    toIncludes: toIncludesGenerator,
    toHaveValueAtIndex: toHaveValueAtIndexGenerator
};
