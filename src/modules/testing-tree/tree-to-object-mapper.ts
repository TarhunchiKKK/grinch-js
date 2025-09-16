import { TestResult } from "../tests";
import { TestNode } from "./classes/types";
import { TestingTree } from "./testing-tree";

type StringTestResult = "succeed" | "failed" | "error" | "not runed";

export type TestingNodeResult = {
    title: string;
    result: StringTestResult;
    children?: TestingNodeResult[];
};

const resultDescriptionsMap: Record<TestResult, StringTestResult> = {
    [TestResult.SUCCEED]: "succeed",
    [TestResult.FAILED]: "failed",
    [TestResult.ERROR]: "error",
    [TestResult.NOT_RUNED]: "not runed"
};

export class TreeToObjectMapper {
    public constructor(private readonly tree: TestingTree) {}

    public map() {
        const results: TestingNodeResult[] = [];

        for (const child of this.tree.children) {
            results.push({
                title: child.test.title,
                result: resultDescriptionsMap[child.test.result],
                children: []
            });
            this.mapNode(child, results[results.length - 1]);
        }

        return results;
    }

    private mapNode(node: TestNode, result: TestingNodeResult) {
        if (node.hasChildren()) {
            for (const child of node.children) {
                const childResult: TestingNodeResult = {
                    title: child.test.title,
                    result: resultDescriptionsMap[child.test.result],
                    children: []
                };

                result.children!.push(childResult);

                this.mapNode(child, childResult);
            }
        } else {
            const childResult = {
                title: node.test.title,
                result: resultDescriptionsMap[node.test.result]
            };

            result.children!.push(childResult);
        }
    }
}
