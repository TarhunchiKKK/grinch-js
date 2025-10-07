import { TestingTree } from "@modules/testing-tree";
import { Scenario } from "@modules/scenarios";
import { ScenariosReporter } from "../reporters/scenarios-reporter";
import { TreeToObjectMapper } from "@compose/utils/tree-to-object-mapper";

export class ScenariosRunner {
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
    }

    public report() {
        TestingTree.calculateResults();

        const reporter = new ScenariosReporter();

        reporter.report();

        return new TreeToObjectMapper().map();
    }
}
