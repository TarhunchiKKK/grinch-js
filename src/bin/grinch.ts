#!/usr/bin/env node

import { Command } from "commander";
import { readConfig } from "../modules/config";

const program = new Command();

program
    .command("run")
    .description("Run e2e tests")
    .action(async () => {
        const { config, entryFile } = await readConfig();

        console.log(config, entryFile);
    });

program.parse(process.argv);
