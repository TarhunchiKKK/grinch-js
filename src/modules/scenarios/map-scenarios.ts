import { ConsoleReporter, TestingTreeSingleton } from "@modules/reporting";
import { Scenario } from "./scenario";

function getCommandName() {
    const commandName = process.argv[2];

    if (!commandName) {
        throw new Error("Command name not provided");
    }

    return commandName;
}

function getScenarios(map: Record<string, Scenario[]>, commandName: string) {
    const scenarios = map[commandName];

    if (!scenarios) {
        throw new Error(`Command with name ${commandName} not found.`);
    }

    return scenarios;
}

async function runScenarios(scenarios: Scenario[]) {
    const testingTree = TestingTreeSingleton.getInstance().tree;

    for (const scenario of scenarios) {
        testingTree.add(scenario);
    }

    await testingTree.run();
}

function report() {
    const testingTree = TestingTreeSingleton.getInstance().tree;

    testingTree.calculateResults();

    const reporter = new ConsoleReporter();

    reporter.report();

    return testingTree.toObject();
}

/**
 * Registers a map of command names to their corresponding scenarios.
 * This function is intended to be called from the user's entry file.
 * @param map A record where keys are command names and values are arrays of Scenarios.
 */
export async function mapScenarios(map: Record<string, Scenario[]>) {
    const commandName = getCommandName();

    const scenarios = getScenarios(map, commandName);

    await runScenarios(scenarios);

    return report();
}
