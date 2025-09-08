import { AvailableTestStates, TestFactory } from "@modules/tests";
import { TestingResults } from "@modules/reporting";
import { Scenario } from "./scenario";
import { ScenarioCallback } from "./types";

/**
 * Creates a new scenario and its associated test factory, then executes a callback function
 * with the test factory to define the tests within the scenario.
 *
 * @param title The title of the scenario.
 * @param state The initial state of the scenario.
 * @param callback A function that receives the test factory and defines the scenario's tests.
 */
export function createScenario<State extends AvailableTestStates>(
    title: string,
    state: State,
    callback: ScenarioCallback<State>
) {
    const scenario = new Scenario(title);

    const testingTree = TestingResults.getInstance().tree;

    const testFactory = new TestFactory(testingTree.add(scenario), state);

    callback({ test: testFactory });

    return scenario;
}
