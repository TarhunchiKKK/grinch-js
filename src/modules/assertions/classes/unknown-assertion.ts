import { ZodSchema } from "../types/zod";
import { BaseAssertion } from "./base-assertion";

type Types = "string" | "number" | "boolean" | "bigint" | "object";

export class UnknownAssertion extends BaseAssertion<unknown> {
    private checkType(type: Types): this {
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

    public toMatchZotoMatch(schema: ZodSchema): this {
        this.conditions.push(() => schema.safeParse(this.value).success);
        return this;
    }
}
