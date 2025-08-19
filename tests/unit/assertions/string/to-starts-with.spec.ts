import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const VALUES_COUNT = 10;
const STRING_LENGTH = 100;
const SUBSRT_MAX_LENGTH = 40;

describe("StringAssertion.toStartsWith()", () => {
    test("With Valid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.string.alphanumeric({ length: STRING_LENGTH });
            const substr = value.slice(0, faker.number.int({ min: 1, max: SUBSRT_MAX_LENGTH }));
            return { value, substr };
        });

        for (const { value, substr } of values) {
            expect(() => assert.string(value).toStartsWith(substr)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.string.alphanumeric({ length: STRING_LENGTH });
            const substr = faker.string.alphanumeric({ length: SUBSRT_MAX_LENGTH });
            return { value, substr };
        });

        for (const { value, substr } of values) {
            expect(() => assert.string(value).toStartsWith(substr)).toThrow();
        }
    });
});
