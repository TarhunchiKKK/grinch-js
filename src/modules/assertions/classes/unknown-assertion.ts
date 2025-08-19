import { ClassConstructor, TypeofResponse, deepCompare } from "../../../shared";
import { BaseAssertion } from "./base-assertion";

export class UnknownAssertion extends BaseAssertion<unknown> {
    public toEquals(value: unknown): this {
        this.runCondition(
            () => deepCompare(this.value, value),
            `Values are not equal. Expect: ${JSON.stringify(value)}, but receive: ${JSON.stringify(this.value)}`
        );
        return this;
    }

    private checkType(type: TypeofResponse): this {
        this.runCondition(
            () => typeof this.value === type,
            `Value is not of type ${type}. Receive: ${JSON.stringify(this.value)}`
        );
        return this;
    }

    public toBeString(): this {
        return this.checkType("string");
    }

    public toBeNuber(): this {
        return this.checkType("number");
    }

    public toBeNan(): this {
        this.runCondition(() => this.value !== this.value, `Value is not NaN. Receive: ${JSON.stringify(this.value)}`);
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

    public toBeArray(): this {
        this.runCondition(
            () => Array.isArray(this.value),
            `Value is not array. Receive: ${JSON.stringify(this.value)}`
        );
        return this;
    }

    public toBeInstanceOf(Class: ClassConstructor): this {
        this.runCondition(() => this.value instanceof Class, "Value is not instance of provided class.");
        return this;
    }
}
