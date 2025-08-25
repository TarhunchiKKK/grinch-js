#!/usr/bin/env node

import { Command } from "commander";
import { readConfig } from "./utils/read-config";
import { readScenariosMap } from "./utils/read-scenarios-map";
import { runScenarios } from "./utils/run-scenarios";
import { report } from "../modules/reporting";
import { createConfigFile } from "./utils/create-config-file";
import { createEntryFile } from "./utils/create-entry-file";
import { Logger } from "../shared";

const program = new Command();

program
    .command("init")
    .description("Initialize Grinch project")
    .action(() => {
        try {
            createConfigFile();

            createEntryFile();
        } catch (error) {
            Logger.failure("Error initializing Grinch project:");
            console.error(error);
            process.exit(1);
        }
    });

program
    .command("run <command_name>")
    .description("Run e2e tests")
    .action(async (command_name: string) => {
        try {
            const { config, entryFile } = await readConfig();

            const scenariosMap = await readScenariosMap(entryFile);

            await runScenarios(scenariosMap, command_name);

            await report(config.reporter);
        } catch (error) {
            Logger.failure("Error running tests:");
            console.error(error);
            process.exit(1);
        }
    });

program.parse(process.argv);
