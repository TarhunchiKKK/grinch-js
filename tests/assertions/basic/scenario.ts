import { expect, scenario } from "../../../src";
import { basicAssertionGenerators } from "./generators";

export const BasicAssertionScenario = scenario("Basic Assertions", null, ({ test }) => {
    test.parallel("assertions", ({ test }) => {
        test.serial("toBe()", ({ test }) => {
            test.sample("valid", () => {
                const values = basicAssertionGenerators.toBe.valid();

                for (const value of values) {
                    expect.basic(value).toBe(value);
                }
            });

            test.sample("invalid", () => {
                const values = basicAssertionGenerators.toBe.invalid();

                for (const value of values) {
                    expect.basic(value.value1).not.toBe(value.value2);
                }
            });
        });

        test.serial("toBeDefined()", ({ test }) => {
            test.sample("valid", () => {
                const values = basicAssertionGenerators.toBeDefined.valid();

                for (const value of values) {
                    expect.basic(value).toBeDefined();
                }
            });

            test.sample("invalid", () => {
                const values = basicAssertionGenerators.toBeDefined.invalid();

                for (const value of values) {
                    expect.basic(value).not.toBeDefined();
                }
            });
        });

        test.serial("toBeNull()", ({ test }) => {
            test.sample("valid", () => {
                const values = basicAssertionGenerators.toBeNull.valid();

                for (const value of values) {
                    expect.basic(value).toBeNull();
                }
            });

            test.sample("invalid", () => {
                const values = basicAssertionGenerators.toBeNull.invalid();

                for (const value of values) {
                    expect.basic(value).not.toBeNull();
                }
            });
        });

        test.serial("toBeEmpty()", ({ test }) => {
            test.sample("valid", () => {
                const values = basicAssertionGenerators.toBeEmpty.valid();

                for (const value of values) {
                    expect.basic(value).toBeEmpty();
                }
            });

            test.sample("invalid", () => {
                const values = basicAssertionGenerators.toBeEmpty.invalid();

                for (const value of values) {
                    expect.basic(value).not.toBeEmpty();
                }
            });
        });

        test.serial("toBeTruthy()", ({ test }) => {
            test.sample("valid", () => {
                const values = basicAssertionGenerators.toBeTruthy.valid();

                for (const value of values) {
                    expect.basic(value).toBeTruthy();
                }
            });

            test.sample("invalid", () => {
                const values = basicAssertionGenerators.toBeTruthy.invalid();

                for (const value of values) {
                    expect.basic(value).not.toBeTruthy();
                }
            });
        });

        test.serial("toBeFalsy()", ({ test }) => {
            test.sample("valid", () => {
                const values = basicAssertionGenerators.toBeFalsy.valid();

                for (const value of values) {
                    expect.basic(value).toBeFalsy();
                }
            });

            test.sample("invalid", () => {
                const values = basicAssertionGenerators.toBeFalsy.invalid();

                for (const value of values) {
                    expect.basic(value).not.toBeFalsy();
                }
            });
        });

        test.serial("toBeNull()", ({ test }) => {
            test.sample("valid", () => {
                const values = basicAssertionGenerators.toBeNull.valid();

                for (const value of values) {
                    expect.basic(value).toBeNull();
                }
            });

            test.sample("invalid", () => {
                const values = basicAssertionGenerators.toBeNull.valid();

                for (const value of values) {
                    expect.basic(value).not.toBeNull();
                }
            });
        });

        test.serial("tomatchZodSchema()", ({ test }) => {
            test.sample("valid", () => {
                const values = basicAssertionGenerators.toMatchZodSchema.valid();

                for (const { value, schema } of values) {
                    expect.basic(value).toMatchZodSchema(schema);
                }
            });

            test.sample("invalid", () => {
                const values = basicAssertionGenerators.toMatchZodSchema.invalid();

                for (const { value, schema } of values) {
                    expect.basic(value).not.toMatchZodSchema(schema);
                }
            });
        });

        test.serial("toSatisfy()", ({ test }) => {
            test.sample("valid", () => {
                const values = basicAssertionGenerators.toSatisfy.valid();

                for (const { value, condition } of values) {
                    expect.basic(value).toSatisfy(condition);
                }
            });

            test.sample("invalid", () => {
                const values = basicAssertionGenerators.toSatisfy.invalid();

                for (const { value, condition } of values) {
                    expect.basic(value).not.toSatisfy(condition);
                }
            });
        });
    });
});
