import { expect, scenario } from "../../../src";
import { stringAssertionGenerators } from "./generators";

export const StringAssertionScenario = scenario("StringAssertion", null, ({ test }) => {
    test.parallel("assertions", ({ test }) => {
        test.serial("toBeUpperCase()", ({ test }) => {
            test.case("valid", () => {
                const values = stringAssertionGenerators.toBeUpperCase.valid();

                for (const value of values) {
                    expect.string(value).toBeUpperCase();
                }
            });

            test.case("invalid", () => {
                const values = stringAssertionGenerators.toBeUpperCase.invalid();

                for (const value of values) {
                    expect.string(value).not.toBeUpperCase();
                }
            });
        });

        test.serial("toBeLowerCase()", ({ test }) => {
            test.case("valid", () => {
                const values = stringAssertionGenerators.toBeLowerCase.valid();

                for (const value of values) {
                    expect.string(value).toBeLowerCase();
                }
            });

            test.case("invalid", () => {
                const values = stringAssertionGenerators.toBeLowerCase.invalid();

                for (const value of values) {
                    expect.string(value).not.toBeLowerCase();
                }
            });
        });

        test.serial("toStartsWith()", ({ test }) => {
            test.case("valid", () => {
                const values = stringAssertionGenerators.toStartsWith.valid();

                for (const { value, substr } of values) {
                    expect.string(value).toStartsWith(substr);
                }
            });

            test.case("invalid", () => {
                const values = stringAssertionGenerators.toStartsWith.invalid();

                for (const { value, substr } of values) {
                    expect.string(value).not.toStartsWith(substr);
                }
            });
        });

        test.serial("toEndsWith()", ({ test }) => {
            test.case("valid", () => {
                const values = stringAssertionGenerators.toEndsWith.valid();

                for (const { value, substr } of values) {
                    expect.string(value).toEndsWith(substr);
                }
            });

            test.case("invalid", () => {
                const values = stringAssertionGenerators.toEndsWith.invalid();

                for (const { value, substr } of values) {
                    expect.string(value).not.toEndsWith(substr);
                }
            });
        });

        test.serial("toBeNumericString()", ({ test }) => {
            test.case("valid", () => {
                const values = stringAssertionGenerators.toBeNumericString.valid();

                for (const value of values) {
                    expect.string(value).toBeNumericString();
                }
            });

            test.case("invalid", () => {
                const values = stringAssertionGenerators.toBeNumericString.invalid();

                for (const value of values) {
                    expect.string(value).not.toBeNumericString();
                }
            });
        });

        test.serial("toBeBooleanString()", ({ test }) => {
            test.case("valid", () => {
                const values = stringAssertionGenerators.toBeBooleanString.valid();

                for (const value of values) {
                    expect.string(value).toBeBooleanString();
                }
            });

            test.case("invalid", () => {
                const values = stringAssertionGenerators.toBeBooleanString.invalid();

                for (const value of values) {
                    expect.string(value).not.toBeBooleanString();
                }
            });
        });

        test.serial("toMatch()", ({ test }) => {
            test.case("valid", () => {
                const values = stringAssertionGenerators.toMatchRegex.valid();

                for (const { value, regexp } of values) {
                    expect.string(value).toMatchRegex(regexp);
                }
            });

            test.case("invalid", () => {
                const values = stringAssertionGenerators.toMatchRegex.invalid();

                for (const { value, regexp } of values) {
                    expect.string(value).not.toMatchRegex(regexp);
                }
            });
        });

        test.serial("toBeUUID()", ({ test }) => {
            test.case("valid", () => {
                const values = stringAssertionGenerators.toBeUUID.valid();

                for (const value of values) {
                    expect.string(value).toBeUUID();
                }
            });

            test.case("invalid", () => {
                const values = stringAssertionGenerators.toBeUUID.invalid();

                for (const value of values) {
                    expect.string(value).not.toBeUUID();
                }
            });
        });

        test.serial("toHaveLength()", ({ test }) => {
            test.case("valid", () => {
                const values = stringAssertionGenerators.toHaveLength.valid();

                for (const { value, length } of values) {
                    expect.string(value).toHaveLength(length);
                }
            });

            test.case("invalid", () => {
                const values = stringAssertionGenerators.toHaveLength.invalid();

                for (const { value, length } of values) {
                    expect.string(value).not.toHaveLength(length);
                }
            });
        });

        test.serial("toBeShorterThan()", ({ test }) => {
            test.case("valid", () => {
                const values = stringAssertionGenerators.toBeShorterThan.valid();

                for (const { value, length } of values) {
                    expect.string(value).toBeShorterThan(length);
                }
            });

            test.case("invalid", () => {
                const values = stringAssertionGenerators.toBeShorterThan.invalid();

                for (const { value, length } of values) {
                    expect.string(value).not.toBeShorterThan(length);
                }
            });
        });

        test.serial("toBeShorterThanOrEquals()", ({ test }) => {
            test.case("valid", () => {
                const values = stringAssertionGenerators.toBeShorterThanOrEquals.valid();

                for (const { value, length } of values) {
                    expect.string(value).toBeShorterThanOrEquals(length);
                }
            });

            test.case("invalid", () => {
                const values = stringAssertionGenerators.toBeShorterThanOrEquals.invalid();

                for (const { value, length } of values) {
                    expect.string(value).not.toBeShorterThanOrEquals(length);
                }
            });
        });

        test.serial("toBeLongerThan()", ({ test }) => {
            test.case("valid", () => {
                const values = stringAssertionGenerators.toBeLongerThan.valid();

                for (const { value, length } of values) {
                    expect.string(value).toBeLongerThan(length);
                }
            });

            test.case("invalid", () => {
                const values = stringAssertionGenerators.toBeLongerThan.invalid();

                for (const { value, length } of values) {
                    expect.string(value).not.toBeLongerThan(length);
                }
            });
        });

        test.serial("toBeLongerThanOrEquals()", ({ test }) => {
            test.case("valid", () => {
                const values = stringAssertionGenerators.toBeLongerThanOrEquals.valid();

                for (const { value, length } of values) {
                    expect.string(value).toBeLongerThanOrEquals(length);
                }
            });

            test.case("invalid", () => {
                const values = stringAssertionGenerators.toBeLongerThanOrEquals.invalid();

                for (const { value, length } of values) {
                    expect.string(value).not.toBeLongerThanOrEquals(length);
                }
            });
        });

        test.serial("toHaveLengthBetween()", ({ test }) => {
            test.case("valid", () => {
                const values = stringAssertionGenerators.toHaveLengthBetween.valid();

                for (const { value, start, end } of values) {
                    expect.string(value).toHaveLengthBetween(start, end);
                }
            });

            test.case("invalid", () => {
                const values = stringAssertionGenerators.toHaveLengthBetween.invalid();

                for (const { value, start, end } of values) {
                    expect.string(value).not.toHaveLengthBetween(start, end);
                }
            });
        });

        test.serial("toIncludes()", ({ test }) => {
            test.case("valid", () => {
                const values = stringAssertionGenerators.toIncludes.valid();

                for (const { value, substr } of values) {
                    expect.string(value).toIncludes(substr);
                }
            });

            test.case("invalid", () => {
                const values = stringAssertionGenerators.toIncludes.invalid();

                for (const { value, substr } of values) {
                    expect.string(value).not.toIncludes(substr);
                }
            });
        });

        test.serial("toHaveValueAtIndex()", ({ test }) => {
            test.case("valid", () => {
                const values = stringAssertionGenerators.toHaveValueAtIndex.valid();

                for (const { value, index, item } of values) {
                    expect.string(value).toHaveValueAtIndex(index, item);
                }
            });

            test.case("invalid", () => {
                const values = stringAssertionGenerators.toHaveValueAtIndex.invalid();

                for (const { value, index, item } of values) {
                    expect.string(value).not.toHaveValueAtIndex(index, item);
                }
            });
        });
    });
});
