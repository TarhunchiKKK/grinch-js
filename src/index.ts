import { AssertionFactory } from "./modules/assertions";
import { report } from "./modules/reporting";
import { describe, runTests } from "./modules/tests";

export const assert = new AssertionFactory();

export const grinch = {
    describe,
    report,
    run: runTests
};

const data = {
    name: "a",
    age: 2
};

grinch.describe("", data, ({ test }) => {
    test.parallel("", ({ test }) => {
        test.parallel("", ({ test }) => {
            test.sample("", async ({ state }) => {
                await Promise.resolve(state.age);
            });
        });
    });
});
