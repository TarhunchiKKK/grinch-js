import { LeafNode } from "./leaf-node";
import { ForEachFn, ITreeNode } from "./types";

type Node<T> = LeafNode<T> | SerialNode<T> | ParallelNode<T>;

abstract class MultipleNode<T> {
    public children: Node<T>[] = [];

    public addLeaf(value: T) {
        const node = new LeafNode(value);
        this.children.push(node);
        return node;
    }

    public addSerial() {
        const node = new SerialNode<T>();
        this.children.push(node);
        return node;
    }

    public addParallel() {
        const node = new ParallelNode<T>();
        this.children.push(node);
        return node;
    }
}

export class SerialNode<T> extends MultipleNode<T> implements ITreeNode<T> {
    public async forEach(fn: ForEachFn<T>) {
        for (const child of this.children) {
            await child.forEach(fn);
        }
    }
}

export class ParallelNode<T> extends MultipleNode<T> implements ITreeNode<T> {
    public async forEach(fn: ForEachFn<T>) {
        await Promise.all([this.children.map(child => child.forEach(fn))]);
    }
}
