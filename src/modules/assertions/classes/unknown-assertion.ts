import { ClassConstructor, TypeofResponse } from "../../../shared";
import { BaseAssertion } from "./base-assertion";

export class UnknownAssertion extends BaseAssertion<unknown> {
    private checkType(type: TypeofResponse): this {
        this.addCondition(() => typeof this.value === type);
        return this;
    }

    public toBeString(): this {
        return this.checkType("string");
    }

    public toBeNuber(): this {
        return this.checkType("number");
    }

    public toBeNan(): this {
        this.addCondition(() => this.value !== this.value);
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
        this.addCondition(() => Array.isArray(this.value));
        return this;
    }

    public toBeDate(): this {
        this.addCondition(() => this.value instanceof Date);
        return this;
    }

    public toBeInstanceOf(Class: ClassConstructor): this {
        this.addCondition(() => this.value instanceof Class);
        return this;
    }
}
