import { expect, scenario } from "src";
import { NEW_NAME, OLD_NAME } from "./constants";
import { ChangeNameTest } from "./reusable-test";

const scenarioState = {
    name: OLD_NAME,
    age: 10
};

export const ReusableTestsScenario = scenario("Reusable tests", scenarioState, ({ test }) => {
    test.serial("Serial root group", ({ test }) => {
        test.sample("check name before changing", ({ state }) => {
            expect.string(state.name).toBe(OLD_NAME);
        });

        ChangeNameTest.use("should change state name", test);

        test.sample("check name after changing", ({ state }) => {
            expect.string(state.name).toBe(NEW_NAME);
        });
    });
});
