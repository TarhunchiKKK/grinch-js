import { scenario } from "../../../src";
import { asyncTask } from "./lib";

export const TestsGroupingScenario = scenario("Tests grouping", null, ({ test }) => {
    test.serial("Serial root group", ({ test }) => {
        test.parallel("Parallel group", ({ test }) => {
            test.beforeEach(() => {
                console.log("Parallel group before each");
            });

            test.sample("Parallel test 1", async () => {
                console.log("Parallel test 1 starts");

                await asyncTask();

                console.log("Parallel test 1 ends");
            });

            test.sample("Parallel test 2", async () => {
                console.log("Parallel test 2 starts");

                await asyncTask();

                console.log("Parallel test 2 ends");
            });

            test.sample("Parallel test 3", async () => {
                console.log("Parallel test 3 starts");

                await asyncTask();

                console.log("Parallel test 3 ends");
            });
        });

        test.serial("Serial group", ({ test }) => {
            test.afterEach(() => {
                console.log("Serial group after each");
            });

            test.sample("Serial test 1", async () => {
                console.log("Serial test 1 starts");

                await asyncTask();

                console.log("Serial test 1 ends");
            });

            test.sample("Serial test 1", async () => {
                console.log("Serial test 2 starts");

                await asyncTask();

                console.log("Serial test 2 ends");
            });

            test.sample("Serial test 1", async () => {
                console.log("Serial test 3 starts");

                await asyncTask();

                console.log("Serial test 3 ends");
            });
        });
    });
});
