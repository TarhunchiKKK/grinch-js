import { DEFAULT_CONFIG_OPTIONS } from "../constants/default-config-options";
import { ConfigOptions } from "../types/config-options";

export function defineConfig(options: Partial<ConfigOptions>): ConfigOptions {
    return {
        ...DEFAULT_CONFIG_OPTIONS,
        ...options
    };
}
