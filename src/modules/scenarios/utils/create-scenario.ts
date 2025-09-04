import { TestingTree } from "../../testing-tree";
import { AvailableTestStates, TestFactory } from "../../tests";
import { Scenario } from "../classes/scenario";
import { ScenarioCallback } from "../types/callbacks";

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
    const testingTree = new TestingTree();

    const scenario = new Scenario(title);

    const testFactory = new TestFactory(testingTree.add(scenario), state);

    callback({ test: testFactory });

    return scenario;
}
