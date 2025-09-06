import * as path from "path";
import * as fs from "fs";
import { ConfigOptions } from "../../modules/config";
import { Logger } from "../../shared";

export async function readConfig() {
    try {
        const configPath = path.resolve(process.cwd(), "grinch.config.ts");
        if (!fs.existsSync(configPath)) {
            Logger.red(`Configuration file not found at ${configPath}`);
            process.exit(1);
        }

        const config = (await import(configPath)) as { default: ConfigOptions };
        if (!config.default) {
            Logger.red("Invalid configuration file. Provided file has no default exported member");
            process.exit(1);
        }

        const entryFile = path.resolve(process.cwd(), config.default.entryFile);
        if (!fs.existsSync(entryFile)) {
            Logger.red(`Entry file not found at ${entryFile}`);
            process.exit(1);
        }

        return { config: config.default, entryFile };
    } catch (error) {
        Logger.red("Error occured during reading configuration");
        Logger.red(error);

        process.exit(1);
    }
}
