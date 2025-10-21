import { TestNode, TestingTree } from "@modules/testing-tree";
import { TestResult } from "@shared/lib";

export class TreeToObjectMapper {
    public map() {
        const results: TestResult[] = [];

        for (const child of TestingTree.children) {
            results.push({
                title: child.test.title,
                status: child.test.status,
                children: []
            });
            this.mapNode(child, results[results.length - 1]);
        }

        return results;
    }

    private mapNode(node: TestNode, result: TestResult) {
        if (node.hasChildren()) {
            for (const child of node.children) {
                const childResult: TestResult = {
                    title: child.test.title,
                    status: child.test.status,
                    children: []
                };

                result.children!.push(childResult);

                this.mapNode(child, childResult);
            }
        } else {
            const childResult: TestResult = {
                title: node.test.title,
                status: node.test.status
            };

            result.children!.push(childResult);
        }
    }
}
