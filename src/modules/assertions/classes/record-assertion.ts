import { deepCompare } from "../../../shared";
import { BaseAssertion } from "./base-assertion";

export class RecordAssertion extends BaseAssertion<Record<string, unknown>> {
    public toEquals(value: unknown): this {
        this.runCondition(
            () => deepCompare(this.value, value),
            `Values are not equal. Expect: ${JSON.stringify(value)}, but receive: ${JSON.stringify(this.value)}`
        );
        return this;
    }

    public toHaveKey(key: string): this {
        this.runCondition(() => !!this.value[key], `Value don't have key '${key}'`);
        return this;
    }

    public toHaveAllKeys(keys: string[]): this {
        this.runCondition(() => {
            const valueKeys = Object.keys(this.value);

            for (const key of keys) {
                if (!valueKeys.includes(key)) {
                    return false;
                }
            }

            return true;
        }, "Value don't have all provided keys");
        return this;
    }

    public toHaveKeyWithValue(key: string, value: unknown): this {
        this.runCondition(
            () => {
                if (!this.value[key]) {
                    return false;
                }
                return deepCompare(this.value[key], value);
            },
            `Value don't have key '${key}' with value '${JSON.stringify(value)}'`
        );
        return this;
    }
}
