import { TestingTree } from "../../testing-tree";

export class TestingResults {
    public tree: TestingTree;

    private static instance: TestingResults | null = null;

    private constructor() {
        this.tree = new TestingTree();
    }

    public static getInstance() {
        if (!TestingResults.instance) {
            TestingResults.instance = new TestingResults();
        }

        return TestingResults.instance;
    }
}
