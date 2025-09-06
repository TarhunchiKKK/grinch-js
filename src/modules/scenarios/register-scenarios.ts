import { Scenario } from "./scenario";
import { TestingResults } from "../reporting";

/**
 * Registers a map of command names to their corresponding scenarios.
 * This function is intended to be called from the user's entry file.
 * @param map A record where keys are command names and values are arrays of Scenarios.
 */
export async function registerScenarios(map: Record<string, Scenario[]>) {
    const commandName = process.argv[2];

    if (!commandName) {
        throw new Error("Command name not provided");
    }

    const testingTree = TestingResults.getInstance().tree;

    const scenarios = map[commandName];

    if (!scenarios) {
        throw new Error(`Command with name ${commandName} not found.`);
    }

    for (const scenario of scenarios) {
        testingTree.add(scenario);
    }

    await testingTree.run();
}
