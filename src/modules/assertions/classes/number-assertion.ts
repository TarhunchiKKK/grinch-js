import { BaseAssertion } from "./base-assertion";

/**
 * Assertion class for performing assertions on numbers.
 * Extends the BaseAssertion class.
 */
export class NumberAssertion extends BaseAssertion<number> {
    /**
     * Asserts that the number is positive (greater than or equal to 0).
     *
     * @returns The current instance for chaining.
     */
    public toBePositive(): this {
        this.runCondition(() => this.value >= 0, `Value is not positive. Receive: ${this.value}`);
        return this;
    }

    /**
     * Asserts that the number is negative (less than 0).
     *
     * @returns The current instance for chaining.
     */
    public toBeNegative(): this {
        this.runCondition(() => this.value < 0, `Value is not positive, Receive: ${this.value}`);
        return this;
    }

    /**
     * Asserts that the number is integer.
     * @returns The current instance for chaining.
     */
    public toBeInteger(): this {
        this.runCondition(() => Number.isInteger(this.value), `Value is not integer. Receive: ${this.value}`);
        return this;
    }

    /**
     * Asserts that the number is a floating-point number (not an integer).
     *
     * @returns The current instance for chaining.
     */
    public toBeFloat(): this {
        this.runCondition(() => !Number.isInteger(this.value), `Value is not float. Receive: ${this.value}`);
        return this;
    }

    /**
     * Asserts that the number is NaN (Not a Number).
     *
     * Note: In JavaScript, `NaN` is the only value that does not equal itself.
     * This property is used here to check for `NaN`.
     *
     * @returns The current instance for chaining.
     */
    public toBeNaN(): this {
        this.runCondition(() => this.value !== this.value, `Value is not NaN. Receive: ${this.value}`);
        return this;
    }

    /**
     * Asserts that the number is less than to provided value.
     *
     * @param value Number to compare against.
     * @returns The current instance for chaining.
     */
    public toBeLessThan(value: number): this {
        this.runCondition(() => this.value < value, `Value is grater. Expect: ${value}, but receive: ${this.value}`);
        return this;
    }

    /**
     * Asserts that the number is less than or equal to provided value.
     *
     * @param value Number to compare against.
     * @returns The current instance for chaining.
     */
    public toBeLessThanOrEquals(value: number): this {
        this.runCondition(() => this.value <= value, `Value is grater. Expect: ${value}, but receive: ${this.value}`);
        return this;
    }

    /**
     * Asserts that the number is greater than to the provided value.
     *
     * @param value The value to compare against.
     * @returns The current instance for chaining.
     */
    public toBeGraterThan(value: number): this {
        this.runCondition(() => this.value > value, `Value is less. Expect: ${value}, but receive: ${this.value}`);
        return this;
    }

    /**
     * Asserts that the number is greater than or equal to the provided value.
     *
     * @param value The value to compare against.
     * @returns The current instance for chaining.
     */
    public toBeGraterThanOrEquals(value: number): this {
        this.runCondition(() => this.value >= value, `Value is less. Expect: ${value}, but receive: ${this.value}`);
        return this;
    }

    /**
     * Asserts that the number is within the specified range (inclusive).
     *
     * @param start The lower bound of the range.
     * @returns The current instance for chaining.
     */
    public toHaveValueBetween(start: number, end: number): this {
        this.runCondition(
            /**
             * Asserts that the number is within the specified range (inclusive).
             * @param start The lower bound of the range.
             * @param end The upper bound of the range.
             */
            () => start <= this.value && this.value <= end,
            `Value don't match. Exxpect: [${start}, ${end}], but receive: ${this.value}`
        );
        return this;
    }
}
