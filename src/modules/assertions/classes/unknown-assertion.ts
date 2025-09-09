import { deepCompare } from "@shared/lib";
import { ClassConstructor, TypeofResponse } from "@shared/types";
import { BaseAssertion } from "./base-assertion";

/**
 * Assertion class for values of unknown type.
 * Provides methods for asserting basic type checks, instance checks, and deep equality.
 */
export class UnknownAssertion extends BaseAssertion<unknown> {
    /**
     * Asserts that the value is deeply equal to the expected value.
     *
     * @param value The expected value to compare against.
     * @returns The current instance for chaining.
     */
    public toEquals(value: unknown): this {
        this.runCondition(
            () => deepCompare(this.value, value),
            `Values are not equal. Expect: ${JSON.stringify(value)}, but receive: ${JSON.stringify(this.value)}`
        );
        return this;
    }

    private checkType(type: TypeofResponse): this {
        this.runCondition(() => typeof this.value === type, `Value is not of type ${type}. Receive: ${JSON.stringify(this.value)}`);
        return this;
    }

    /**
     * Asserts that the value is of type string.
     *
     * @returns The current instance for chaining.
     */
    public toBeString(): this {
        return this.checkType("string");
    }

    /**
     * Asserts that the value is of type number.
     *
     * @returns The current instance for chaining.
     */
    public toBeNumber(): this {
        return this.checkType("number");
    }

    /**
     * Asserts that the value is NaN (Not a Number).
     *
     * @returns The current instance for chaining.
     */
    public toBeNaN(): this {
        this.runCondition(() => this.value !== this.value, `Value is not NaN. Receive: ${JSON.stringify(this.value)}`);
        return this;
    }

    /**
     * Asserts that the value is of type boolean.
     *
     * @returns The current instance for chaining.
     */
    public toBeBoolean(): this {
        return this.checkType("boolean");
    }

    /**
     * Asserts that the value is of type bigint.
     *
     * @returns The current instance for chaining.
     */
    public toBeBigInt(): this {
        return this.checkType("bigint");
    }

    /**
     * Asserts that the value is of type object.
     *
     * @returns The current instance for chaining.
     */
    public toBeObject(): this {
        return this.checkType("object");
    }

    /**
     * Asserts that the value is of type object (excluding null and arrays).
     *
     * @returns The current instance for chaining.
     */
    public toBeRecord(): this {
        this.runCondition(
            () => {
                if (this.value === null || Array.isArray(this.value)) {
                    return false;
                }

                return typeof this.value === "object";
            },
            `Value is not record. Receive: ${JSON.stringify(this.value)}`
        );
        return this;
    }

    /**
     * Asserts that the value is an array.
     *
     * @returns The current instance for chaining.
     */
    public toBeArray(): this {
        this.runCondition(() => Array.isArray(this.value), `Value is not array. Receive: ${JSON.stringify(this.value)}`);
        return this;
    }

    /**
     * Asserts that the value is an instance of the specified class.
     *
     * @param Class The class constructor to check against.
     * @returns The current instance for chaining.
     */
    public toBeInstanceOf(Class: ClassConstructor): this {
        this.runCondition(() => this.value instanceof Class, "Value is not instance of provided class.");
        return this;
    }
}
