import { IterableAssertion } from "./iterable-assertion";

export class ArrayAssertion<T = unknown> extends IterableAssertion<T[]> {
    public toHaveEveryMatch(predicate: (_: T) => boolean): this {
        this.conditions.push(() => this.value.every(predicate));
        return this;
    }

    public toHaveSomeMatch(predicate: (_: T) => boolean): this {
        this.conditions.push(() => this.value.some(predicate));
        return this;
    }

    public toBeSorted(comparator: (_: T, __: T) => number): this {
        this.conditions.push(() => {
            for (let i = 1; i < this.value.length; i++) {
                if (comparator(this.value[i - 1], this.value[i]) > 0) {
                    return false;
                }
            }
            return true;
        });
        return this;
    }
}
