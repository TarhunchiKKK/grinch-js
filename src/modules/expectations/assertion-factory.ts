import { ArrayExpectation } from "./classes/array-expectation";
import { BaseExpectation } from "./classes/base-expectation";
import { NumberExpectation } from "./classes/number-expectation";
import { RecordExpectation } from "./classes/record-expectation";
import { StringExpectation } from "./classes/string-expectation";
import { UnknownExpectation } from "./classes/unknown-expectation";

class ExpectationFactory {
    public basic<T = unknown>(value: T) {
        return new BaseExpectation<T>(value);
    }

    public string(value: string) {
        if (typeof value !== "string") {
            throw new Error(`Provided value is not string. Receive: ${JSON.stringify(value)}`);
        }

        return new StringExpectation(value);
    }

    public number(value: number) {
        if (typeof value !== "number") {
            throw new Error(`Provided value is not number. Receive: ${JSON.stringify(value)}`);
        }

        return new NumberExpectation(value);
    }

    public record(value: Record<string, unknown>) {
        if (typeof value !== "object" || value === null || Array.isArray(value)) {
            throw new Error(`Provided value is not record. Receive: ${JSON.stringify(value)}`);
        }

        return new RecordExpectation(value);
    }

    public array<T = unknown>(value: T[]) {
        if (!Array.isArray(value)) {
            throw Error(`Provided value is not array. Receive: ${JSON.stringify(value)}`);
        }

        return new ArrayExpectation(value);
    }

    public unknown(value: unknown) {
        return new UnknownExpectation(value);
    }
}

export const expect = new ExpectationFactory();
