import { deepCompare } from "../../../shared";
import { FALSY_VALUES } from "../constants/core";
import { Condition } from "../types/conditions";
import { ZodSchema } from "../types/zod";

export class BaseAssertion<T> {
    protected conditions: Condition<T>[] = [];

    public constructor(protected readonly value: T) {}

    public addCondition(condition: Condition<T>) {
        this.conditions.push(condition);
    }

    public toBe(value: unknown): this {
        this.conditions.push(() => this.value === value);
        return this;
    }

    public toEquals(value: unknown): this {
        this.conditions.push(() => deepCompare(this.value, value));
        return this;
    }

    public toBeDefined(): this {
        this.conditions.push(() => this.value !== undefined);
        return this;
    }

    public toBeNull(): this {
        this.conditions.push(() => this.value === null);
        return this;
    }

    public toBeEmpty(): this {
        this.conditions.push(() => this.value === null || this.value === undefined);
        return this;
    }

    public toBeTruthy(): this {
        this.conditions.push(() => !FALSY_VALUES.includes(this.value as null));
        return this;
    }

    public toBeFalsy(): this {
        this.conditions.push(() => FALSY_VALUES.includes(this.value as null));
        return this;
    }

    public toBeIn(values: T[]): this {
        this.conditions.push(() => values.includes(this.value));
        return this;
    }

    public toMatchZodSchema(schema: ZodSchema): this {
        this.conditions.push(() => schema.safeParse(this.value).success);
        return this;
    }

    public toSatisfy(condition: (_: T) => boolean): this {
        this.conditions.push(() => condition(this.value));
        return this;
    }
}
