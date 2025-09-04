import { ForEachFn, IntermediateNode, Node } from "./domain";

export class BinaryTree<T> {
    public root = new IntermediateNode<T>();

    public add(child: Node<T>) {
        return this.root.add(child);
    }

    public async forEach(fn: ForEachFn<T>) {
        await this.root.forEach(fn);
    }
}
