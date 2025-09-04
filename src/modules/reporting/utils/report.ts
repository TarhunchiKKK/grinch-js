import { BaseReporter } from "../classes/base-reporter";
import { ConsoleReporter } from "../classes/console-reporter";
import { FileReporter } from "../classes/file-reporter";
import { ReporterTypes } from "../types/reporter-types";

export async function report(type: ReporterTypes) {
    let reporter: BaseReporter;

    switch (type) {
        case "file":
            reporter = new FileReporter();
            break;
        case "console":
            reporter = new ConsoleReporter();
            break;
        default:
            throw new Error("Reporter not selected");
    }

    await reporter.report();
}
