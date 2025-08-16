import { ClassConstructor, TypeofResponse } from "../../../shared";
import { BaseAssertion } from "./base-assertion";

export class UnknownAssertion extends BaseAssertion<unknown> {
    private checkType(type: TypeofResponse): this {
        this.conditions.push(() => typeof this.value === type);
        return this;
    }

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

    public toBeArray(): this {
        this.conditions.push(() => Array.isArray(this.value));
        return this;
    }

    public toBeDate(): this {
        this.conditions.push(() => this.value instanceof Date);
        return this;
    }

    public toBeInstanceOf(Class: ClassConstructor): this {
        this.conditions.push(() => this.value instanceof Class);
        return this;
    }
}
