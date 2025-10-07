import { expect, scenario } from "../../../src";
import { unknownAssertionGenerators } from "./generators";

export const UnknownAssertionScenario = scenario("UnknownAssertion", null, ({ test }) => {
    test.parallel("assertions", ({ test }) => {
        test.serial("toEquals()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownAssertionGenerators.toEquals.valid();

                for (const value of values) {
                    expect.unknown(value).toEquals(value);
                }
            });

            test.case("invalid", () => {
                const values = unknownAssertionGenerators.toEquals.invalid();

                for (const value of values) {
                    expect.unknown(value).not.toEquals(value);
                }
            });
        });

        test.serial("toBeString()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownAssertionGenerators.toBeString.valid();

                for (const value of values) {
                    expect.unknown(value).toBeString();
                }
            });

            test.case("invalid", () => {
                const values = unknownAssertionGenerators.toBeString.invalid();

                for (const value of values) {
                    expect.unknown(value).not.toBeString();
                }
            });
        });

        test.serial("toBeNumber()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownAssertionGenerators.toBeNumber.valid();

                for (const value of values) {
                    expect.unknown(value).toBeNumber();
                }
            });

            test.case("invalid", () => {
                const values = unknownAssertionGenerators.toBeNumber.invalid();

                for (const value of values) {
                    expect.unknown(value).not.toBeNumber();
                }
            });
        });

        test.serial("toBeNaN()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownAssertionGenerators.toBeNaN.valid();

                for (const value of values) {
                    expect.unknown(value).toBeNaN();
                }
            });

            test.case("invalid", () => {
                const values = unknownAssertionGenerators.toBeNaN.invalid();

                for (const value of values) {
                    expect.unknown(value).not.toBeNaN();
                }
            });
        });

        test.serial("toBeBoolean()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownAssertionGenerators.toBeBoolean.valid();

                for (const value of values) {
                    expect.unknown(value).toBeBoolean();
                }
            });

            test.case("invalid", () => {
                const values = unknownAssertionGenerators.toBeBoolean.invalid();

                for (const value of values) {
                    expect.unknown(value).not.toBeBoolean();
                }
            });
        });

        test.serial("toBeRecord()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownAssertionGenerators.toBeRecord.valid();

                for (const value of values) {
                    expect.unknown(value).toBeRecord();
                }
            });

            test.case("invalid", () => {
                const values = unknownAssertionGenerators.toBeRecord.invalid();

                for (const value of values) {
                    expect.unknown(value).not.toBeRecord();
                }
            });
        });

        test.serial("toBeObject()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownAssertionGenerators.toBeObject.valid();

                for (const value of values) {
                    expect.unknown(value).toBeObject();
                }
            });

            test.case("invalid", () => {
                const values = unknownAssertionGenerators.toBeObject.invalid();

                for (const value of values) {
                    expect.unknown(value).not.toBeObject();
                }
            });
        });

        test.serial("toBeArray()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownAssertionGenerators.toBeArray.valid();

                for (const value of values) {
                    expect.unknown(value).toBeArray();
                }
            });

            test.case("invalid", () => {
                const values = unknownAssertionGenerators.toBeArray.invalid();

                for (const value of values) {
                    expect.unknown(value).not.toBeArray();
                }
            });
        });

        test.serial("toBeInstanceOf()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownAssertionGenerators.toBeInstanceOf.valid();

                for (const { value, className } of values) {
                    expect.unknown(value).toBeInstanceOf(className);
                }
            });

            test.case("invalid", () => {
                const values = unknownAssertionGenerators.toBeInstanceOf.invalid();

                for (const value of values.values) {
                    for (const className of values.classNames) {
                        if (value instanceof className) {
                            continue;
                        }

                        expect.unknown(value).not.toBeInstanceOf(className);
                    }
                }
            });
        });
    });
});
