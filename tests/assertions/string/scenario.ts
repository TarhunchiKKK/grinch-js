import { assert, scenario } from "../../../src";
import { stringAssertionGenerators } from "./generators";

export const StringAssertionScenario = scenario("StringAssertion", null, ({ test }) => {
    test.parallel("assertions", ({ test }) => {
        test.serial("toBeUpperCase()", ({ test }) => {
            test.sample("valid", () => {
                const values = stringAssertionGenerators.toBeUpperCase.valid();

                for (const value of values) {
                    assert.string(value).toBeUpperCase();
                }
            });

            test.sample("invalid", () => {
                const values = stringAssertionGenerators.toBeUpperCase.invalid();

                for (const value of values) {
                    assert.string(value).not.toBeUpperCase();
                }
            });
        });

        test.serial("toBeLowerCase()", ({ test }) => {
            test.sample("valid", () => {
                const values = stringAssertionGenerators.toBeLowerCase.valid();

                for (const value of values) {
                    assert.string(value).toBeLowerCase();
                }
            });

            test.sample("invalid", () => {
                const values = stringAssertionGenerators.toBeLowerCase.invalid();

                for (const value of values) {
                    assert.string(value).not.toBeLowerCase();
                }
            });
        });

        test.serial("toStartsWith()", ({ test }) => {
            test.sample("valid", () => {
                const values = stringAssertionGenerators.toStartsWith.valid();

                for (const { value, substr } of values) {
                    assert.string(value).toStartsWith(substr);
                }
            });

            test.sample("invalid", () => {
                const values = stringAssertionGenerators.toStartsWith.invalid();

                for (const { value, substr } of values) {
                    assert.string(value).not.toStartsWith(substr);
                }
            });
        });

        test.serial("toEndsWith()", ({ test }) => {
            test.sample("valid", () => {
                const values = stringAssertionGenerators.toEndsWith.valid();

                for (const { value, substr } of values) {
                    assert.string(value).toEndsWith(substr);
                }
            });

            test.sample("invalid", () => {
                const values = stringAssertionGenerators.toEndsWith.invalid();

                for (const { value, substr } of values) {
                    assert.string(value).not.toEndsWith(substr);
                }
            });
        });

        test.serial("toBeNumericString()", ({ test }) => {
            test.sample("valid", () => {
                const values = stringAssertionGenerators.toBeNumericString.valid();

                for (const value of values) {
                    assert.string(value).toBeNumericString();
                }
            });

            test.sample("invalid", () => {
                const values = stringAssertionGenerators.toBeNumericString.invalid();

                for (const value of values) {
                    assert.string(value).not.toBeNumericString();
                }
            });
        });

        test.serial("toBeBooleanString()", ({ test }) => {
            test.sample("valid", () => {
                const values = stringAssertionGenerators.toBeBooleanString.valid();

                for (const value of values) {
                    assert.string(value).toBeBooleanString();
                }
            });

            test.sample("invalid", () => {
                const values = stringAssertionGenerators.toBeBooleanString.invalid();

                for (const value of values) {
                    assert.string(value).not.toBeBooleanString();
                }
            });
        });

        test.serial("toBeUUID()", ({ test }) => {
            test.sample("valid", () => {
                const values = stringAssertionGenerators.toBeUUID.valid();

                for (const value of values) {
                    assert.string(value).toBeUUID();
                }
            });

            test.sample("invalid", () => {
                const values = stringAssertionGenerators.toBeUUID.invalid();

                for (const value of values) {
                    assert.string(value).not.toBeUUID();
                }
            });
        });

        test.serial("toHaveLength()", ({ test }) => {
            test.sample("valid", () => {
                const values = stringAssertionGenerators.toHaveLength.valid();

                for (const { value, length } of values) {
                    assert.string(value).toHaveLength(length);
                }
            });

            test.sample("invalid", () => {
                const values = stringAssertionGenerators.toHaveLength.invalid();

                for (const { value, length } of values) {
                    assert.string(value).not.toHaveLength(length);
                }
            });
        });

        test.serial("toBeShorterThan()", ({ test }) => {
            test.sample("valid", () => {
                const values = stringAssertionGenerators.toBeShorterThan.valid();

                for (const { value, length } of values) {
                    assert.string(value).toBeShorterThan(length);
                }
            });

            test.sample("invalid", () => {
                const values = stringAssertionGenerators.toBeShorterThan.invalid();

                for (const { value, length } of values) {
                    assert.string(value).not.toBeShorterThan(length);
                }
            });
        });

        test.serial("toBeShorterThanOrEquals()", ({ test }) => {
            test.sample("valid", () => {
                const values = stringAssertionGenerators.toBeShorterThanOrEquals.valid();

                for (const { value, length } of values) {
                    assert.string(value).toBeShorterThanOrEquals(length);
                }
            });

            test.sample("invalid", () => {
                const values = stringAssertionGenerators.toBeShorterThanOrEquals.invalid();

                for (const { value, length } of values) {
                    assert.string(value).not.toBeShorterThanOrEquals(length);
                }
            });
        });

        test.serial("toBeLongerThan()", ({ test }) => {
            test.sample("valid", () => {
                const values = stringAssertionGenerators.toBeLongerThan.valid();

                for (const { value, length } of values) {
                    assert.string(value).toBeLongerThan(length);
                }
            });

            test.sample("invalid", () => {
                const values = stringAssertionGenerators.toBeLongerThan.invalid();

                for (const { value, length } of values) {
                    assert.string(value).not.toBeLongerThan(length);
                }
            });
        });

        test.serial("toBeLongerThanOrEquals()", ({ test }) => {
            test.sample("valid", () => {
                const values = stringAssertionGenerators.toBeLongerThanOrEquals.valid();

                for (const { value, length } of values) {
                    assert.string(value).toBeLongerThanOrEquals(length);
                }
            });

            test.sample("invalid", () => {
                const values = stringAssertionGenerators.toBeLongerThanOrEquals.invalid();

                for (const { value, length } of values) {
                    assert.string(value).not.toBeLongerThanOrEquals(length);
                }
            });
        });

        test.serial("toHaveLengthBetween()", ({ test }) => {
            test.sample("valid", () => {
                const values = stringAssertionGenerators.toHaveLengthBetween.valid();

                for (const { value, start, end } of values) {
                    assert.string(value).toHaveLengthBetween(start, end);
                }
            });

            test.sample("invalid", () => {
                const values = stringAssertionGenerators.toHaveLengthBetween.invalid();

                for (const { value, start, end } of values) {
                    assert.string(value).not.toHaveLengthBetween(start, end);
                }
            });
        });

        test.serial("toIncludes()", ({ test }) => {
            test.sample("valid", () => {
                const values = stringAssertionGenerators.toIncludes.valid();

                for (const { value, substr } of values) {
                    assert.string(value).toIncludes(substr);
                }
            });

            test.sample("invalid", () => {
                const values = stringAssertionGenerators.toIncludes.invalid();

                for (const { value, substr } of values) {
                    assert.string(value).not.toIncludes(substr);
                }
            });
        });

        test.serial("toHaveValueAtIndex()", ({ test }) => {
            test.sample("valid", () => {
                const values = stringAssertionGenerators.toHaveValueAtIndex.valid();

                for (const { value, index, item } of values) {
                    assert.string(value).toHaveValueAtIndex(index, item);
                }
            });

            test.sample("invalid", () => {
                const values = stringAssertionGenerators.toHaveValueAtIndex.invalid();

                for (const { value, index, item } of values) {
                    assert.string(value).not.toHaveValueAtIndex(index, item);
                }
            });
        });
    });
});
