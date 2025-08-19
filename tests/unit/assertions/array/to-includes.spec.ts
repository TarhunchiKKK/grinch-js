import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const VALUES_COUNT = 10;
const ARRAY_LENGTH = { min: 10, max: 100 };

describe("ArrayAssertion.toIncludes()", () => {
    test("With Valid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.helpers.uniqueArray(faker.number.int, faker.number.int(ARRAY_LENGTH));
            const index = faker.number.int({ min: 0, max: value.length - 1 });
            return { value, item: value[index] };
        });

        for (const { value, item } of values) {
            expect(() => assert.array(value).toIncludes(item)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = Array.from({ length: VALUES_COUNT })
            .map(() => {
                const value = faker.helpers.uniqueArray(faker.number.int, faker.number.int(ARRAY_LENGTH));
                const item = faker.number.int();
                return { value, item };
            })
            .filter(({ value, item }) => !value.includes(item));

        for (const { value, item } of values) {
            expect(() => assert.array(value).toIncludes(item)).toThrow();
        }
    });
});
