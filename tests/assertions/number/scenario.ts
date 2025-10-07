import { expect, scenario } from "../../../src";
import { numberAssertionGenertors } from "./generators";

export const NumberAssertionScenario = scenario("NumberAssertion", null, ({ test }) => {
    test.parallel("assertions", ({ test }) => {
        test.serial("toBePositive()", ({ test }) => {
            test.case("valid", () => {
                const values = numberAssertionGenertors.toBePositive.valid();

                for (const value of values) {
                    expect.number(value).toBePositive();
                }
            });

            test.case("invalid", () => {
                const values = numberAssertionGenertors.toBePositive.invalid();

                for (const value of values) {
                    expect.number(value).not.toBePositive();
                }
            });
        });

        test.serial("toBeNegative()", ({ test }) => {
            test.case("valid", () => {
                const values = numberAssertionGenertors.toBeNegative.valid();

                for (const value of values) {
                    expect.number(value).toBeNegative();
                }
            });

            test.case("invalid", () => {
                const values = numberAssertionGenertors.toBeNegative.invalid();

                for (const value of values) {
                    expect.number(value).not.toBeNegative();
                }
            });
        });

        test.serial("toBeInteger()", ({ test }) => {
            test.case("valid", () => {
                const values = numberAssertionGenertors.toBeInteger.valid();

                for (const value of values) {
                    expect.number(value).toBeInteger();
                }
            });

            test.case("invalid", () => {
                const values = numberAssertionGenertors.toBeInteger.invalid();

                for (const value of values) {
                    expect.number(value).not.toBeInteger();
                }
            });
        });

        test.serial("toBeFloat()", ({ test }) => {
            test.case("valid", () => {
                const values = numberAssertionGenertors.toBeFloat.valid();

                for (const value of values) {
                    expect.number(value).toBeFloat();
                }
            });

            test.case("invalid", () => {
                const values = numberAssertionGenertors.toBeFloat.invalid();

                for (const value of values) {
                    expect.number(value).not.toBeFloat();
                }
            });
        });

        test.serial("toBeNaN()", ({ test }) => {
            test.case("valid", () => {
                const values = numberAssertionGenertors.toBeNaN.valid();

                for (const value of values) {
                    expect.number(value).toBeNaN();
                }
            });

            test.case("invalid", () => {
                const values = numberAssertionGenertors.toBeNaN.invalid();

                for (const value of values) {
                    expect.number(value).not.toBeNaN();
                }
            });
        });

        test.serial("toBeLessThan()", ({ test }) => {
            test.case("valid", () => {
                const values = numberAssertionGenertors.toBeLessThan.valid();

                for (const value of values) {
                    expect.number(value.value).toBeLessThan(value.argument);
                }
            });

            test.case("invalid", () => {
                const values = numberAssertionGenertors.toBeLessThan.invalid();

                for (const value of values) {
                    expect.number(value.value).not.toBeLessThan(value.argument);
                }
            });
        });

        test.serial("toBeLessThanOrEquals()", ({ test }) => {
            test.case("valid", () => {
                const values = numberAssertionGenertors.toBeLessThanOrEquals.valid();

                for (const value of values) {
                    expect.number(value.value).toBeLessThanOrEquals(value.argument);
                }
            });

            test.case("invalid", () => {
                const values = numberAssertionGenertors.toBeLessThanOrEquals.invalid();

                for (const value of values) {
                    expect.number(value.value).not.toBeLessThanOrEquals(value.argument);
                }
            });
        });

        test.serial("toBeGraterThan()", ({ test }) => {
            test.case("valid", () => {
                const values = numberAssertionGenertors.toBeGraterThan.valid();

                for (const value of values) {
                    expect.number(value.value).toBeGraterThan(value.argument);
                }
            });

            test.case("invalid", () => {
                const values = numberAssertionGenertors.toBeGraterThan.invalid();

                for (const value of values) {
                    expect.number(value.value).not.toBeGraterThan(value.argument);
                }
            });
        });

        test.serial("toBeGraterThanOrEquals()", ({ test }) => {
            test.case("valid", () => {
                const values = numberAssertionGenertors.toBeGraterThanOrEquals.valid();

                for (const value of values) {
                    expect.number(value.value).toBeGraterThanOrEquals(value.argument);
                }
            });

            test.case("invalid", () => {
                const values = numberAssertionGenertors.toBeGraterThanOrEquals.invalid();

                for (const value of values) {
                    expect.number(value.value).not.toBeGraterThanOrEquals(value.argument);
                }
            });
        });

        test.serial("toHaveValueBetween()", ({ test }) => {
            test.case("valid", () => {
                const values = numberAssertionGenertors.toHaveValueBetween.valid();

                for (const { value, start, end } of values) {
                    expect.number(value).toHaveValueBetween(start, end);
                }
            });

            test.case("invalid", () => {
                const values = numberAssertionGenertors.toHaveValueBetween.invalid();

                for (const { value, start, end } of values) {
                    expect.number(value).not.toHaveValueBetween(start, end);
                }
            });
        });
    });
});
