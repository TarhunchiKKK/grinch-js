import { describe } from "./modules/tests";

export function grinch() {
    console.log("grinch");
}

const data = {
    name: "a",
    age: 2
};

describe("title", data, ({ test }) => {
    test.parallel("test", ({ test }) => {
        test.serial("test", ({ test }) => {
            test.sample("title", async ({ state }) => {
                await Promise.resolve(state.);
            });
        });
    });
});
