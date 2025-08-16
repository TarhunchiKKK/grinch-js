import { describe } from "./utils/describe";

const data = {
    name: "a",
    age: 2
};

describe("", data, ({ test }) => {
    test.parallel("", ({ test }) => {
        test.parallel("", ({ test }) => {
            test.sample("", async ({ state }) => {
                await Promise.resolve(state.age);
            });
        });
    });
});
