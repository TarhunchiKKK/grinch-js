import { Scenario } from "@modules/scenarios";
import { ScenariosRunner } from "./runners/scenarios-runner";

/**
 * Registers a map of command names to their corresponding scenarios.
 * This function is intended to be called from the user's entry file.
 * @param map A record where keys are command names and values are arrays of Scenarios.
 */
export async function mapScenarios(map: Record<string, Scenario[]>) {
    const runner = new ScenariosRunner(map);

    await runner.run();

    return runner.report();
}
