export type ForEachFn<T> = (value: T) => void | Promise<void>;

export interface ITreeNode<T> {
    forEach(_: (__: T) => void | Promise<void>): void | Promise<void>;
}
