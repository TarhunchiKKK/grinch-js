import { expect, scenario } from "src";

export const ReportingScenario = scenario("Reporting scenario", null, ({ test }) => {
    test.parallel("Parallel root group", ({ test }) => {
        test.serial("Serial group (should succeed)", ({ test }) => {
            test.sample("should succeed", () => {
                expect.number(1).toBe(1);
            });
        });

        test.serial("Serial group (should fail)", ({ test }) => {
            test.sample("should succeed", () => {
                expect.number(1).toBe(1);
            });

            test.sample("should fail", () => {
                expect.number(1).toBe(2);
            });

            test.sample("should not run", () => {
                expect.number(1).toBe(1);
            });
        });

        test.serial("Serial group (should fail with error)", ({ test }) => {
            test.sample("should succeed", () => {
                expect.number(1).toBe(1);
            });

            test.sample("should throw error", () => {
                throw new Error("Unexpected error");
            });

            test.sample("should not run", () => {
                expect.number(1).toBe(1);
            });
        });

        test.parallel("Parallel group (should succeed)", ({ test }) => {
            test.sample("should succeed", () => {
                expect.number(1).toBe(1);
            });
        });

        test.parallel("Parallel group (one child should fail)", ({ test }) => {
            test.sample("should succeed", () => {
                expect.number(1).toBe(1);
            });

            test.sample("should fail", () => {
                expect.number(1).toBe(2);
            });

            test.sample("should not run", () => {
                expect.number(1).toBe(1);
            });

            test.serial("Serial group (should not run)", ({ test }) => {
                test.sample("should not run", () => {
                    expect.number(1).toBe(1);
                });
            });
        });

        test.parallel("Parallel group (one child should fail with error)", ({ test }) => {
            test.sample("should succeed", () => {
                expect.number(1).toBe(1);
            });

            test.sample("should fail", () => {
                throw new Error("Unexpected error");
            });

            test.sample("should not run", () => {
                expect.number(1).toBe(1);
            });

            test.serial("Serial group (should not run)", ({ test }) => {
                test.sample("should not run", () => {
                    expect.number(1).toBe(1);
                });
            });
        });
    });
});
