import { IterableAssertion } from "./iterable-assertion";

/**
 * Assertion class for arrays.
 * Provides methods for asserting conditions on array elements and their structure.
 */
export class ArrayAssertion<T = unknown> extends IterableAssertion<T[]> {
    /**
     * Asserts that every element in the array satisfies the provided predicate function.
     *
     * @param predicate (_: T) => boolean - The function to test each element.
     * @returns The current instance for chaining.
     */
    public toHaveEveryMatch(predicate: (_: T) => boolean): this {
        this.runCondition(() => this.value.every(predicate), "Array items don't match predicate");
        return this;
    }

    /**
     * Asserts that at least one element in the array satisfies the provided predicate function.
     *
     * @param predicate (_: T) => boolean - The function to test each element.
     * @returns The current instance for chaining.
     */
    public toHaveSomeMatch(predicate: (_: T) => boolean): this {
        this.runCondition(() => this.value.some(predicate), "No items match condition");
        return this;
    }

    /**
     * Asserts that the array is sorted according to the provided comparator function.
     *
     * @param comparator (_: T, __: T) => number - The function used to determine the order of elements.
     *                                           It should return a negative value if the first element is less than the second,
     *                                           zero if they are equal, and a positive value otherwise.
     * @returns The current instance for chaining.
     */
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
