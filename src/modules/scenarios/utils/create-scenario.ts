import { Scenario } from "../classes/scenario";
import { ScenarioTestFactory } from "../factories/scenario-test-factory";
import { AvailableScenarioStates } from "../types/state";

type ScenarioCallbackArgument<State> = {
    test: ScenarioTestFactory<State>;
};

export function createScenario<State extends AvailableScenarioStates>(
    title: string,
    state: State,
    callback: (arg: ScenarioCallbackArgument<State>) => void
) {
    const scenario = new Scenario(title, state);

    const testFactory = scenario.createTestFactory();

    callback({ test: testFactory });

    return scenario;
}
