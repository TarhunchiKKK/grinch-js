import {  ConsoleReporter } from "@modules/reporting";
import { TestingTreeSingleton } from "@modules/testing-tree";

export function report() {
    const testingTree = TestingTreeSingleton.getInstance().tree;

    testingTree.calculateResults();

    const reporter = new ConsoleReporter();

    reporter.report();

    return testingTree.toObject();
}
