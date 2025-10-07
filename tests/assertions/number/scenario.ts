import { expect, scenario } from "../../../src";
import { numberExpectationGenertors } from "./generators";

export const NumberExpectationScenario = scenario("NumberExpectation", null, ({ test }) => {
    test.parallel("assertions", ({ test }) => {
        test.serial("toBePositive()", ({ test }) => {
            test.case("valid", () => {
                const values = numberExpectationGenertors.toBePositive.valid();

                for (const value of values) {
                    expect.number(value).toBePositive();
                }
            });

            test.case("invalid", () => {
                const values = numberExpectationGenertors.toBePositive.invalid();

                for (const value of values) {
                    expect.number(value).not.toBePositive();
                }
            });
        });

        test.serial("toBeNegative()", ({ test }) => {
            test.case("valid", () => {
                const values = numberExpectationGenertors.toBeNegative.valid();

                for (const value of values) {
                    expect.number(value).toBeNegative();
                }
            });

            test.case("invalid", () => {
                const values = numberExpectationGenertors.toBeNegative.invalid();

                for (const value of values) {
                    expect.number(value).not.toBeNegative();
                }
            });
        });

        test.serial("toBeInteger()", ({ test }) => {
            test.case("valid", () => {
                const values = numberExpectationGenertors.toBeInteger.valid();

                for (const value of values) {
                    expect.number(value).toBeInteger();
                }
            });

            test.case("invalid", () => {
                const values = numberExpectationGenertors.toBeInteger.invalid();

                for (const value of values) {
                    expect.number(value).not.toBeInteger();
                }
            });
        });

        test.serial("toBeFloat()", ({ test }) => {
            test.case("valid", () => {
                const values = numberExpectationGenertors.toBeFloat.valid();

                for (const value of values) {
                    expect.number(value).toBeFloat();
                }
            });

            test.case("invalid", () => {
                const values = numberExpectationGenertors.toBeFloat.invalid();

                for (const value of values) {
                    expect.number(value).not.toBeFloat();
                }
            });
        });

        test.serial("toBeNaN()", ({ test }) => {
            test.case("valid", () => {
                const values = numberExpectationGenertors.toBeNaN.valid();

                for (const value of values) {
                    expect.number(value).toBeNaN();
                }
            });

            test.case("invalid", () => {
                const values = numberExpectationGenertors.toBeNaN.invalid();

                for (const value of values) {
                    expect.number(value).not.toBeNaN();
                }
            });
        });

        test.serial("toBeLessThan()", ({ test }) => {
            test.case("valid", () => {
                const values = numberExpectationGenertors.toBeLessThan.valid();

                for (const value of values) {
                    expect.number(value.value).toBeLessThan(value.argument);
                }
            });

            test.case("invalid", () => {
                const values = numberExpectationGenertors.toBeLessThan.invalid();

                for (const value of values) {
                    expect.number(value.value).not.toBeLessThan(value.argument);
                }
            });
        });

        test.serial("toBeLessThanOrEquals()", ({ test }) => {
            test.case("valid", () => {
                const values = numberExpectationGenertors.toBeLessThanOrEquals.valid();

                for (const value of values) {
                    expect.number(value.value).toBeLessThanOrEquals(value.argument);
                }
            });

            test.case("invalid", () => {
                const values = numberExpectationGenertors.toBeLessThanOrEquals.invalid();

                for (const value of values) {
                    expect.number(value.value).not.toBeLessThanOrEquals(value.argument);
                }
            });
        });

        test.serial("toBeGraterThan()", ({ test }) => {
            test.case("valid", () => {
                const values = numberExpectationGenertors.toBeGraterThan.valid();

                for (const value of values) {
                    expect.number(value.value).toBeGraterThan(value.argument);
                }
            });

            test.case("invalid", () => {
                const values = numberExpectationGenertors.toBeGraterThan.invalid();

                for (const value of values) {
                    expect.number(value.value).not.toBeGraterThan(value.argument);
                }
            });
        });

        test.serial("toBeGraterThanOrEquals()", ({ test }) => {
            test.case("valid", () => {
                const values = numberExpectationGenertors.toBeGraterThanOrEquals.valid();

                for (const value of values) {
                    expect.number(value.value).toBeGraterThanOrEquals(value.argument);
                }
            });

            test.case("invalid", () => {
                const values = numberExpectationGenertors.toBeGraterThanOrEquals.invalid();

                for (const value of values) {
                    expect.number(value.value).not.toBeGraterThanOrEquals(value.argument);
                }
            });
        });

        test.serial("toHaveValueBetween()", ({ test }) => {
            test.case("valid", () => {
                const values = numberExpectationGenertors.toHaveValueBetween.valid();

                for (const { value, start, end } of values) {
                    expect.number(value).toHaveValueBetween(start, end);
                }
            });

            test.case("invalid", () => {
                const values = numberExpectationGenertors.toHaveValueBetween.invalid();

                for (const { value, start, end } of values) {
                    expect.number(value).not.toHaveValueBetween(start, end);
                }
            });
        });
    });
});
