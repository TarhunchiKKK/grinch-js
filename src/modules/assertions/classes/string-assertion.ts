import { BaseAssertion } from "./base-assertion";

const jwtRegex = /^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-+/=]*)$/;
const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export class StringAssertion extends BaseAssertion<string> {
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
        this.conditions.push(() => jwtRegex.test(this.value));
        return this;
    }

    public toBeUUID(): this {
        this.conditions.push(() => uuidRegex.test(this.value));
        return this;
    }
}
