import { ForEachFn, ITreeNode } from "./types";

export class LeafNode<T> implements ITreeNode<T> {
    public constructor(public value: T) {}

    public forEach(fn: ForEachFn<T>) {
        void fn(this.value);
    }
}
