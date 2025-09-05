import {toBeUpperCaseGenerator} from './to-be-upper-case.generator'
import {toBeLowerCaseGenerator} from './to-be-lower-case.generator'
import {toStartsWithGenerator} from './to-starts-with.generator'
import {toEndsWithGenerator} from './to-ends-with.generator'
import {toBeNumericStringGenerator} from './to-be-numeric-string.generator'
import { toBeBooleanStringGenerator} from './to-be-boolean-string.generator'
import {toBeUUIDGenerator} from './to-be-uuid.generator'
import {toHaveLengthGenerator} from './to-have-length.generator'
import {toBeShorterThanGenerator} from './to-be-shorter-than.generator'
import {toBeShorterThanOrEqualsGenerator} from './to-be-shorter-than-or-equals.generator'
import {toBeLongerThanGenerator} from './to-be-longer-than.generator'
import {toBeLongerThanOrEqualsGenerator} from './to-be-longer-than-or-equals.generator'
import {toHaveLengthBetweenGenerator} from './to-have-length-between.generator'
import {toIncludesGenerator} from './to-includes.generator'
import {toHaveValueAtIndexGenerator} from './to-have-value-at-index.generator'

export const GENERATORS = {
    toBeUpperCase: toBeUpperCaseGenerator,
    toBeLowerCase: toBeLowerCaseGenerator,
    toStartsWith: toStartsWithGenerator,
    toEndsWith: toEndsWithGenerator,
    toBeNumericString: toBeNumericStringGenerator,
    toBeBooleanString: toBeBooleanStringGenerator,
    toBeUUID: toBeUUIDGenerator,
    toHaveLength: toHaveLengthGenerator,
    toBeShorterThan: toBeShorterThanGenerator,
    toBeShorterThanOrEquals: toBeShorterThanOrEqualsGenerator,
    toBeLongerThan: toBeLongerThanGenerator,
    toBeLongerThanOrEquals: toBeLongerThanOrEqualsGenerator,
    toHaveLengthBetween: toHaveLengthBetweenGenerator,
    toIncludes: toIncludesGenerator,
    toHaveValueAtIndex: toHaveValueAtIndexGenerator

}