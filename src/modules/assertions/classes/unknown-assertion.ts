import { BaseAssertion } from "./base-assertion";

type Types = "string" | "number" | "boolean" | "bigint" | "object" | "function";

export class UnknownAssertion extends BaseAssertion<unknown> {
    public toBeString(): this {
        return this.checkType("string");
    }

    public toBeNuber(): this {
        return this.checkType("number");
    }

    public toBeNan(): this {
        this.conditions.push(() => this.value !== this.value);
        return this;
    }

    public toBeBoolean(): this {
        return this.checkType("boolean");
    }

    public toBeBigInt(): this {
        return this.checkType("bigint");
    }

    public toBeObject(): this {
        return this.checkType("object");
    }

    public toBeFunction(): this {
        return this.checkType("function");
    }

    private checkType(type: Types): this {
        this.conditions.push(() => typeof this.value === type);
        return this;
    }
}
