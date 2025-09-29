import { TestingTreeSingleton } from "@modules/reporting";
import { Scenario } from "../scenario";

export function getCommandName() {
    const commandName = process.argv[2];

    if (!commandName) {
        throw new Error("Command name not provided");
    }

    return commandName;
}

export function getScenarios(map: Record<string, Scenario[]>, commandName: string) {
    const scenarios = map[commandName];

    if (!scenarios) {
        throw new Error(`Command with name ${commandName} not found.`);
    }

    return scenarios;
}

export async function runScenarios(scenarios: Scenario[]) {
    const testingTree = TestingTreeSingleton.getInstance().tree;

    for (const scenario of scenarios) {
        testingTree.add(scenario);
    }

    await testingTree.run();
}
