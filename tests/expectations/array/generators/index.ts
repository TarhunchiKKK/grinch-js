import { toHaveLengthGenerator } from "./to-have-length";
import { toBeShorterThanGenerator } from "./to-be-shorter-than";
import { toBeShorterThanOrEqualsGenerator } from "./to-be-shorter-than-or-equals";
import { toBeLongerThanGenerator } from "./to-be-longer-than";
import { toBeLongerThanOrEqualsGenerator } from "./to-be-longer-than-or-equals";
import { toHaveLengthBetweenGenerator } from "./to-have-length-between";
import { toIncludesGenerator } from "./to-includes";
import { toHaveValueAtIndexGenerator } from "./to-have-value-at-index";
import { toHaveSomeMatchGenerator } from "./to-have-some-match";
import { toHaveEveryMatchGenerator } from "./to-have-every-match";
import { toBeSortedGenerator } from "./to-be-sorted";

export const arrayExpectationGenerators = {
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
