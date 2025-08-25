import * as path from "path";
import * as fs from "fs";
import { Logger } from "../../shared";

export function createConfigFile() {
    const cwd = process.cwd();

    // 1. Создание grinch.config.ts
    const configFileName = "grinch.config.ts";
    const configFilePath = path.resolve(cwd, configFileName);

    if (fs.existsSync(configFilePath)) {
        Logger.success(`${configFileName} already exists. Skipping creation`);
        return;
    }

    const configContent = `import { defineConfig } from "grinch";
  
  export default defineConfig({
    entryFile: "./tests/main.grinch.ts" // Путь по умолчанию к файлу входа
    reporter: "console",
    resultsDirectory: "test-results
  });
  `;
    fs.writeFileSync(configFilePath, configContent);
    Logger.success(`Created ${configFileName}`);
}
