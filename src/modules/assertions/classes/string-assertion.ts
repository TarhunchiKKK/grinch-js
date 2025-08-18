import { JWT_REGEX, NUMERIC_STRING_REGEX, UUID_REGEX } from "../constants/regex";
import { IterableAssertion } from "./iterable-assertion";

export class StringAssertion extends IterableAssertion<string> {
    public toBeUpperCase(): this {
        this.runCondition(
            () => this.value === this.value.toUpperCase(),
            `Value is not upper case string. Receive: ${this.value}`
        );
        return this;
    }

    public toBeLowerCase(): this {
        this.runCondition(
            () => this.value === this.value.toLowerCase(),
            `Value is not lower case string. Receive: ${this.value}`
        );
        return this;
    }

    public toStartsWith(value: string): this {
        this.runCondition(
            () => this.value.startsWith(value),
            `Value is not starts with ${value}. Receive: ${this.value}`
        );
        return this;
    }

    public toEndsWith(value: string): this {
        this.runCondition(() => this.value.endsWith(value), `Value is not ends with ${value}. Receive: ${this.value}`);
        return this;
    }

    public toBeNumericString(): this {
        return this.toMatchRegex(NUMERIC_STRING_REGEX);
    }

    public toBeBooleanString(): this {
        this.runCondition(
            () => this.value === "true" || this.value === "false",
            `Value is not boolean string. Receive: ${this.value}`
        );
        return this;
    }

    public toBeDateString(): this {
        this.runCondition(() => {
            const date = new Date(this.value);
            return !isNaN(date.getTime());
        }, `Value is not date string. Receive: ${this.value}`);
        return this;
    }

    public toMatchRegex(regexp: RegExp): this {
        this.runCondition(
            () => regexp.test(this.value),
            `Value is not match regex ${JSON.stringify(regexp)}. Receive: ${this.value}`
        );
        return this;
    }

    public toBeJWT(): this {
        return this.toMatchRegex(JWT_REGEX);
    }

    public toBeUUID(): this {
        return this.toMatchRegex(UUID_REGEX);
    }
}
