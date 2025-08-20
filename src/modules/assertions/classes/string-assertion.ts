import { JWT_REGEX, NUMERIC_STRING_REGEX, UUID_REGEX } from "../constants/regex";
import { IterableAssertion } from "./iterable-assertion";

/**
 * Assertion class for strings.
 * Extends IterableAssertion and provides methods for asserting conditions on strings,
 * focusing on string-specific checks like case, prefixes, suffixes, and patterns.
 */
export class StringAssertion extends IterableAssertion<string> {
    /**
     * Asserts that the string is in uppercase.
     *
     * @returns The current instance for chaining.
     */
    public toBeUpperCase(): this {
        this.runCondition(
            () => this.value === this.value.toUpperCase(),
            `Value is not upper case string. Receive: ${this.value}`
        );
        return this;
    }

    /**
     * Asserts that the string is in lowercase.
     *
     * @returns The current instance for chaining.
     */
    public toBeLowerCase(): this {
        this.runCondition(
            () => this.value === this.value.toLowerCase(),
            `Value is not lower case string. Receive: ${this.value}`
        );
        return this;
    }

    /**
     * Asserts that the string starts with the specified value.
     *
     * @param value The string the value should start with.
     * @returns The current instance for chaining.
     */
    public toStartsWith(value: string): this {
        this.runCondition(
            () => this.value.startsWith(value),
            `Value is not starts with ${value}. Receive: ${this.value}`
        );
        return this;
    }

    /**
     * Asserts that the string ends with the specified value.
     *
     * @param value The string the value should end with.
     * @returns The current instance for chaining.
     */
    public toEndsWith(value: string): this {
        this.runCondition(() => this.value.endsWith(value), `Value is not ends with ${value}. Receive: ${this.value}`);
        return this;
    }

    /**
     * Asserts that the string is a numeric string (contains only digits).
     *
     * @returns The current instance for chaining.
     */
    public toBeNumericString(): this {
        return this.toMatchRegex(NUMERIC_STRING_REGEX);
    }

    /**
     * Asserts that the string is either "true" or "false".
     *
     * @returns The current instance for chaining.
     */
    public toBeBooleanString(): this {
        this.runCondition(
            () => this.value === "true" || this.value === "false",
            `Value is not boolean string. Receive: ${this.value}`
        );
        return this;
    }

    /**
     * Asserts that the string matches the given regular expression.
     *
     * @param regexp The regular expression to test against.
     * @returns The current instance for chaining.
     */
    public toMatchRegex(regexp: RegExp): this {
        this.runCondition(() => regexp.test(this.value), `Value is not match regex ${regexp}. Receive: ${this.value}`);
        return this;
    }

    // ! Test Not Works.
    /**
     * Asserts that the string is a JSON Web Token (JWT).
     *
     * Note: This method only asserts that string format, not a token validity.
     *
     * @returns The current instance for chaining.
     */
    public toBeJWT(): this {
        return this.toMatchRegex(JWT_REGEX);
    }

    /**
     * Asserts that the string is a valid UUID.
     *
     * @returns The current instance for chaining.
     */
    public toBeUUID(): this {
        return this.toMatchRegex(UUID_REGEX);
    }
}
