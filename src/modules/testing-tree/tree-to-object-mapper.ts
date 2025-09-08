import { TestResult } from "../tests";
import { TestNode } from "./classes/types";
import { TestingTree } from "./testing-tree";

export type TestingNodeReesult = {
    title: string;
    result: string;
    children?: TestingNodeReesult[];
};

const resultDescriptionsMap: Record<TestResult, string> = {
    [TestResult.SUCCEED]: "succeed",
    [TestResult.FAILED]: "failed",
    [TestResult.ERROR]: "error",
    [TestResult.NOT_RUNED]: "not runed",
    [TestResult.SKIPED]: "skiped"
};

export class TreeToObjectMapper {
    public constructor(private readonly tree: TestingTree) {}

    public map() {
        const results: TestingNodeReesult[] = [];

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

    private mapNode(node: TestNode, result: TestingNodeReesult) {
        if (node.hasChildren()) {
            for (const child of node.children) {
                const childResult: TestingNodeReesult = {
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
