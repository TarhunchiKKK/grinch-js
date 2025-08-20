import { Scenario } from "../classes/scenario";
import { ScenarioTestFactory } from "../factories/scenario-test-factory";
import { AvailableScenarioStates } from "../types/state";

type ScenarioCallbackArgument<State> = {
    test: ScenarioTestFactory<State>;
};

/**
 * Creates a new scenario and its associated test factory, then executes a callback function
 * with the test factory to define the tests within the scenario.
 *
 * @param title The title of the scenario.
 * @param state The initial state of the scenario.
 * @param callback A function that receives the test factory and defines the scenario's tests.
 */
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
