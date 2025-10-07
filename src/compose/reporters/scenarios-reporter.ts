import { TestNode, TestingTree } from "@modules/testing-tree";
import { Logger } from "@shared/lib";
import { TestStatus } from "@shared/types";

const tab = "  ";

export class ScenariosReporter {
    private summary = {
        [TestStatus.SUCCEED]: 0,
        [TestStatus.FAILED]: 0,
        [TestStatus.ERROR]: 0,
        [TestStatus.NOT_RUNED]: 0
    };

    private currentDepth = 0;

    public report() {
        for (const scenario of TestingTree.children) {
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

        switch (node.test.status) {
            case TestStatus.SUCCEED:
                Logger.green(line);
                break;
            case TestStatus.FAILED:
                Logger.red(line);
                break;
            default:
                throw new Error("Group test cannot have such result");
        }
    }

    private printLeafNode(node: TestNode) {
        const line = tab.repeat(this.currentDepth) + node.test.title;

        switch (node.test.status) {
            case TestStatus.SUCCEED:
                Logger.green(line);
                break;
            case TestStatus.FAILED:
                Logger.red(line);
                break;
            case TestStatus.ERROR:
                Logger.red(line + " (error)");
                break;
            case TestStatus.NOT_RUNED:
                Logger.yellow(line + " (not run)");
                break;
            default:
                throw new Error("Case test cannot have such result");
        }

        this.summary[node.test.status]++;
    }

    private reportSummary() {
        Logger.info("\n\n\nSummary:");
        Logger.green(`Succeed: ${this.summary[TestStatus.SUCCEED]}`);
        Logger.red(`Failed: ${this.summary[TestStatus.FAILED]}`);
        Logger.red(`Error occured: ${this.summary[TestStatus.ERROR]}`);
        Logger.yellow(`Not runed: ${this.summary[TestStatus.NOT_RUNED]}`);

        const total = Object.values(this.summary).reduce((acc, item) => acc + item, 0);
        Logger.info(`Total: ${total}`);
    }
}
