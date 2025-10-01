import { TestingTree } from "@modules/testing-tree";
import { Scenario } from "../scenario";
import { report } from "@modules/reporting";

class ScenarioMapper {
    public constructor(private readonly map: Record<string, Scenario[]>) {}

    private getCommandName() {
        const commandName = process.argv[2];

        if (!commandName) {
            throw new Error("Command name not provided");
        }

        return commandName;
    }

    private getScenarios(commandName: string) {
        const scenarios = this.map[commandName];

        if (!scenarios) {
            throw new Error(`Command with name ${commandName} not found.`);
        }

        return scenarios;
    }

    private async runScenarios(scenarios: Scenario[]) {
        for (const scenario of scenarios) {
            TestingTree.add(scenario);
        }

        await TestingTree.run();
    }

    public async run() {
        const commandName = this.getCommandName();

        const scenarios = this.getScenarios(commandName);

        await this.runScenarios(scenarios);

        return report();
    }
}

/**
 * Registers a map of command names to their corresponding scenarios.
 * This function is intended to be called from the user's entry file.
 * @param map A record where keys are command names and values are arrays of Scenarios.
 */
export async function mapScenarios(map: Record<string, Scenario[]>) {
    const mapper = new ScenarioMapper(map);

    return await mapper.run();
}
