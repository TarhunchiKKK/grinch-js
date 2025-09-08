import { deepCompare } from "@shared/lib";
import { BaseAssertion } from "./base-assertion";

/**
 * Assertion class for Record objects.
 * Provides methods for asserting conditions on the keys and values of records.
 */
export class RecordAssertion extends BaseAssertion<Record<string, unknown>> {
    /**
     * Asserts that the record is deeply equal to the expected value.
     *
     * @param value The value to compare the record against.
     * @returns The current instance for chaining.
     */
    public toEquals(value: unknown): this {
        this.runCondition(
            () => deepCompare(this.value, value),
            `Values are not equal. Expect: ${JSON.stringify(value)}, but receive: ${JSON.stringify(this.value)}`
        );
        return this;
    }

    /**
     * Asserts that the record has the specified key.
     *
     * @param key The key to check for in the record.
     * @returns The current instance for chaining.
     */
    public toHaveKey(key: string): this {
        this.runCondition(() => !!this.value[key], `Value don't have key '${key}'`);
        return this;
    }

    /**
     * Asserts that the record has all of the specified keys.
     *
     * @param keys An array of strings representing the keys to check for.
     * @returns The current instance for chaining.
     */
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

    /**
     * Asserts that the record has the specified key with the specified value.
     *
     * @param key The key to check for in the record.
     * @param value The value expected for the specified key.
     * @returns The current instance for chaining.
     */
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
