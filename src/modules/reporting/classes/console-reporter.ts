/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TESTING_RESULTS } from "..";
import { Logger } from "../../../shared";
import { Reporter } from "../types/reporter";

export class ConsoleReporter implements Reporter {
    public report(obj: any = TESTING_RESULTS.results, path: string[] = []): void {
        for (const key in obj) {
            const currentPath = [...path, key];
            const value = obj[key];

            if (typeof value === "boolean") {
                const indent = "  ".repeat(currentPath.length - 1);

                const messageToLog = `${indent}${key} ${value.toString()}`;

                if (value) {
                    Logger.success(messageToLog);
                } else {
                    Logger.failure(messageToLog);
                }
            } else if (typeof value === "object") {
                console.log(`${" ".repeat(currentPath.length - 1)}${key}`);
                this.report(value, currentPath);
            }
        }
    }
}

const reporter = new ConsoleReporter();
reporter.report();
