import { FALSY_VALUES } from "../constants/core";
import { Condition } from "../types/conditions";
import { ZodSchema } from "../types/zod";

export class BaseAssertion<T> {
    private inverseNextCondition = false;

    public constructor(protected readonly value: T) {}

    public get not(): this {
        this.inverseNextCondition = true;
        return this;
    }

    protected runCondition(condition: Condition, errorMessage: string) {
        let conditionToExecute = condition;

        if (this.inverseNextCondition) {
            conditionToExecute = () => !condition();
            this.inverseNextCondition = false;
        }

        const result = conditionToExecute();
        if (!result) {
            throw new Error(errorMessage);
        }
    }

    public toBe(value: T): this {
        this.runCondition(
            () => this.value === value,
            `Values are not equal. Expect: ${JSON.stringify(value)}, but receive: ${JSON.stringify(this.value)}`
        );
        return this;
    }

    public toBeDefined(): this {
        this.runCondition(() => this.value !== undefined, `Value is not defined. `);
        return this;
    }

    public toBeNull(): this {
        this.runCondition(() => this.value === null, `Value is not null. Receive: ${JSON.stringify(this.value)}`);
        return this;
    }

    public toBeEmpty(): this {
        this.runCondition(
            () => this.value === null || this.value === undefined,
            `Value is not empty. Receive: ${JSON.stringify(this.value)}`
        );
        return this;
    }

    public toBeTruthy(): this {
        this.runCondition(
            () => !FALSY_VALUES.includes(this.value as null),
            `Value is not truthy. Receive: ${JSON.stringify(this.value)}`
        );
        return this;
    }

    public toBeFalsy(): this {
        this.runCondition(
            () => FALSY_VALUES.includes(this.value as null),
            `Value is not falsy. Receive: ${JSON.stringify(this.value)}`
        );
        return this;
    }

    public toBeIn(values: T[]): this {
        this.runCondition(
            () => values.includes(this.value),
            `Value is not in array. Receive: ${JSON.stringify(this.value)} `
        );
        return this;
    }

    public toMatchZodSchema(schema: ZodSchema): this {
        this.runCondition(() => schema.safeParse(this.value).success, "Value don't ,atch schema");
        return this;
    }

    public toSatisfy(condition: (_: T) => boolean): this {
        this.runCondition(() => condition(this.value), "Value don't match condition");
        return this;
    }
}
