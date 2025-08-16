import { deepCompare } from "../../../shared";
import { FALSY_VALUES } from "../constants/core";
import { Condition } from "../types/conditions";
import { ZodSchema } from "../types/zod";

export class BaseAssertion<T> {
    protected conditions: Condition[] = [];

    private inverseNextCondition = false;

    public constructor(protected readonly value: T) {}

    public get not(): this {
        this.inverseNextCondition = true;
        return this;
    }

    protected addCondition(condition: Condition) {
        if (this.inverseNextCondition) {
            this.conditions.push(() => !condition());
            this.inverseNextCondition = false;
            return;
        }

        this.inverseNextCondition = false;
        this.conditions.push(condition);
    }

    public toBe(value: unknown): this {
        this.addCondition(() => this.value === value);
        return this;
    }

    public toEquals(value: unknown): this {
        this.addCondition(() => deepCompare(this.value, value));
        return this;
    }

    public toBeDefined(): this {
        this.addCondition(() => this.value !== undefined);
        return this;
    }

    public toBeNull(): this {
        this.addCondition(() => this.value === null);
        return this;
    }

    public toBeEmpty(): this {
        this.addCondition(() => this.value === null || this.value === undefined);
        return this;
    }

    public toBeTruthy(): this {
        this.addCondition(() => !FALSY_VALUES.includes(this.value as null));
        return this;
    }

    public toBeFalsy(): this {
        this.addCondition(() => FALSY_VALUES.includes(this.value as null));
        return this;
    }

    public toBeIn(values: T[]): this {
        this.addCondition(() => values.includes(this.value));
        return this;
    }

    public toMatchZodSchema(schema: ZodSchema): this {
        this.addCondition(() => schema.safeParse(this.value).success);
        return this;
    }

    public toSatisfy(condition: (_: T) => boolean): this {
        this.addCondition(() => condition(this.value));
        return this;
    }
}
