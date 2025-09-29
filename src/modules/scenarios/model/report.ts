import { TestingTreeSingleton, ConsoleReporter } from "@modules/reporting";

export function report() {
    const testingTree = TestingTreeSingleton.getInstance().tree;

    testingTree.calculateResults();

    const reporter = new ConsoleReporter();

    reporter.report();

    return testingTree.toObject();
}
