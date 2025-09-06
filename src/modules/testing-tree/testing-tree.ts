import { TestInfo } from "../tests";
import { GroupNode } from "./classes/group-node";
import { SerialNode } from "./classes/serial-node";

export class TestingTree {
    public scenarios: GroupNode[] = [];

    public add(test: TestInfo) {
        this.scenarios.push(new SerialNode(test));
        return this.scenarios[this.scenarios.length - 1];
    }

    public async run() {
        await Promise.allSettled([this.scenarios.map(child => child.run())]);
    }
}
