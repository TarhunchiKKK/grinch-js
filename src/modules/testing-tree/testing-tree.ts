import { TestNode } from "./model/types";

export class TestingTree {
    public root: TestNode[] = [];

    public add(test: TestNode) {
        this.root.push(test);
        return this.root[this.root.length - 1];
    }

    public async run() {
        await Promise.allSettled([this.root.map(child => child.run())]);
    }
}
