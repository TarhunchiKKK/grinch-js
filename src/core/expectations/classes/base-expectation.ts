import { FALSY_VALUES } from "../lib/constants";
import { ExpectationError } from "../lib/errors";
import { Condition, ZodSchema } from "../lib/types";

/**
 * Base class for all assertions.
 * Provides core functionality for storing the value being asserted
 * and running assertion conditions.
 */
export class BaseExpectation<T> {
    private inverseNextCondition = false;

    /**
     * Constructs a new BaseExpectation instance with the value to be asserted.
     *
     * @param value The value to be asserted.
     */
    public constructor(protected readonly value: T) {}

    /**
     * Inverts the condition of the next assertion.
     *
     * @returns The current instance for chaining.
     */
    public get not(): this {
        this.inverseNextCondition = true;
        return this;
    }

    protected runCondition(condition: Condition, errorMessage: string) {
        let conditionToExecute = condition;

        if (this.inverseNextCondition) {
            conditionToExecute = () => !condition();
            this.inverseNextCondition = false;
        }

        const result = conditionToExecute();
        if (!result) {
            throw new ExpectationError(errorMessage);
        }
    }

    /**
     * Used to compare values using `===` operator.
     *
     * @param value T - Value to compare with.
     * @returns The current instance for chaining.
     */
    public toBe(value: T): this {
        this.runCondition(
            () => this.value === value,
            `Values are not equal. Expect: ${JSON.stringify(value)}, but receive: ${JSON.stringify(this.value)}`
        );
        return this;
    }

    /**
     * Asserts that the value is not undefined.
     *
     * @returns The current instance for chaining.
     */
    public toBeDefined(): this {
        this.runCondition(() => this.value !== undefined, `Value is not defined. `);
        return this;
    }

    /**
     * Asserts that the value is null.
     *
     * @returns The current instance for chaining.
     */
    public toBeNull(): this {
        this.runCondition(() => this.value === null, `Value is not null. Receive: ${JSON.stringify(this.value)}`);
        return this;
    }

    /**
     * Asserts that the value is null or undefined.
     *
     * @returns The current instance for chaining.
     */
    public toBeEmpty(): this {
        this.runCondition(
            () => this.value === null || this.value === undefined,
            `Value is not empty. Receive: ${JSON.stringify(this.value)}`
        );
        return this;
    }

    /**
     * Asserts that the value is truthy.
     *
     * @returns The current instance for chaining.
     */
    public toBeTruthy(): this {
        this.runCondition(
            () => !FALSY_VALUES.includes(this.value as null),
            `Value is not truthy. Receive: ${JSON.stringify(this.value)}`
        );
        return this;
    }

    /**
     * Asserts that the value is falsy.
     *
     * @returns The current instance for chaining.
     */
    public toBeFalsy(): this {
        this.runCondition(
            () => FALSY_VALUES.includes(this.value as null),
            `Value is not falsy. Receive: ${JSON.stringify(this.value)}`
        );
        return this;
    }

    /**
     * Asserts that the value is present in the provided array.
     *
     * @param values T[] - The array to check against.
     * @returns The current instance for chaining.
     */
    public toBeIn(values: T[]): this {
        this.runCondition(
            () => values.includes(this.value),
            `Value is not in array. Receive: ${JSON.stringify(this.value)} `
        );
        return this;
    }

    /**
     * Asserts that the value matches the given Zod schema.
     *
     * @param schema ZodSchema - The Zod schema to validate against.
     * @returns The current instance for chaining.
     */
    public toMatchZodSchema(schema: ZodSchema): this {
        this.runCondition(() => schema.safeParse(this.value).success, "Value don't ,atch schema");
        return this;
    }

    /**
     * Asserts that the value satisfies the provided condition function.
     *
     * @param condition (_: T) => boolean - The function that defines the condition.
     * @returns The current instance for chaining.
     */
    public toSatisfy(condition: (_: T) => boolean): this {
        this.runCondition(() => condition(this.value), "Value don't match condition");
        return this;
    }
}
