import { toEqualsGenerator } from "./to-equals.generator";
import { toHaveKeyGenerator } from "./to-have-key.generator";
import { toHaveAllKeysGenerator } from "./to-have-all-keys.generator";
import { toHaveKeyWithValueGenerator } from "./to-have-key-with-value.generator";

export const recordAssertionGenerators = {
    toEquals: toEqualsGenerator,
    toHaveKey: toHaveKeyGenerator,
    toHaveAllKeys: toHaveAllKeysGenerator,
    toHaveKeyWithValue: toHaveKeyWithValueGenerator
};
