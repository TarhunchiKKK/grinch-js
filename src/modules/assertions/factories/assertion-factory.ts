import { ArrayAssertion } from "../classes/array-assertion";
import { BaseAssertion } from "../classes/base-assertion";
import { NumberAssertion } from "../classes/number-assertion";
import { RecordAssertion } from "../classes/record-assertion";
import { StringAssertion } from "../classes/string-assertion";
import { UnknownAssertion } from "../classes/unknown-assertion";

export class AssertionFactory {
    public constructor() {}

    public basic<T = unknown>(value: T) {
        return new BaseAssertion<T>(value);
    }

    public string(value: string) {
        if (typeof value !== "string") {
            throw new Error(`Provided value is not string. Receive: ${JSON.stringify(value)}`);
        }

        return new StringAssertion(value);
    }

    public number(value: number) {
        if (typeof value !== "number") {
            throw new Error(`Provided value is not number. Receive: ${JSON.stringify(value)}`);
        }

        return new NumberAssertion(value);
    }

    public record(value: Record<string, unknown>) {
        if (typeof value !== "object" || value === null || Array.isArray(value)) {
            throw new Error(`Provided value is not record. Receive: ${JSON.stringify(value)}`);
        }

        return new RecordAssertion(value);
    }

    public array<T = unknown>(value: T[]) {
        if (!Array.isArray(value)) {
            throw Error(`Provided value is not array. Receive: ${JSON.stringify(value)}`);
        }

        return new ArrayAssertion(value);
    }

    public unknown(value: unknown) {
        return new UnknownAssertion(value);
    }
}
