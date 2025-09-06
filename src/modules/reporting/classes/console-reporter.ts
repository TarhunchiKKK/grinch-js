import { Logger } from "../../../shared";
import { TestNode } from "../../testing-tree/classes/types";
import { BaseReporter } from "./base-reporter";

export class ConsoleReporter extends BaseReporter {
    private currentDepth = 0;

    public report() {
        for (const scenario of this.scenarios) {
            this.reportNode(scenario);
        }
    }

    private reportNode(node: TestNode) {
        if (node.hasChildren()) {
            for (const child of node.children) {
                this.currentDepth++;

                this.reportNode(child);

                this.currentDepth--;
            }
        } else {
            const line = "  ".repeat(this.currentDepth) + node.test.title;

            switch (
                node.test.result
                // case true:
                //     Logger.green(line);
                //     break;
                // case false:
                //     Logger.red(line);
                //     break;
                // case null:
                //     Logger.yellow(line);
            ) {
            }
        }
    }
}
