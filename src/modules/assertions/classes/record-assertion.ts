import { deepCompare } from "../../../shared";
import { ZodSchema } from "../types/zod";
import { BaseAssertion } from "./base-assertion";

export class RecordAssertion extends BaseAssertion<Record<string, unknown>> {
    public toHaveKey(key: string): this {
        this.conditions.push(() => !!this.value[key]);
        return this;
    }

    public toHaveAllKeys(keys: string[]): this {
        this.conditions.push(() => {
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
        this.conditions.push(() => {
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
        this.conditions.push(() => {
            if (!this.value[key]) {
                return false;
            }
            return deepCompare(this.value[key], value);
        });
        return this;
    }

    public toMatchZodSchema(schema: ZodSchema): this {
        this.conditions.push(() => schema.safeParse(this.value).success);
        return this;
    }
}
