import { BaseAssertion } from "./base-assertion";

export class NumberAssertion extends BaseAssertion<number> {
    public toBe(value: number): this {
        this.runCondition(
            () => this.value === value,
            `Values are not equal. Expect: ${value}, but receive: ${this.value} `
        );
        return this;
    }

    public toBePositive(): this {
        this.runCondition(() => this.value >= 0, `Value is not positive. Receive: ${this.value}`);
        return this;
    }

    public toBeNegative(): this {
        this.runCondition(() => this.value < 0, `Value is not positive, Receive: ${this.value}`);
        return this;
    }

    public toBeInteger(): this {
        this.runCondition(() => Number.isInteger(this.value), `Value is not integer. Receive: ${this.value}`);
        return this;
    }

    public toBeFloat(): this {
        this.runCondition(() => !Number.isInteger(this.value), `Value is not float. Receive: ${this.value}`);
        return this;
    }

    public toBeNaN(): this {
        this.runCondition(() => this.value !== this.value, `Value is not NaN. Receive: ${this.value}`);
        return this;
    }

    public toBeLessThan(value: number): this {
        this.runCondition(() => this.value < value, `Value is grater. Expect: ${value}, but receive: ${this.value}`);
        return this;
    }

    public toBeLessThanOrEquals(value: number): this {
        this.runCondition(() => this.value <= value, `Value is grater. Expect: ${value}, but receive: ${this.value}`);
        return this;
    }

    public toBeGraterThan(value: number): this {
        this.runCondition(() => this.value > value, `Value is less. Expect: ${value}, but receive: ${this.value}`);
        return this;
    }

    public toBeGraterThanOrEquals(value: number): this {
        this.runCondition(() => this.value >= value, `Value is less. Expect: ${value}, but receive: ${this.value}`);
        return this;
    }

    public toHaveValueBetween(start: number, end: number): this {
        this.runCondition(
            () => start <= this.value && this.value <= end,
            `Value don't match. Exxpect: [${start}, ${end}], but receive: ${this.value}`
        );
        return this;
    }
}
