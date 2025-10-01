import { Scenario } from "../scenario";
import { getCommandName, getScenarios, runScenarios } from "./helpers";
import { report } from "@modules/reporting";

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
