import { IterableAssertion } from "./iterable-assertion";

export class ArrayAssertion<T = unknown> extends IterableAssertion<T[]> {
    public toHaveEveryMatch(predicate: (_: T) => boolean): this {
        this.runCondition(() => this.value.every(predicate), "Array items don't match predicate");
        return this;
    }

    public toHaveSomeMatch(predicate: (_: T) => boolean): this {
        this.runCondition(() => this.value.some(predicate), "No items match condition");
        return this;
    }

    public toBeSorted(comparator: (_: T, __: T) => number): this {
        this.runCondition(() => {
            for (let i = 1; i < this.value.length; i++) {
                if (comparator(this.value[i - 1], this.value[i]) > 0) {
                    return false;
                }
            }
            return true;
        }, "Array is not sorted by given comparator");
        return this;
    }
}
