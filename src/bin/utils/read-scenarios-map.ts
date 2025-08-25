import { Scenario } from "../../modules/scenarios";
import { Logger } from "../../shared";

export async function readScenariosMap(entryFile: string) {
    const scenariosMap = (await import(entryFile)) as { default: Record<string, Scenario<unknown>[]> };

    if (!scenariosMap.default) {
        Logger.failure(`Error: Entry file "${entryFile}" does not have a default export.`);
        process.exit(1);
    }

    return scenariosMap.default;
}
