import { JWT_REGEX, NUMERIC_STRING_REGEX, UUID_REGEX } from "../constants/regex";
import { IterableAssertion } from "./iterable-assertion";

export class StringAssertion extends IterableAssertion<string> {
    public toBeUpperCase(): this {
        this.addCondition(() => this.value === this.value.toUpperCase());
        return this;
    }

    public toBeLowerCase(): this {
        this.addCondition(() => this.value === this.value.toLowerCase());
        return this;
    }

    public toStartsWith(value: string): this {
        this.addCondition(() => this.value.startsWith(value));
        return this;
    }

    public toEndsWith(value: string): this {
        this.addCondition(() => this.value.endsWith(value));
        return this;
    }

    public toBeNumericString(): this {
        return this.toMatchRegex(NUMERIC_STRING_REGEX);
    }

    public toBeBooleanString(): this {
        this.addCondition(() => this.value === "true" || this.value === "false");
        return this;
    }

    public toBeDateString(): this {
        this.addCondition(() => {
            const date = new Date(this.value);
            return !isNaN(date.getTime());
        });
        return this;
    }

    public toMatchRegex(regexp: RegExp): this {
        this.addCondition(() => regexp.test(this.value));
        return this;
    }

    public toBeJWT(): this {
        return this.toMatchRegex(JWT_REGEX);
    }

    public toBeUUID(): this {
        return this.toMatchRegex(UUID_REGEX);
    }
}
