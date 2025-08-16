import { ArrayAssertion } from "../classes/array-assertion";
import { BaseAssertion } from "../classes/base-assertion";
import { NumberAssertion } from "../classes/number-assertion";
import { RecordAssertion } from "../classes/record-assertion";
import { StringAssertion } from "../classes/string-assertion";
import { UnknownAssertion } from "../classes/unknown-assertion";

export class AssertionsFactory {
    public constructor() {}

    public basic(value: unknown) {
        return new BaseAssertion(value);
    }

    public string(value: string) {
        return new StringAssertion(value);
    }

    public number(value: number) {
        return new NumberAssertion(value);
    }

    public record(value: Record<string, unknown>) {
        return new RecordAssertion(value);
    }

    public array<T = unknown>(value: T[]) {
        return new ArrayAssertion(value);
    }

    public unknown(value: unknown) {
        return new UnknownAssertion(value);
    }
}
