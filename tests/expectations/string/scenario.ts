import { expect, scenario } from "../../../src";
import { stringExpectationGenerators } from "./generators";

export const StringExpectationScenario = scenario("StringExpectation", null, ({ test }) => {
    test.parallel("assertions", ({ test }) => {
        test.serial("toBeUpperCase()", ({ test }) => {
            test.case("valid", () => {
                const values = stringExpectationGenerators.toBeUpperCase.valid();

                for (const value of values) {
                    expect.string(value).toBeUpperCase();
                }
            });

            test.case("invalid", () => {
                const values = stringExpectationGenerators.toBeUpperCase.invalid();

                for (const value of values) {
                    expect.string(value).not.toBeUpperCase();
                }
            });
        });

        test.serial("toBeLowerCase()", ({ test }) => {
            test.case("valid", () => {
                const values = stringExpectationGenerators.toBeLowerCase.valid();

                for (const value of values) {
                    expect.string(value).toBeLowerCase();
                }
            });

            test.case("invalid", () => {
                const values = stringExpectationGenerators.toBeLowerCase.invalid();

                for (const value of values) {
                    expect.string(value).not.toBeLowerCase();
                }
            });
        });

        test.serial("toStartsWith()", ({ test }) => {
            test.case("valid", () => {
                const values = stringExpectationGenerators.toStartsWith.valid();

                for (const { value, substr } of values) {
                    expect.string(value).toStartsWith(substr);
                }
            });

            test.case("invalid", () => {
                const values = stringExpectationGenerators.toStartsWith.invalid();

                for (const { value, substr } of values) {
                    expect.string(value).not.toStartsWith(substr);
                }
            });
        });

        test.serial("toEndsWith()", ({ test }) => {
            test.case("valid", () => {
                const values = stringExpectationGenerators.toEndsWith.valid();

                for (const { value, substr } of values) {
                    expect.string(value).toEndsWith(substr);
                }
            });

            test.case("invalid", () => {
                const values = stringExpectationGenerators.toEndsWith.invalid();

                for (const { value, substr } of values) {
                    expect.string(value).not.toEndsWith(substr);
                }
            });
        });

        test.serial("toBeNumericString()", ({ test }) => {
            test.case("valid", () => {
                const values = stringExpectationGenerators.toBeNumericString.valid();

                for (const value of values) {
                    expect.string(value).toBeNumericString();
                }
            });

            test.case("invalid", () => {
                const values = stringExpectationGenerators.toBeNumericString.invalid();

                for (const value of values) {
                    expect.string(value).not.toBeNumericString();
                }
            });
        });

        test.serial("toBeBooleanString()", ({ test }) => {
            test.case("valid", () => {
                const values = stringExpectationGenerators.toBeBooleanString.valid();

                for (const value of values) {
                    expect.string(value).toBeBooleanString();
                }
            });

            test.case("invalid", () => {
                const values = stringExpectationGenerators.toBeBooleanString.invalid();

                for (const value of values) {
                    expect.string(value).not.toBeBooleanString();
                }
            });
        });

        test.serial("toMatch()", ({ test }) => {
            test.case("valid", () => {
                const values = stringExpectationGenerators.toMatchRegex.valid();

                for (const { value, regexp } of values) {
                    expect.string(value).toMatchRegex(regexp);
                }
            });

            test.case("invalid", () => {
                const values = stringExpectationGenerators.toMatchRegex.invalid();

                for (const { value, regexp } of values) {
                    expect.string(value).not.toMatchRegex(regexp);
                }
            });
        });

        test.serial("toBeUUID()", ({ test }) => {
            test.case("valid", () => {
                const values = stringExpectationGenerators.toBeUUID.valid();

                for (const value of values) {
                    expect.string(value).toBeUUID();
                }
            });

            test.case("invalid", () => {
                const values = stringExpectationGenerators.toBeUUID.invalid();

                for (const value of values) {
                    expect.string(value).not.toBeUUID();
                }
            });
        });

        test.serial("toHaveLength()", ({ test }) => {
            test.case("valid", () => {
                const values = stringExpectationGenerators.toHaveLength.valid();

                for (const { value, length } of values) {
                    expect.string(value).toHaveLength(length);
                }
            });

            test.case("invalid", () => {
                const values = stringExpectationGenerators.toHaveLength.invalid();

                for (const { value, length } of values) {
                    expect.string(value).not.toHaveLength(length);
                }
            });
        });

        test.serial("toBeShorterThan()", ({ test }) => {
            test.case("valid", () => {
                const values = stringExpectationGenerators.toBeShorterThan.valid();

                for (const { value, length } of values) {
                    expect.string(value).toBeShorterThan(length);
                }
            });

            test.case("invalid", () => {
                const values = stringExpectationGenerators.toBeShorterThan.invalid();

                for (const { value, length } of values) {
                    expect.string(value).not.toBeShorterThan(length);
                }
            });
        });

        test.serial("toBeShorterThanOrEquals()", ({ test }) => {
            test.case("valid", () => {
                const values = stringExpectationGenerators.toBeShorterThanOrEquals.valid();

                for (const { value, length } of values) {
                    expect.string(value).toBeShorterThanOrEquals(length);
                }
            });

            test.case("invalid", () => {
                const values = stringExpectationGenerators.toBeShorterThanOrEquals.invalid();

                for (const { value, length } of values) {
                    expect.string(value).not.toBeShorterThanOrEquals(length);
                }
            });
        });

        test.serial("toBeLongerThan()", ({ test }) => {
            test.case("valid", () => {
                const values = stringExpectationGenerators.toBeLongerThan.valid();

                for (const { value, length } of values) {
                    expect.string(value).toBeLongerThan(length);
                }
            });

            test.case("invalid", () => {
                const values = stringExpectationGenerators.toBeLongerThan.invalid();

                for (const { value, length } of values) {
                    expect.string(value).not.toBeLongerThan(length);
                }
            });
        });

        test.serial("toBeLongerThanOrEquals()", ({ test }) => {
            test.case("valid", () => {
                const values = stringExpectationGenerators.toBeLongerThanOrEquals.valid();

                for (const { value, length } of values) {
                    expect.string(value).toBeLongerThanOrEquals(length);
                }
            });

            test.case("invalid", () => {
                const values = stringExpectationGenerators.toBeLongerThanOrEquals.invalid();

                for (const { value, length } of values) {
                    expect.string(value).not.toBeLongerThanOrEquals(length);
                }
            });
        });

        test.serial("toHaveLengthBetween()", ({ test }) => {
            test.case("valid", () => {
                const values = stringExpectationGenerators.toHaveLengthBetween.valid();

                for (const { value, start, end } of values) {
                    expect.string(value).toHaveLengthBetween(start, end);
                }
            });

            test.case("invalid", () => {
                const values = stringExpectationGenerators.toHaveLengthBetween.invalid();

                for (const { value, start, end } of values) {
                    expect.string(value).not.toHaveLengthBetween(start, end);
                }
            });
        });

        test.serial("toIncludes()", ({ test }) => {
            test.case("valid", () => {
                const values = stringExpectationGenerators.toIncludes.valid();

                for (const { value, substr } of values) {
                    expect.string(value).toIncludes(substr);
                }
            });

            test.case("invalid", () => {
                const values = stringExpectationGenerators.toIncludes.invalid();

                for (const { value, substr } of values) {
                    expect.string(value).not.toIncludes(substr);
                }
            });
        });

        test.serial("toHaveValueAtIndex()", ({ test }) => {
            test.case("valid", () => {
                const values = stringExpectationGenerators.toHaveValueAtIndex.valid();

                for (const { value, index, item } of values) {
                    expect.string(value).toHaveValueAtIndex(index, item);
                }
            });

            test.case("invalid", () => {
                const values = stringExpectationGenerators.toHaveValueAtIndex.invalid();

                for (const { value, index, item } of values) {
                    expect.string(value).not.toHaveValueAtIndex(index, item);
                }
            });
        });
    });
});
