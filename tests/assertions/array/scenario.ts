import { expect, scenario } from "../../../src";
import { arrayAssertionGenerators } from "./generators";

export const ArrayAssertionScenario = scenario("ArrayAssertion", null, ({ test }) => {
    test.parallel("assertions", ({ test }) => {
        test.serial("toHaveLength()", ({ test }) => {
            test.sample("valid", () => {
                const values = arrayAssertionGenerators.toHaveLength.valid();

                for (const { value, length } of values) {
                    expect.array(value).toHaveLength(length);
                }
            });

            test.sample("invalid", () => {
                const values = arrayAssertionGenerators.toHaveLength.invalid();

                for (const { value, length } of values) {
                    expect.array(value).not.toHaveLength(length);
                }
            });
        });

        test.serial("toBeShorterThan()", ({ test }) => {
            test.sample("valid", () => {
                const values = arrayAssertionGenerators.toBeShorterThan.valid();

                for (const { value, length } of values) {
                    expect.array(value).toBeShorterThan(length);
                }
            });

            test.sample("invalid", () => {
                const values = arrayAssertionGenerators.toBeShorterThan.invalid();

                for (const { value, length } of values) {
                    expect.array(value).not.toBeShorterThan(length);
                }
            });
        });

        test.serial("toBeShorterThanOrEquals()", ({ test }) => {
            test.sample("valid", () => {
                const values = arrayAssertionGenerators.toBeShorterThanOrEquals.valid();

                for (const { value, length } of values) {
                    expect.array(value).toBeShorterThanOrEquals(length);
                }
            });

            test.sample("invalid", () => {
                const values = arrayAssertionGenerators.toBeShorterThanOrEquals.invalid();

                for (const { value, length } of values) {
                    expect.array(value).not.toBeShorterThanOrEquals(length);
                }
            });
        });

        test.serial("toBeLongerThan()", ({ test }) => {
            test.sample("valid", () => {
                const values = arrayAssertionGenerators.toBeLongerThan.valid();

                for (const { value, length } of values) {
                    expect.array(value).not.toBeLongerThan(length);
                }
            });

            test.sample("invalid", () => {
                const values = arrayAssertionGenerators.toBeLongerThan.invalid();

                for (const { value, length } of values) {
                    expect.array(value).not.toBeLongerThan(length);
                }
            });
        });

        test.serial("toBeLongerThanOrEquals()", ({ test }) => {
            test.sample("valid", () => {
                const values = arrayAssertionGenerators.toBeLongerThanOrEquals.valid();

                for (const { value, length } of values) {
                    expect.array(value).toBeLongerThanOrEquals(length);
                }
            });

            test.sample("invalid", () => {
                const values = arrayAssertionGenerators.toBeLongerThanOrEquals.invalid();

                for (const { value, length } of values) {
                    expect.array(value).not.toBeLongerThanOrEquals(length);
                }
            });
        });

        test.serial("toHaveLengthBetween()", ({ test }) => {
            test.sample("valid", () => {
                const values = arrayAssertionGenerators.toHaveLengthBetween.valid();

                for (const { value, start, end } of values) {
                    expect.array(value).toHaveLengthBetween(start, end);
                }
            });

            test.sample("invalid", () => {
                const values = arrayAssertionGenerators.toHaveLengthBetween.invalid();

                for (const { value, start, end } of values) {
                    expect.array(value).not.toHaveLengthBetween(start, end);
                }
            });
        });

        test.serial("toIncludes()", ({ test }) => {
            test.sample("valid", () => {
                const values = arrayAssertionGenerators.toIncludes.valid();

                for (const { value, item } of values) {
                    expect.array(value).not.toIncludes(item);
                }
            });

            test.sample("invalid", () => {
                const values = arrayAssertionGenerators.toIncludes.invalid();

                for (const { value, item } of values) {
                    expect.array(value).not.toIncludes(item);
                }
            });
        });

        test.serial("toHaveValueAtIndex()", ({ test }) => {
            test.sample("valid", () => {
                const values = arrayAssertionGenerators.toHaveValueAtIndex.valid();

                for (const { value, index, item } of values) {
                    expect.array(value).not.toHaveValueAtIndex(index, item);
                }
            });

            test.sample("invalid", () => {
                const values = arrayAssertionGenerators.toHaveValueAtIndex.invalid();

                for (const { value, index, item } of values) {
                    expect.array(value).not.toHaveValueAtIndex(index, item);
                }
            });
        });

        test.serial("toHaveSomeMatch()", ({ test }) => {
            test.sample("valid", () => {
                const values = arrayAssertionGenerators.toHaveSomeMatch.valid();

                for (const { value, condition } of values) {
                    expect.array(value).toHaveSomeMatch(condition);
                }
            });

            test.sample("invalid", () => {
                const values = arrayAssertionGenerators.toHaveSomeMatch.invalid();

                for (const { value, condition } of values) {
                    expect.array(value).not.toHaveSomeMatch(condition);
                }
            });
        });

        test.serial("toHaveEveryMatch()", ({ test }) => {
            test.sample("valid", () => {
                const values = arrayAssertionGenerators.toHaveEveryMatch.valid();

                for (const { value, condition } of values) {
                    expect.array(value).toHaveEveryMatch(condition);
                }
            });

            test.sample("invalid", () => {
                const values = arrayAssertionGenerators.toHaveEveryMatch.invalid();

                for (const { value, condition } of values) {
                    expect.array(value).not.toHaveEveryMatch(condition);
                }
            });
        });

        test.serial("toBeSorted()", ({ test }) => {
            test.sample("valid", () => {
                const values = arrayAssertionGenerators.toBeSorted.valid();

                for (const { value, comparator } of values) {
                    expect.array(value).toBeSorted(comparator);
                }
            });

            test.sample("invalid", () => {
                const values = arrayAssertionGenerators.toBeSorted.invalid();

                for (const { value, comparator } of values) {
                    expect.array(value).not.toBeSorted(comparator);
                }
            });
        });
    });
});
