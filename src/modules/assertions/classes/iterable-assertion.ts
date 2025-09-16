import { ElementType } from "@shared/types";
import { BaseAssertion } from "./base-assertion";

/**
 * Assertion class for iterable values (strings and arrays).
 * Provides methods for asserting conditions on the length and content of iterables.
 */
export class IterableAssertion<T extends string | unknown[]> extends BaseAssertion<T> {
    /**
     * Asserts that the iterable has the expected length.
     *
     * @param length The expected length.
     * @returns The current instance for chaining.
     */
    public toHaveLength(length: number): this {
        this.runCondition(
            () => this.value.length === length,
            `The lengths don't match. Expect: ${length}, but receive ${this.value.length}`
        );
        return this;
    }

    /**
     * Asserts that the iterable is shorter than the specified length.
     *
     * @param length The length to compare against.
     * @returns The current instance for chaining.
     */
    public toBeShorterThan(length: number): this {
        this.runCondition(
            () => this.value.length < length,
            `Length is grater. Expect: ${length}, but receive: ${this.value.length}`
        );
        return this;
    }

    /**
     * Asserts that the iterable is shorter than or equal to the specified length.
     *
     * @param length The length to compare against.
     * @returns The current instance for chaining.
     */
    public toBeShorterThanOrEquals(length: number): this {
        this.runCondition(
            () => this.value.length <= length,
            `Length is grater. Expect: ${length}, but receive: ${this.value.length}`
        );
        return this;
    }

    /**
     * Asserts that the iterable is longer than the specified length.
     *
     * @param length The length to compare against.
     * @returns The current instance for chaining.
     */
    public toBeLongerThan(length: number): this {
        this.runCondition(
            () => this.value.length > length,
            `Length is less. Expect: ${length}, but receive: ${this.value.length}`
        );
        return this;
    }

    /**
     * Asserts that the iterable is longer than or equal to the specified length.
     *
     * @param length The length to compare against.
     * @returns The current instance for chaining.
     */
    public toBeLongerThanOrEquals(length: number): this {
        this.runCondition(
            () => this.value.length >= length,
            `Length is less. Expect: ${length}, but receive: ${this.value.length}`
        );
        return this;
    }

    /**
     * Asserts that the iterable's length is within the specified range (inclusive).
     *
     * @param start The lower bound of the length range.
     * @param end The upper bound of the length range.
     * @returns The current instance for chaining.
     */
    public toHaveLengthBetween(start: number, end: number): this {
        this.runCondition(
            () => start <= this.value.length && this.value.length <= end,
            `Length don't match. Expect [${start}, [${end}], but receive: ${this.value.length} `
        );
        return this;
    }

    /**
     * Asserts that the iterable includes the specified item.
     *
     * @param item The item expected to be in the iterable.
     * @returns The current instance for chaining.
     */
    public toIncludes(item: T extends string ? string : ElementType<T>): this {
        this.runCondition(() => this.value.includes(item as string), `Value don't include ${JSON.stringify(item)}`);
        return this;
    }

    /**
     * Asserts that the iterable has the expected value at the specified index.
     *
     * @param index The index to check.
     * @param item The expected value at the index.
     * @returns The current instance for chaining.
     */
    public toHaveValueAtIndex(index: number, item: T extends string ? string : ElementType<T>): this {
        this.runCondition(
            () => this.value[index] === item,
            `Value don't have such value at index ${index}. Expect: ${JSON.stringify(item)}, but receive: ${JSON.stringify(this.value[index])}`
        );
        return this;
    }
}
