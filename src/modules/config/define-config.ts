import { ReporterTypes } from "../reporting";

export type ConfigOptions = {
    entryFile: string;

    reporter: ReporterTypes;

    resultsDirectory?: string;
};

const DEFAULT_CONFIG_OPTIONS: ConfigOptions = {
    entryFile: "./tests/main.ts",
    reporter: "console",
    resultsDirectory: "test-results"
};

export function defineConfig(options: Partial<ConfigOptions>): ConfigOptions {
    return {
        ...DEFAULT_CONFIG_OPTIONS,
        ...options
    };
}
