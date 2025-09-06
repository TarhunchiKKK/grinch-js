export type ConfigOptions = {
    entryFile: string;
};

export function defineConfig(options: ConfigOptions): ConfigOptions {
    return {
        ...options
    };
}
