import { Scenario } from "../../modules/scenarios";
import { Logger } from "../../shared";

export async function runScenarios(scenariosMap: Record<string, Scenario<unknown>[]>, commandName: string) {
    if (!scenariosMap[commandName]) {
        Logger.failure(`Scenarios group "${commandName}" not found in entry file`);
        process.exit(1);
    }

    const scenarios = scenariosMap[commandName];

    await Promise.all(scenarios.map(scenario => scenario.run()));
}
