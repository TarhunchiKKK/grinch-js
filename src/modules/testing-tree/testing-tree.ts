import { Test } from "../tests";
import { GroupNode } from "./classes/group-node";
import { SerialNode } from "./classes/serial-node";

export class TestingTree {
    public root: GroupNode[] = [];

    public add(test: Test) {
        this.root.push(new SerialNode(test));
        return this.root[this.root.length - 1];
    }

    public async run() {
        await Promise.allSettled([this.root.map(child => child.run())]);
    }
}
