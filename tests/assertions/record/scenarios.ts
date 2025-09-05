import { assert, scenario } from "../../../src";
import { recordAssertionGenerators } from "./generators";

export const RecordAssertionScenario = scenario("RecordAssertion", null, ({ test }) => {
    test.parallel("assertions", ({ test }) => {
        test.serial("toEquals()", ({ test }) => {
            test.sample("valid", () => {
                const values = recordAssertionGenerators.toEquals.valid();

                for (const value of values) {
                    assert.record(value).toEquals(value);
                }
            });

            test.sample("invalid", () => {
                const values = recordAssertionGenerators.toEquals.invalid();

                for (const value of values) {
                    assert.record(value).not.toEquals(value);
                }
            });
        });

        test.serial("toHaveKey()", ({ test }) => {
            test.sample("valid", () => {
                const values = recordAssertionGenerators.toHaveKey.valid();

                for (const { value, key } of values) {
                    assert.record(value).toHaveKey(key);
                }
            });

            test.sample("invalid", () => {
                const values = recordAssertionGenerators.toHaveKey.invalid();

                for (const { value, key } of values) {
                    assert.record(value).not.toHaveKey(key);
                }
            });
        });

        test.serial("toHaveAllKeys()", ({ test }) => {
            test.sample("valid", () => {
                const values = recordAssertionGenerators.toHaveAllKeys.valid();

                for (const { value, keys } of values) {
                    assert.record(value).toHaveAllKeys(keys);
                }
            });

            test.sample("invalid", () => {
                const values = recordAssertionGenerators.toHaveAllKeys.invalid();

                for (const { value, keys } of values) {
                    assert.record(value).not.toHaveAllKeys(keys);
                }
            });
        });

        test.serial("toHaveKeyWithValue", ({ test }) => {
            test.sample("valid", () => {
                const values = recordAssertionGenerators.toHaveKeyWithValue.valid();

                for (const { value, keys } of values) {
                    for (const key of keys) {
                        assert.record(value).toHaveKeyWithValue(key, value[key]);
                    }
                }
            });

            test.sample("invalid", () => {
                const values = recordAssertionGenerators.toHaveKeyWithValue.invalid();

                for (const { record, keys } of values) {
                    for (const { key, value } of keys) {
                        assert.record(record).not.toHaveKeyWithValue(key, value);
                    }
                }
            });
        });
    });
});
