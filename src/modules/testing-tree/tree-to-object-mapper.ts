import { TestResult } from "../tests";
import { TestNode } from "./classes/types";
import { TestingTree } from "./testing-tree";

export type TestingResult = {
    title: string;
    result: string;
    children?: TestingResult[];
};

const resultsMap: Record<TestResult, string> = {
    [TestResult.SUCCEED]: "succeed",
    [TestResult.FAILED]: "failed",
    [TestResult.ERROR_DURING_TEST]: "error",
    [TestResult.NOT_RUNED]: "not runed",
    [TestResult.PARTIAL_SUCCEED]: "partial succeed",
    [TestResult.FORCIBLY_SUCCEED]: "forcibly succeed",
    [TestResult.FORCIBLY_SKIPED]: "forcibly_skiped",
    [TestResult.FORCIBLY_FAILED]: "forcibly failed"
};

export class TreeToObjectMapper {
    public constructor(private readonly tree: TestingTree) {}

    public map() {
        const results: TestingResult[] = [];

        for (const child of this.tree.children) {
            results.push({
                title: child.test.title,
                result: resultsMap[child.test.result],
                children: []
            });
            this.mapNode(child, results[results.length - 1]);
        }

        return results;
    }

    private mapNode(node: TestNode, result: TestingResult) {
        if (node.hasChildren()) {
            for (const child of node.children) {
                const childResult: TestingResult = {
                    title: child.test.title,
                    result: resultsMap[child.test.result],
                    children: []
                };

                result.children!.push(childResult);

                this.mapNode(child, childResult);
            }
        } else {
            const childResult = {
                title: node.test.title,
                result: resultsMap[node.test.result]
            };

            result.children!.push(childResult);
        }
    }
}
