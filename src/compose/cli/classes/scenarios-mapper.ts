import { Scenario } from "../../scenarios";

export type ScenariosMapperArgument = Record<string, Scenario<unknown>[]>;

export class ScenariosMapper {
    public constructor(private map: ScenariosMapperArgument) {
        const command = this.getCommand();

        this.checkIfCommandExists(command);

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.runCommand(command);
    }

    private getCommand() {
        const cliArguments = process.argv;

        const commandIndex = cliArguments.findIndex(arg => arg === "--command");

        if (commandIndex === -1) {
            throw new Error("No command provided");
        }

        return cliArguments[commandIndex + 1];
    }

    private checkIfCommandExists(command: string) {
        if (!this.map[command]) {
            throw new Error(`Command "${command}" not found`);
        }
    }

    private async runCommand(command: string) {
        const scenarios = this.map[command];

        await Promise.all(scenarios.map(scenario => scenario.run()));
    }
}
