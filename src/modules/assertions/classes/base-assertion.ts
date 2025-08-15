const falsyValues = ["", 0, false, null, undefined, NaN];

type Condition<T> = (_: T) => boolean;

export class BaseAssertion<T> {
    protected conditions: Condition<T>[] = [];

    public constructor(protected readonly value: T) {}

    public toBe(value: unknown): this {
        this.conditions.push(() => this.value === value);
        return this;
    }

    public toBeTruthy(): this {
        this.conditions.push(() => !falsyValues.includes(this.value as null));
        return this;
    }

    public toBeFalsy(): this {
        this.conditions.push(() => falsyValues.includes(this.value as null));
        return this;
    }

    public toBeEmpty(): this {
        this.conditions.push(() => this.value === null || this.value === undefined);
        return this;
    }
}
