import { TestResult } from "@modules/tests";
import { TestNode } from "@modules/testing-tree";
import { Logger } from "@shared/lib";
import { TestingTreeSingleton } from "./testing-tree-singleton";

const tab = "  ";

export class ConsoleReporter {
    private testingTree = TestingTreeSingleton.getInstance().tree;

    private summary = {
        [TestResult.SUCCEED]: 0,
        [TestResult.SKIPED]: 0,
        [TestResult.FAILED]: 0,
        [TestResult.ERROR]: 0,
        [TestResult.NOT_RUNED]: 0
    };

    private currentDepth = 0;

    public report() {
        for (const scenario of this.testingTree.children) {
            this.reportNode(scenario);
        }

        this.reportSummary();
    }

    private reportNode(node: TestNode) {
        if (node.hasChildren()) {
            for (const child of node.children) {
                this.printGroupNode(child);

                this.currentDepth++;
                this.reportNode(child);
                this.currentDepth--;
            }
        } else {
            this.printLeafNode(node);
        }
    }

    private printGroupNode(node: TestNode) {
        const line = tab.repeat(this.currentDepth) + node.test.title;

        switch (node.test.result) {
            case TestResult.SUCCEED:
                Logger.green(line);
                break;
            case TestResult.FAILED:
                Logger.red(line);
                break;
            default:
                throw new Error("Group test cannot have such result");
        }
    }

    private printLeafNode(node: TestNode) {
        const line = tab.repeat(this.currentDepth) + node.test.title;

        switch (node.test.result) {
            case TestResult.SUCCEED:
                Logger.green(line);
                break;
            case TestResult.SKIPED:
                Logger.green(line + " (skiped)");
                break;
            case TestResult.FAILED:
                Logger.red(line);
                break;
            case TestResult.ERROR:
                Logger.red(line + " (error)");
                break;
            case TestResult.NOT_RUNED:
                Logger.yellow(line + " (not run)");
                break;
            default:
                throw new Error("Sample test cannot have such result");
        }

        this.summary[node.test.result]++;
    }

    private reportSummary() {
        Logger.info("\n\n\nSummary:");
        Logger.green(`Succeed: ${this.summary[TestResult.SUCCEED]}`);
        Logger.green(`Skiped: ${this.summary[TestResult.SKIPED]}`);
        Logger.red(`Failed: ${this.summary[TestResult.FAILED]}`);
        Logger.red(`Error occured: ${this.summary[TestResult.ERROR]}`);
        Logger.yellow(`Not runed: ${this.summary[TestResult.NOT_RUNED]}`);

        const total = Object.values(this.summary).reduce((acc, item) => acc + item, 0);
        Logger.info(`Total: ${total}`);
    }
}
