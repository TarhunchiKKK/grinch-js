import { Test } from "../tests";
import { GroupNode } from "./model/group-node";
import { SerialNode } from "./model/serial-node";

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
