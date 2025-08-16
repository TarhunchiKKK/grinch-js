import { BaseAssertion } from "./base-assertion";

export class IterableAssertion<T extends string | unknown[]> extends BaseAssertion<T> {
    public toHaveLength(length: number): this {
        this.addCondition(() => this.value.length === length);
        return this;
    }

    public toBeShorterThan(length: number): this {
        this.addCondition(() => this.value.length < length);
        return this;
    }

    public toBeShorterThanOrEquals(length: number): this {
        this.addCondition(() => this.value.length <= length);
        return this;
    }

    public toBeLongerThan(length: number): this {
        this.addCondition(() => this.value.length > length);
        return this;
    }

    public toBeLongerThanOrEquals(length: number): this {
        this.addCondition(() => this.value.length >= length);
        return this;
    }

    public toHaveLengthBetween(start: number, end: number): this {
        this.addCondition(() => start <= this.value.length && this.value.length <= end);
        return this;
    }

    public toIncludes(item: unknown): this {
        this.addCondition(() => this.value.includes(item as string));
        return this;
    }

    public toHaveValueAtIndex(index: number, item: T): this {
        this.addCondition(() => this.value[index] === item);
        return this;
    }
}
