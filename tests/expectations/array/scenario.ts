import { expect, scenario } from "../../../src";
import { arrayExpectationGenerators } from "./generators";

export const ArrayExpectationScenario = scenario("ArrayExpectation", null, ({ test }) => {
    test.parallel("assertions", ({ test }) => {
        test.serial("toHaveLength()", ({ test }) => {
            test.case("valid", () => {
                const values = arrayExpectationGenerators.toHaveLength.valid();

                for (const { value, length } of values) {
                    expect.array(value).toHaveLength(length);
                }
            });

            test.case("invalid", () => {
                const values = arrayExpectationGenerators.toHaveLength.invalid();

                for (const { value, length } of values) {
                    expect.array(value).not.toHaveLength(length);
                }
            });
        });

        test.serial("toBeShorterThan()", ({ test }) => {
            test.case("valid", () => {
                const values = arrayExpectationGenerators.toBeShorterThan.valid();

                for (const { value, length } of values) {
                    expect.array(value).toBeShorterThan(length);
                }
            });

            test.case("invalid", () => {
                const values = arrayExpectationGenerators.toBeShorterThan.invalid();

                for (const { value, length } of values) {
                    expect.array(value).not.toBeShorterThan(length);
                }
            });
        });

        test.serial("toBeShorterThanOrEquals()", ({ test }) => {
            test.case("valid", () => {
                const values = arrayExpectationGenerators.toBeShorterThanOrEquals.valid();

                for (const { value, length } of values) {
                    expect.array(value).toBeShorterThanOrEquals(length);
                }
            });

            test.case("invalid", () => {
                const values = arrayExpectationGenerators.toBeShorterThanOrEquals.invalid();

                for (const { value, length } of values) {
                    expect.array(value).not.toBeShorterThanOrEquals(length);
                }
            });
        });

        test.serial("toBeLongerThan()", ({ test }) => {
            test.case("valid", () => {
                const values = arrayExpectationGenerators.toBeLongerThan.valid();

                for (const { value, length } of values) {
                    expect.array(value).not.toBeLongerThan(length);
                }
            });

            test.case("invalid", () => {
                const values = arrayExpectationGenerators.toBeLongerThan.invalid();

                for (const { value, length } of values) {
                    expect.array(value).not.toBeLongerThan(length);
                }
            });
        });

        test.serial("toBeLongerThanOrEquals()", ({ test }) => {
            test.case("valid", () => {
                const values = arrayExpectationGenerators.toBeLongerThanOrEquals.valid();

                for (const { value, length } of values) {
                    expect.array(value).toBeLongerThanOrEquals(length);
                }
            });

            test.case("invalid", () => {
                const values = arrayExpectationGenerators.toBeLongerThanOrEquals.invalid();

                for (const { value, length } of values) {
                    expect.array(value).not.toBeLongerThanOrEquals(length);
                }
            });
        });

        test.serial("toHaveLengthBetween()", ({ test }) => {
            test.case("valid", () => {
                const values = arrayExpectationGenerators.toHaveLengthBetween.valid();

                for (const { value, start, end } of values) {
                    expect.array(value).toHaveLengthBetween(start, end);
                }
            });

            test.case("invalid", () => {
                const values = arrayExpectationGenerators.toHaveLengthBetween.invalid();

                for (const { value, start, end } of values) {
                    expect.array(value).not.toHaveLengthBetween(start, end);
                }
            });
        });

        test.serial("toIncludes()", ({ test }) => {
            test.case("valid", () => {
                const values = arrayExpectationGenerators.toIncludes.valid();

                for (const { value, item } of values) {
                    expect.array(value).not.toIncludes(item);
                }
            });

            test.case("invalid", () => {
                const values = arrayExpectationGenerators.toIncludes.invalid();

                for (const { value, item } of values) {
                    expect.array(value).not.toIncludes(item);
                }
            });
        });

        test.serial("toHaveValueAtIndex()", ({ test }) => {
            test.case("valid", () => {
                const values = arrayExpectationGenerators.toHaveValueAtIndex.valid();

                for (const { value, index, item } of values) {
                    expect.array(value).not.toHaveValueAtIndex(index, item);
                }
            });

            test.case("invalid", () => {
                const values = arrayExpectationGenerators.toHaveValueAtIndex.invalid();

                for (const { value, index, item } of values) {
                    expect.array(value).not.toHaveValueAtIndex(index, item);
                }
            });
        });

        test.serial("toHaveSomeMatch()", ({ test }) => {
            test.case("valid", () => {
                const values = arrayExpectationGenerators.toHaveSomeMatch.valid();

                for (const { value, condition } of values) {
                    expect.array(value).toHaveSomeMatch(condition);
                }
            });

            test.case("invalid", () => {
                const values = arrayExpectationGenerators.toHaveSomeMatch.invalid();

                for (const { value, condition } of values) {
                    expect.array(value).not.toHaveSomeMatch(condition);
                }
            });
        });

        test.serial("toHaveEveryMatch()", ({ test }) => {
            test.case("valid", () => {
                const values = arrayExpectationGenerators.toHaveEveryMatch.valid();

                for (const { value, condition } of values) {
                    expect.array(value).toHaveEveryMatch(condition);
                }
            });

            test.case("invalid", () => {
                const values = arrayExpectationGenerators.toHaveEveryMatch.invalid();

                for (const { value, condition } of values) {
                    expect.array(value).not.toHaveEveryMatch(condition);
                }
            });
        });

        test.serial("toBeSorted()", ({ test }) => {
            test.case("valid", () => {
                const values = arrayExpectationGenerators.toBeSorted.valid();

                for (const { value, comparator } of values) {
                    expect.array(value).toBeSorted(comparator);
                }
            });

            test.case("invalid", () => {
                const values = arrayExpectationGenerators.toBeSorted.invalid();

                for (const { value, comparator } of values) {
                    expect.array(value).not.toBeSorted(comparator);
                }
            });
        });
    });
});
