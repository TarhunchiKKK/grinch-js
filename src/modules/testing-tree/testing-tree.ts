import { ParallelNode } from "./model/parallel-node";

export class TestingTree {
    public root = new ParallelNode();

    public add() {
        return this.root.addSerial();
    }

    public async run() {
        await this.root.run();
    }
}
