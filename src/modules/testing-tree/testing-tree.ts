import { TestInfo } from "@modules/tests";
import { GroupNode } from "./classes/group-node";
import { SerialNode } from "./classes/serial-node";

class TestTree {
    public children: GroupNode[] = [];

    public add(test: TestInfo) {
        this.children.push(new SerialNode(test));
        return this.children[this.children.length - 1];
    }

    public calculateResults() {
        for (const child of this.children) {
            child.getInfo();
        }
    }

    public async run() {
        await Promise.allSettled([this.children.map(child => child.run())]);
    }
}

export const TestingTree = new TestTree();
