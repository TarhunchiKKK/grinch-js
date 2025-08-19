import { Scenario } from "../classes/scenario";
import { ScenarioTestFactory } from "../factories/scenario-test-factory";

type AvailableStates = Record<string, unknown> | null;

type ScenarioCallbackArgument<State> = {
    test: ScenarioTestFactory<State>;
};

export function createScenario<State extends AvailableStates>(
    title: string,
    state: State,
    callback: (arg: ScenarioCallbackArgument<State>) => void
) {
    const scenarioInstance = new Scenario(title, state);
    const testFactory = scenarioInstance.createTestFactory();
    callback({ test: testFactory });
}
