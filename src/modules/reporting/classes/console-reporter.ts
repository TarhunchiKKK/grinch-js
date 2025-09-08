import { TestResult } from "@modules/tests";
import { TestNode } from "@modules/testing-tree";
import { Logger } from "@shared/lib";
import { BaseReporter } from "./base-reporter";

const tab = "  ";

export class ConsoleReporter extends BaseReporter {
    private currentDepth = 0;

    public report() {
        this.testingTree.calculateResults();

        for (const scenario of this.testingTree.children) {
            this.reportNode(scenario);
        }
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
            case TestResult.PARTIAL_SUCCEED:
                Logger.yellow(line);
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
            case TestResult.FORCIBLY_SUCCEED:
                Logger.green(line + " (aborted)");
                break;
            case TestResult.FAILED:
                Logger.red(line);
                break;
            case TestResult.FORCIBLY_FAILED:
                Logger.red(line + " (aborted)");
                break;
            case TestResult.ERROR_DURING_TEST:
                Logger.red(line + " (error)");
                break;
            case TestResult.FORCIBLY_SKIPED:
                Logger.blur(line + " (aborted)");
                break;
            case TestResult.NOT_RUNED:
                Logger.blur(line + " (not run)");
                break;
            default:
                throw new Error("Sample test cannot have such result");
        }
    }
}
