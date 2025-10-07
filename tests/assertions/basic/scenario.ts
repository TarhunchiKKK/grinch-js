import { expect, scenario } from "../../../src";
import { basicExpectationGenerators } from "./generators";

export const BasicExpectationScenario = scenario("Basic Expectations", null, ({ test }) => {
    test.parallel("assertions", ({ test }) => {
        test.serial("toBe()", ({ test }) => {
            test.case("valid", () => {
                const values = basicExpectationGenerators.toBe.valid();

                for (const value of values) {
                    expect.basic(value).toBe(value);
                }
            });

            test.case("invalid", () => {
                const values = basicExpectationGenerators.toBe.invalid();

                for (const value of values) {
                    expect.basic(value.value1).not.toBe(value.value2);
                }
            });
        });

        test.serial("toBeDefined()", ({ test }) => {
            test.case("valid", () => {
                const values = basicExpectationGenerators.toBeDefined.valid();

                for (const value of values) {
                    expect.basic(value).toBeDefined();
                }
            });

            test.case("invalid", () => {
                const values = basicExpectationGenerators.toBeDefined.invalid();

                for (const value of values) {
                    expect.basic(value).not.toBeDefined();
                }
            });
        });

        test.serial("toBeNull()", ({ test }) => {
            test.case("valid", () => {
                const values = basicExpectationGenerators.toBeNull.valid();

                for (const value of values) {
                    expect.basic(value).toBeNull();
                }
            });

            test.case("invalid", () => {
                const values = basicExpectationGenerators.toBeNull.invalid();

                for (const value of values) {
                    expect.basic(value).not.toBeNull();
                }
            });
        });

        test.serial("toBeEmpty()", ({ test }) => {
            test.case("valid", () => {
                const values = basicExpectationGenerators.toBeEmpty.valid();

                for (const value of values) {
                    expect.basic(value).toBeEmpty();
                }
            });

            test.case("invalid", () => {
                const values = basicExpectationGenerators.toBeEmpty.invalid();

                for (const value of values) {
                    expect.basic(value).not.toBeEmpty();
                }
            });
        });

        test.serial("toBeTruthy()", ({ test }) => {
            test.case("valid", () => {
                const values = basicExpectationGenerators.toBeTruthy.valid();

                for (const value of values) {
                    expect.basic(value).toBeTruthy();
                }
            });

            test.case("invalid", () => {
                const values = basicExpectationGenerators.toBeTruthy.invalid();

                for (const value of values) {
                    expect.basic(value).not.toBeTruthy();
                }
            });
        });

        test.serial("toBeFalsy()", ({ test }) => {
            test.case("valid", () => {
                const values = basicExpectationGenerators.toBeFalsy.valid();

                for (const value of values) {
                    expect.basic(value).toBeFalsy();
                }
            });

            test.case("invalid", () => {
                const values = basicExpectationGenerators.toBeFalsy.invalid();

                for (const value of values) {
                    expect.basic(value).not.toBeFalsy();
                }
            });
        });

        test.serial("toBeNull()", ({ test }) => {
            test.case("valid", () => {
                const values = basicExpectationGenerators.toBeNull.valid();

                for (const value of values) {
                    expect.basic(value).toBeNull();
                }
            });

            test.case("invalid", () => {
                const values = basicExpectationGenerators.toBeNull.valid();

                for (const value of values) {
                    expect.basic(value).not.toBeNull();
                }
            });
        });

        test.serial("tomatchZodSchema()", ({ test }) => {
            test.case("valid", () => {
                const values = basicExpectationGenerators.toMatchZodSchema.valid();

                for (const { value, schema } of values) {
                    expect.basic(value).toMatchZodSchema(schema);
                }
            });

            test.case("invalid", () => {
                const values = basicExpectationGenerators.toMatchZodSchema.invalid();

                for (const { value, schema } of values) {
                    expect.basic(value).not.toMatchZodSchema(schema);
                }
            });
        });

        test.serial("toSatisfy()", ({ test }) => {
            test.case("valid", () => {
                const values = basicExpectationGenerators.toSatisfy.valid();

                for (const { value, condition } of values) {
                    expect.basic(value).toSatisfy(condition);
                }
            });

            test.case("invalid", () => {
                const values = basicExpectationGenerators.toSatisfy.invalid();

                for (const { value, condition } of values) {
                    expect.basic(value).not.toSatisfy(condition);
                }
            });
        });
    });
});
