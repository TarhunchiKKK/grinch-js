import { TestingTree } from "@modules/testing-tree";

export class TestingTreeSingleton {
    public tree: TestingTree;

    private static instance: TestingTreeSingleton | null = null;

    private constructor() {
        this.tree = new TestingTree();
    }

    public static getInstance() {
        if (!TestingTreeSingleton.instance) {
            TestingTreeSingleton.instance = new TestingTreeSingleton();
        }

        return TestingTreeSingleton.instance;
    }
}
