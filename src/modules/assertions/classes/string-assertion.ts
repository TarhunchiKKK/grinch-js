import { JWT_REGEX, UUID_REGEX } from "../constants/regex";
import { IterableAssertion } from "./iterable-assertion";

export class StringAssertion extends IterableAssertion<string> {
    public toBeUpperCase(): this {
        this.conditions.push(() => this.value === this.value.toUpperCase());
        return this;
    }

    public toBeLowerCase(): this {
        this.conditions.push(() => this.value === this.value.toLowerCase());
        return this;
    }

    public toStartsWith(value: string): this {
        this.conditions.push(() => this.value.startsWith(value));
        return this;
    }

    public toEndsWith(value: string): this {
        this.conditions.push(() => this.value.endsWith(value));
        return this;
    }

    public toMatch(regexp: RegExp): this {
        this.conditions.push(() => regexp.test(this.value));
        return this;
    }

    public toBeDateString(): this {
        this.conditions.push(() => {
            const date = new Date(this.value);
            return !isNaN(date.getTime());
        });
        return this;
    }

    public toBeJWT(): this {
        this.conditions.push(() => JWT_REGEX.test(this.value));
        return this;
    }

    public toBeUUID(): this {
        this.conditions.push(() => UUID_REGEX.test(this.value));
        return this;
    }
}
