import { BaseAssertion } from "./base-assertion";

export class NumberAssertion extends BaseAssertion<number> {
    public toBe(value: number): this {
        this.addCondition(() => this.value === value);
        return this;
    }

    public toBePositive(): this {
        this.addCondition(() => this.value >= 0);
        return this;
    }

    public toBeNegative(): this {
        this.addCondition(() => this.value < 0);
        return this;
    }

    public toBeInteger(): this {
        this.addCondition(() => Number.isInteger(this.value));
        return this;
    }

    public toBeFloat(): this {
        this.addCondition(() => !Number.isInteger(this.value));
        return this;
    }

    public toBeNaN(): this {
        this.addCondition(() => this.value !== this.value);
        return this;
    }

    public toBeLessThan(value: number): this {
        this.addCondition(() => this.value < value);
        return this;
    }

    public toBeLessThanOrEquals(value: number): this {
        this.addCondition(() => this.value <= value);
        return this;
    }

    public toBeGraterThan(value: number): this {
        this.addCondition(() => this.value > value);
        return this;
    }

    public toBeGraterThanOrEquals(value: number): this {
        this.addCondition(() => this.value >= value);
        return this;
    }

    public toHaveValueBetween(start: number, end: number): this {
        this.addCondition(() => start <= this.value && this.value <= end);
        return this;
    }
}
