import { ParallelNode } from "./model/multiple-node";
import { ForEachFn } from "./model/types";

export class BinaryTree<T> {
    public root = new ParallelNode<T>();

    public add() {
        return this.root.addSerial();
    }

    public async forEach(fn: ForEachFn<T>) {
        await this.root.forEach(fn);
    }
}
