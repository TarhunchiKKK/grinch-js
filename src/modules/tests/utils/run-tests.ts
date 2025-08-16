import { TestRunner } from "./test-runner";

export async function runTests(runners: TestRunner<unknown>[]) {
    await Promise.all(runners.map(runner => runner.run()));
}
