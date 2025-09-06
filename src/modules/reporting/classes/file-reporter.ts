import { existsSync, mkdirSync, writeFile } from "fs";
import { Logger } from "../../../shared";
import { join } from "path";
import { BaseReporter } from "./base-reporter";

export class FileReporter extends BaseReporter {
    public report() {
        const pathToDir = this.createDirectoryIfNotExists();

        const filename = this.generateFilename();

        const pathToFile = join(pathToDir, filename);

        this.writeTestingResults(pathToFile);
    }

    private createDirectoryIfNotExists() {
        const pathToDir = join(__dirname, "test-results");

        if (!existsSync(pathToDir)) {
            mkdirSync(pathToDir, { recursive: true });
        }

        return pathToDir;
    }

    private generateFilename() {
        const currentDate = new Date();

        const date = currentDate.toISOString();
        const time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

        return `${date}.${time}.json`;
    }

    // ! Need Fix
    private writeTestingResults(pathToFile: string) {
        const data = JSON.stringify({}, null, 4);

        writeFile(pathToFile, data, err => {
            if (err) {
                Logger.red("Error during writing report to file.");
                Logger.red(err);
            } else {
                Logger.green("Report successfully written to file.");
            }
        });
    }
}
