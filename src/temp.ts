import { grinch } from ".";
import { reuseTest } from "./modules/reusable-tests/utils/reuse-test";

const data = {
    name: "Alice",
    age: 2
};

const valid = grinch.reusable<{ age: number }>(({ test }) => {
    test.serial("", ({ test }) => {
        test.sample("", ({ state }) => {
            const a = state.age;
            console.log(a);
        });
    });
});

const invalid = grinch.reusable<{ age: number; gender: string }>(({ test }) => {
    test.serial("", ({ test }) => {
        test.sample("", ({ state }) => {
            const a = state.age;
            console.log(a);
        });
    });
});

grinch.scenario("", data, ({ test }) => {
    test.sample("", ({ state }) => {
        console.log(state);
    });

    test.serial("", ({ test }) => {
        reuseTest("", test, valid);

        reuseTest("", test, invalid);
    });
});
