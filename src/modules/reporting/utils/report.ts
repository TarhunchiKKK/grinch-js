import { ConsoleReporter } from "../classes/console-reporter";
import { FileReporter } from "../classes/file-reporter";
import { Reporter } from "../types/reporter";

type ReportType = "file" | "console";

export async function report(type: ReportType = "console") {
    let reporter: Reporter;

    switch (type) {
        case "file":
            reporter = new FileReporter();
            break;
        case "console":
            reporter = new ConsoleReporter();
            break;
        default:
            reporter = new ConsoleReporter();
            break;
    }

    await reporter.report();
}
