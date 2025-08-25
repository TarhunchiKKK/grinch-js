import * as path from "path";
import * as fs from "fs";
import { Logger } from "../../shared";

export function createEntryFile() {
    const cwd = process.cwd();

    const testsDir = path.resolve(cwd, "tests");
    const entryFileName = "main.grinch.ts";
    const entryFilePath = path.resolve(testsDir, entryFileName);

    if (!fs.existsSync(testsDir)) {
        fs.mkdirSync(testsDir);
        console.log(`Created directory: ${testsDir}`);
    }

    if (fs.existsSync(entryFilePath)) {
        Logger.success(`${entryFileName} already exists in ${testsDir}. Skipping creation.`);
        return;
    }

    const entryFileContent = `import { mapScenarios } from "grinch";

export default mapScenarios({

});
`;
    fs.writeFileSync(entryFilePath, entryFileContent);
    Logger.success(`Created ${entryFileName} in ${testsDir}`);
}
