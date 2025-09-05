import { assert, scenario } from "../../../src";
import { unknownAssertionGenerators } from "./generators";

export const UnknownAssertionScenario = scenario("UnknownAssertion", null, ({ test }) => {
    test.parallel("assertions", ({ test }) => {
        test.serial("toEquals()", ({ test }) => {
            test.sample("valid", () => {
                const values = unknownAssertionGenerators.toEquals.valid();

                for (const value of values) {
                    assert.unknown(value).toEquals(value);
                }
            });

            test.sample("invalid", () => {
                const values = unknownAssertionGenerators.toEquals.invalid();

                for (const value of values) {
                    assert.unknown(value).not.toEquals(value);
                }
            });
        });

        test.serial("toBeString()", ({ test }) => {
            test.sample("valid", () => {
                const values = unknownAssertionGenerators.toBeString.valid();

                for (const value of values) {
                    assert.unknown(value).toBeString();
                }
            });

            test.sample("invalid", () => {
                const values = unknownAssertionGenerators.toBeString.invalid();

                for (const value of values) {
                    assert.unknown(value).not.toBeString();
                }
            });
        });

        test.serial("toBeNumber()", ({ test }) => {
            test.sample("valid", () => {
                const values = unknownAssertionGenerators.toBeNumber.valid();

                for (const value of values) {
                    assert.unknown(value).toBeNumber();
                }
            });

            test.sample("invalid", () => {
                const values = unknownAssertionGenerators.toBeNumber.invalid();

                for (const value of values) {
                    assert.unknown(value).not.toBeNumber();
                }
            });
        });

        test.serial("toBeNaN()", ({ test }) => {
            test.sample("valid", () => {
                const values = unknownAssertionGenerators.toBeNaN.valid();

                for (const value of values) {
                    assert.unknown(value).toBeNaN();
                }
            });

            test.sample("invalid", () => {
                const values = unknownAssertionGenerators.toBeNaN.invalid();

                for (const value of values) {
                    assert.unknown(value).not.toBeNaN();
                }
            });
        });

        test.serial("toBeBoolean()", ({ test }) => {
            test.sample("valid", () => {
                const values = unknownAssertionGenerators.toBeBoolean.valid();

                for (const value of values) {
                    assert.unknown(value).toBeBoolean();
                }
            });

            test.sample("invalid", () => {
                const values = unknownAssertionGenerators.toBeBoolean.invalid();

                for (const value of values) {
                    assert.unknown(value).not.toBeBoolean();
                }
            });
        });

        test.serial("toBeBigInt()", ({ test }) => {
            test.sample("valid", () => {
                const values = unknownAssertionGenerators.toBeBigInt.valid();

                for (const value of values) {
                    assert.unknown(value).toBeBigInt();
                }
            });

            test.sample("invalid", () => {
                const values = unknownAssertionGenerators.toBeBigInt.invalid();

                for (const value of values) {
                    assert.unknown(value).not.toBeBigInt();
                }
            });
        });

        test.serial("toBeRecord()", ({ test }) => {
            test.sample("valid", () => {
                const values = unknownAssertionGenerators.toBeRecord.valid();

                for (const value of values) {
                    assert.unknown(value).toBeRecord();
                }
            });

            test.sample("invalid", () => {
                const values = unknownAssertionGenerators.toBeRecord.invalid();

                for (const value of values) {
                    assert.unknown(value).not.toBeRecord();
                }
            });
        });

        test.serial("toBeObject()", ({ test }) => {
            test.sample("valid", () => {
                const values = unknownAssertionGenerators.toBeObject.valid();

                for (const value of values) {
                    assert.unknown(value).toBeObject();
                }
            });

            test.sample("invalid", () => {
                const values = unknownAssertionGenerators.toBeObject.invalid();

                for (const value of values) {
                    assert.unknown(value).not.toBeObject();
                }
            });
        });

        test.serial("toBeArray()", ({ test }) => {
            test.sample("valid", () => {
                const values = unknownAssertionGenerators.toBeArray.valid();

                for (const value of values) {
                    assert.unknown(value).toBeArray();
                }
            });

            test.sample("invalid", () => {
                const values = unknownAssertionGenerators.toBeArray.invalid();

                for (const value of values) {
                    assert.unknown(value).not.toBeArray();
                }
            });
        });

        test.serial("toBeInstanceOf()", ({ test }) => {
            test.sample("valid", () => {
                const values = unknownAssertionGenerators.toBeInstanceOf.valid();

                for (const { value, className } of values) {
                    assert.unknown(value).toBeInstanceOf(className);
                }
            });

            test.sample("invalid", () => {
                const values = unknownAssertionGenerators.toBeInstanceOf.invalid();

                for (const value of values.values) {
                    for (const className of values.classNames) {
                        if (value instanceof className) {
                            continue;
                        }

                        assert.unknown(value).not.toBeInstanceOf(className);
                    }
                }
            });
        });
    });
});
