import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const VALUES_COUNT = 10;
const STRING_LENGTH = { min: 10, max: 100 };

describe("StringAssertion.toHaveValueAtIndex()", () => {
    test("With Valid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.string.alphanumeric({ length: STRING_LENGTH });
            const index = faker.number.int({ min: 0, max: value.length - 1 });
            const item = value[index];
            return { value, index, item };
        });

        for (const { value, index, item } of values) {
            expect(() => assert.string(value).toHaveValueAtIndex(index, item)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = Array.from({ length: VALUES_COUNT })
            .map(() => {
                const value = faker.string.alphanumeric({ length: STRING_LENGTH });
                const index = faker.number.int({ min: 0, max: value.length - 1 });
                const item = faker.string.alphanumeric({ length: 1 });
                return { value, index, item };
            })
            .filter(({ value, index, item }) => value[index] !== item);

        for (const { value, index, item } of values) {
            expect(() => assert.string(value).toHaveValueAtIndex(index, item)).toThrow();
        }
    });
});
