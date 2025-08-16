import { deepCompare } from "../../../shared";
import { BaseAssertion } from "./base-assertion";

export class RecordAssertion extends BaseAssertion<Record<string, unknown>> {
    public toHaveKey(key: string): this {
        this.addCondition(() => !!this.value[key]);
        return this;
    }

    public toHaveAllKeys(keys: string[]): this {
        this.addCondition(() => {
            for (const key in this.value) {
                if (!keys.includes(key)) {
                    return false;
                }
            }
            return true;
        });
        return this;
    }

    public toHaveAnyOfKeys(keys: string[]): this {
        this.addCondition(() => {
            for (const key in this.value) {
                if (keys.includes(key)) {
                    return true;
                }
            }
            return false;
        });
        return this;
    }

    public toHaveKeyWithValue(key: string, value: unknown): this {
        this.addCondition(() => {
            if (!this.value[key]) {
                return false;
            }
            return deepCompare(this.value[key], value);
        });
        return this;
    }
}
