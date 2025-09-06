import { TestInfo } from "../tests";
import { SerialNode } from "./classes/serial-node";
import { TestNode } from "./classes/types";

export class TestingTree {
    public scenarios: TestNode[] = [];

    public add(test: TestInfo) {
        this.scenarios.push(new SerialNode(test));
        return this.scenarios[this.scenarios.length - 1];
    }

    public async run() {
        await Promise.allSettled([this.scenarios.map(child => child.run())]);
    }
}
