import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const VALUES_COUNT = 10;
const ARRAY_LENGTH = { min: 10, max: 100 };

describe("ArrayAssertion.toHaveLength()", () => {
    test("With Valid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => {
            const length = faker.number.int(ARRAY_LENGTH);
            const value = faker.helpers.uniqueArray(faker.number.int, length);
            return { value, length };
        });

        for (const { value, length } of values) {
            expect(() => assert.array(value).toHaveLength(length)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = Array.from({ length: VALUES_COUNT })
            .map(() => {
                const length = faker.number.int(ARRAY_LENGTH);
                const value = faker.helpers.uniqueArray(faker.number.int, faker.number.int(ARRAY_LENGTH));
                return { value, length };
            })
            .filter(({ value, length }) => value.length !== length);

        for (const { value, length } of values) {
            expect(() => assert.array(value).toHaveLength(length)).toThrow();
        }
    });
});
