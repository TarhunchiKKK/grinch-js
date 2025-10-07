import { expect, scenario } from "../../../src";
import { unknownExpectationGenerators } from "./generators";

export const UnknownExpectationScenario = scenario("UnknownExpectation", null, ({ test }) => {
    test.parallel("assertions", ({ test }) => {
        test.serial("toEquals()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownExpectationGenerators.toEquals.valid();

                for (const value of values) {
                    expect.unknown(value).toEquals(value);
                }
            });

            test.case("invalid", () => {
                const values = unknownExpectationGenerators.toEquals.invalid();

                for (const value of values) {
                    expect.unknown(value).not.toEquals(value);
                }
            });
        });

        test.serial("toBeString()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownExpectationGenerators.toBeString.valid();

                for (const value of values) {
                    expect.unknown(value).toBeString();
                }
            });

            test.case("invalid", () => {
                const values = unknownExpectationGenerators.toBeString.invalid();

                for (const value of values) {
                    expect.unknown(value).not.toBeString();
                }
            });
        });

        test.serial("toBeNumber()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownExpectationGenerators.toBeNumber.valid();

                for (const value of values) {
                    expect.unknown(value).toBeNumber();
                }
            });

            test.case("invalid", () => {
                const values = unknownExpectationGenerators.toBeNumber.invalid();

                for (const value of values) {
                    expect.unknown(value).not.toBeNumber();
                }
            });
        });

        test.serial("toBeNaN()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownExpectationGenerators.toBeNaN.valid();

                for (const value of values) {
                    expect.unknown(value).toBeNaN();
                }
            });

            test.case("invalid", () => {
                const values = unknownExpectationGenerators.toBeNaN.invalid();

                for (const value of values) {
                    expect.unknown(value).not.toBeNaN();
                }
            });
        });

        test.serial("toBeBoolean()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownExpectationGenerators.toBeBoolean.valid();

                for (const value of values) {
                    expect.unknown(value).toBeBoolean();
                }
            });

            test.case("invalid", () => {
                const values = unknownExpectationGenerators.toBeBoolean.invalid();

                for (const value of values) {
                    expect.unknown(value).not.toBeBoolean();
                }
            });
        });

        test.serial("toBeRecord()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownExpectationGenerators.toBeRecord.valid();

                for (const value of values) {
                    expect.unknown(value).toBeRecord();
                }
            });

            test.case("invalid", () => {
                const values = unknownExpectationGenerators.toBeRecord.invalid();

                for (const value of values) {
                    expect.unknown(value).not.toBeRecord();
                }
            });
        });

        test.serial("toBeObject()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownExpectationGenerators.toBeObject.valid();

                for (const value of values) {
                    expect.unknown(value).toBeObject();
                }
            });

            test.case("invalid", () => {
                const values = unknownExpectationGenerators.toBeObject.invalid();

                for (const value of values) {
                    expect.unknown(value).not.toBeObject();
                }
            });
        });

        test.serial("toBeArray()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownExpectationGenerators.toBeArray.valid();

                for (const value of values) {
                    expect.unknown(value).toBeArray();
                }
            });

            test.case("invalid", () => {
                const values = unknownExpectationGenerators.toBeArray.invalid();

                for (const value of values) {
                    expect.unknown(value).not.toBeArray();
                }
            });
        });

        test.serial("toBeInstanceOf()", ({ test }) => {
            test.case("valid", () => {
                const values = unknownExpectationGenerators.toBeInstanceOf.valid();

                for (const { value, className } of values) {
                    expect.unknown(value).toBeInstanceOf(className);
                }
            });

            test.case("invalid", () => {
                const values = unknownExpectationGenerators.toBeInstanceOf.invalid();

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
