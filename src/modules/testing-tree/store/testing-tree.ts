import { TestInfo } from "@shared/types";
import { GroupNode } from "../classes/group-node";
import { SerialNode } from "../classes/serial-node";
import { TreeToObjectMapper } from "./tree-to-object-mapper";

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

    public toObject() {
        const mapper = new TreeToObjectMapper();
        return mapper.map();
    }
}

export const TestingTree = new TestTree();
