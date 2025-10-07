import { faker } from "@faker-js/faker/.";
import { scenario, expect } from "src";

const scenarioState = {
    value: 0
};

const values = Array.from({ length: 20 }).map(() => faker.number.int({ min: 0, max: 1_000 }));

export const StateManagementScenario = scenario("State management", scenarioState, ({ test }) => {
    test.serial("Serial root group", ({ test }) => {
        for (let i = 0; i < values.length; i++) {
            test.case(`Set value to ${values[i]}`, ({ state }) => {
                if (i !== 0) {
                    expect.number(state.value).toBe(values[i - 1]);
                }

                state.value = values[i];
            });
        }
    });
});
