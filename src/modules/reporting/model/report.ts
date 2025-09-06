import { BaseReporter } from "../classes/base-reporter";
import { ConsoleReporter } from "../classes/console-reporter";
import { TestingResults } from "./testing-results";

// export type ReporterTypes = "file" | "console";

export async function report() {
    const reporter: BaseReporter = new ConsoleReporter();

    await reporter.report();

    return TestingResults.getInstance().tree.toObject();
}
