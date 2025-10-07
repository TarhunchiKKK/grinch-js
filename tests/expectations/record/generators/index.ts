import { toEqualsGenerator } from "./to-equals";
import { toHaveKeyGenerator } from "./to-have-key";
import { toHaveAllKeysGenerator } from "./to-have-all-keys";
import { toHaveKeyWithValueGenerator } from "./to-have-key-with-value";

export const recordExpectationGenerators = {
    toEquals: toEqualsGenerator,
    toHaveKey: toHaveKeyGenerator,
    toHaveAllKeys: toHaveAllKeysGenerator,
    toHaveKeyWithValue: toHaveKeyWithValueGenerator
};
