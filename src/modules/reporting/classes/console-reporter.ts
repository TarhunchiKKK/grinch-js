/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { DynamicObjectData, Logger } from "../../../shared";
import { BaseReporter } from "./base-reporter";

export class ConsoleReporter extends BaseReporter {
    public report(obj: DynamicObjectData<boolean> = this.testingResults, path: string[] = []): void {
        for (const key in obj) {
            const currentPath = [...path, key];
            const value = obj[key];

            if (typeof value === "object") {
                console.log(`${" ".repeat(currentPath.length - 1)}${key}`);
                this.report(value, currentPath);
            } else {
                this.processValue(value, key, currentPath.length - 1);
            }
        }
    }

    private processValue(value: boolean, key: string, indentSize: number) {
        const indent = "  ".repeat(indentSize);

        const messageToLog = `${indent}${key} ${value.toString()}`;

        if (value) {
            Logger.success(messageToLog);
        } else {
            Logger.failure(messageToLog);
        }
    }
}
