import { describe } from "./modules/tests";

export const grinch = {
    describe
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
