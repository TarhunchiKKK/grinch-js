import { ConsoleReporter } from "@modules/reporting";
import {  TestingTree } from "@modules/testing-tree";

export function report() {
    TestingTree.calculateResults();

    const reporter = new ConsoleReporter();

    reporter.report();

    return TestingTree.toObject();
}
