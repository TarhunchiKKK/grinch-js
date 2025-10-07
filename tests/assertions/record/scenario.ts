import { expect, scenario } from "../../../src";
import { recordAssertionGenerators } from "./generators";

export const RecordAssertionScenario = scenario("RecordAssertion", null, ({ test }) => {
    test.parallel("assertions", ({ test }) => {
        test.serial("toEquals()", ({ test }) => {
            test.case("valid", () => {
                const values = recordAssertionGenerators.toEquals.valid();

                for (const value of values) {
                    expect.record(value).toEquals(value);
                }
            });

            test.case("invalid", () => {
                const values = recordAssertionGenerators.toEquals.invalid();

                for (const value of values) {
                    expect.record(value).not.toEquals(value);
                }
            });
        });

        test.serial("toHaveKey()", ({ test }) => {
            test.case("valid", () => {
                const values = recordAssertionGenerators.toHaveKey.valid();

                for (const { value, key } of values) {
                    expect.record(value).toHaveKey(key);
                }
            });

            test.case("invalid", () => {
                const values = recordAssertionGenerators.toHaveKey.invalid();

                for (const { value, key } of values) {
                    expect.record(value).not.toHaveKey(key);
                }
            });
        });

        test.serial("toHaveAllKeys()", ({ test }) => {
            test.case("valid", () => {
                const values = recordAssertionGenerators.toHaveAllKeys.valid();

                for (const { value, keys } of values) {
                    expect.record(value).toHaveAllKeys(keys);
                }
            });

            test.case("invalid", () => {
                const values = recordAssertionGenerators.toHaveAllKeys.invalid();

                for (const { value, keys } of values) {
                    expect.record(value).not.toHaveAllKeys(keys);
                }
            });
        });

        test.serial("toHaveKeyWithValue", ({ test }) => {
            test.case("valid", () => {
                const values = recordAssertionGenerators.toHaveKeyWithValue.valid();

                for (const { value, keys } of values) {
                    for (const key of keys) {
                        expect.record(value).toHaveKeyWithValue(key, value[key]);
                    }
                }
            });

            test.case("invalid", () => {
                const values = recordAssertionGenerators.toHaveKeyWithValue.invalid();

                for (const { record, keys } of values) {
                    for (const { key, value } of keys) {
                        expect.record(record).not.toHaveKeyWithValue(key, value);
                    }
                }
            });
        });
    });
});
