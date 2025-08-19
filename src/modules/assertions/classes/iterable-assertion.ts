import { ElementType } from "../../../shared";
import { BaseAssertion } from "./base-assertion";

export class IterableAssertion<T extends string | unknown[]> extends BaseAssertion<T> {
    public toHaveLength(length: number): this {
        this.runCondition(
            () => this.value.length === length,
            `The lengths don't match. Expect: ${length}, but receive ${this.value.length}`
        );
        return this;
    }

    public toBeShorterThan(length: number): this {
        this.runCondition(
            () => this.value.length < length,
            `Length is grater. Expect: ${length}, but receive: ${this.value.length}`
        );
        return this;
    }

    public toBeShorterThanOrEquals(length: number): this {
        this.runCondition(
            () => this.value.length <= length,
            `Length is grater. Expect: ${length}, but receive: ${this.value.length}`
        );
        return this;
    }

    public toBeLongerThan(length: number): this {
        this.runCondition(
            () => this.value.length > length,
            `Length is less. Expect: ${length}, but receive: ${this.value.length}`
        );
        return this;
    }

    public toBeLongerThanOrEquals(length: number): this {
        this.runCondition(
            () => this.value.length >= length,
            `Length is less. Expect: ${length}, but receive: ${this.value.length}`
        );
        return this;
    }

    public toHaveLengthBetween(start: number, end: number): this {
        this.runCondition(
            () => start <= this.value.length && this.value.length <= end,
            `Length don't match. Expect [${start}, [${end}], but receive: ${this.value.length} `
        );
        return this;
    }

    public toIncludes(item: T extends string ? string : ElementType<T>): this {
        this.runCondition(() => this.value.includes(item as string), `Value don't include ${JSON.stringify(item)}`);
        return this;
    }

    public toHaveValueAtIndex(index: number, item: T extends string ? string : ElementType<T>): this {
        this.runCondition(
            () => this.value[index] === item,
            `Value don't have such value at index ${index}. Expect: ${JSON.stringify(item)}, but receive: ${JSON.stringify(this.value[index])}`
        );
        return this;
    }
}
