import { toHaveLengthGenerator } from "./to-have-length.ts";
import { toBeShorterThanGenerator } from "./to-be-shorter-than.ts";
import { toBeShorterThanOrEqualsGenerator } from "./to-be-shorter-than-or-equals.ts";
import { toBeLongerThanGenerator } from "./to-be-longer-than.ts";
import { toBeLongerThanOrEqualsGenerator } from "./to-be-longer-than-or-equals.ts";
import { toHaveLengthBetweenGenerator } from "./to-have-length-between.ts";
import { toIncludesGenerator } from "./to-includes.ts";
import { toHaveValueAtIndexGenerator } from "./to-have-value-at-index.ts";
import { toHaveSomeMatchGenerator } from "./to-have-some-match.ts";
import { toHaveEveryMatchGenerator } from "./to-have-every-match.ts";
import { toBeSortedGenerator } from "./to-be-sorted.ts";

export const arrayAssertionGenerators = {
    toHaveLength: toHaveLengthGenerator,
    toBeShorterThan: toBeShorterThanGenerator,
    toBeShorterThanOrEquals: toBeShorterThanOrEqualsGenerator,
    toBeLongerThan: toBeLongerThanGenerator,
    toBeLongerThanOrEquals: toBeLongerThanOrEqualsGenerator,
    toHaveLengthBetween: toHaveLengthBetweenGenerator,
    toIncludes: toIncludesGenerator,
    toHaveValueAtIndex: toHaveValueAtIndexGenerator,
    toHaveSomeMatch: toHaveSomeMatchGenerator,
    toHaveEveryMatch: toHaveEveryMatchGenerator,
    toBeSorted: toBeSortedGenerator
};
