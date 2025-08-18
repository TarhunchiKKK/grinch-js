import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const VALUES_COUNT = 10;
const STRING_LENGTH = 100;

describe("StringAssertion.toIncludes()", () => {
    test("With Valid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.string.alphanumeric({ length: STRING_LENGTH });
            const start = faker.number.int({ min: 0, max: value.length - STRING_LENGTH / 4 });
            const end = start + faker.number.int({ min: start + 1, max: value.length - 1 });
            return { value, substr: value.slice(start, end) };
        });

        for (const { value, substr } of values) {
            expect(() => assert.string(value).toIncludes(substr)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = Array.from({ length: VALUES_COUNT })
            .map(() => {
                const value = faker.string.alphanumeric({ length: STRING_LENGTH });
                const substr = faker.string.alphanumeric({ length: STRING_LENGTH / 4 });
                return { value, substr };
            })
            .filter(({ value, substr }) => !value.includes(substr));

        for (const { value, substr } of values) {
            expect(() => assert.string(value).toIncludes(substr)).toThrow();
        }
    });
});
