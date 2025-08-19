import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const VALUES_COUNT = 10;
const ARRAY_LENGTH = { min: 10, max: 100 };

describe("ArrayAssertion.toHaveValueAtIndex()", () => {
    test("With Valid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.helpers.uniqueArray(faker.number.int, faker.number.int(ARRAY_LENGTH));
            const index = faker.number.int({ min: 0, max: value.length - 1 });
            const item = value[index];
            return { value, index, item };
        });

        for (const { value, index, item } of values) {
            expect(() => assert.array(value).toHaveValueAtIndex(index, item)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = Array.from({ length: VALUES_COUNT })
            .map(() => {
                const value = faker.helpers.uniqueArray(faker.number.int, faker.number.int(ARRAY_LENGTH));
                const index = faker.number.int({ min: 0, max: value.length - 1 });
                const item = faker.number.int();
                return { value, index, item };
            })
            .filter(({ value, index, item }) => value[index] !== item);

        for (const { value, index, item } of values) {
            expect(() => assert.array(value).toHaveValueAtIndex(index, item)).toThrow();
        }
    });
});
