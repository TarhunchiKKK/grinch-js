import { deepCompare } from "../../../shared";
import { BaseAssertion } from "./base-assertion";

export class RecordAssertion extends BaseAssertion<Record<string, unknown>> {
    public toHaveKey(key: string): this {
        this.runCondition(() => !!this.value[key], `Value don't have key '${key}'`);
        return this;
    }

    public toHaveAllKeys(keys: string[]): this {
        this.runCondition(() => {
            for (const key in this.value) {
                if (!keys.includes(key)) {
                    return false;
                }
            }
            return true;
        }, "Value don't all provided keys");
        return this;
    }

    public toHaveAnyOfKeys(keys: string[]): this {
        this.runCondition(() => {
            for (const key in this.value) {
                if (keys.includes(key)) {
                    return true;
                }
            }
            return false;
        }, "Value don't have any of provided keys");
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
