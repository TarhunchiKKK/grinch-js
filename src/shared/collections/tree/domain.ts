export type ForEachFn<T> = (value: T) => void | Promise<void>;

export type TreeNode<T> = {
    forEach(_: (__: T) => void | Promise<void>): void;
};

export class LeafNode<T> implements TreeNode<T> {
    public constructor(public value: T) {}

    public forEach(fn: ForEachFn<T>) {
        void fn(this.value);
    }
}

export class IntermediateNode<T> {
    public children: Array<IntermediateNode<T> | LeafNode<T>> = [];

    public add(child: IntermediateNode<T> | LeafNode<T>): IntermediateNode<T> | LeafNode<T> {
        this.children.push(child);
        return child;
    }

    public async forEach(fn: ForEachFn<T>) {
        await Promise.all([this.children.map(child => child.forEach(fn))]);
    }
}

export type Node<T> = IntermediateNode<T> | LeafNode<T>;
