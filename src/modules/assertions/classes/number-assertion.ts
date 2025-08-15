import { BaseAssertion } from "./base-assertion";

export class NumberAssertion extends BaseAssertion<number> {
    public toBe(value: number): this {
        this.conditions.push(() => this.value === value);
        return this;
    }

    public toBePositive(): this {
        this.conditions.push(() => this.value >= 0);
        return this;
    }

    public toBeNegative(): this {
        this.conditions.push(() => this.value < 0);
        return this;
    }

    public toBeInteger(): this {
        this.conditions.push(() => Number.isInteger(this.value));
        return this;
    }

    public toBeFloat(): this {
        this.conditions.push(() => !Number.isInteger(this.value));
        return this;
    }

    public toBeNaN(): this {
        this.conditions.push(() => this.value !== this.value);
        return this;
    }

    public toBeLessThan(value: number): this {
        this.conditions.push(() => this.value < value);
        return this;
    }

    public toBeLessThanOrEquals(value: number): this {
        this.conditions.push(() => this.value <= value);
        return this;
    }

    public toBeGraterThan(value: number): this {
        this.conditions.push(() => this.value > value);
        return this;
    }

    public toBeGraterThanOrEquals(value: number): this {
        this.conditions.push(() => this.value >= value);
        return this;
    }

    public toHaveValueBetween(start: number, end: number): this {
        this.conditions.push(() => start <= this.value && this.value <= end);
        return this;
    }
}
