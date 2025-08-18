import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const VALUES_COUNT = 10;

describe("StringAssertion.toHaveLength()", () => {
    test("With Valid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => {
            const length = faker.number.int({ min: 5, max: 100 });
            const value = faker.string.alphanumeric({ length: length });
            return { value, length };
        });

        for (const { value, length } of values) {
            expect(() => assert.string(value).toHaveLength(length)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = Array.from({ length: VALUES_COUNT })
            .map(() => {
                const length = faker.number.int({ min: 5, max: 100 });
                const value = faker.string.alphanumeric({ length: { min: 5, max: 100 } });
                return { value, length };
            })
            .filter(({ value, length }) => value.length !== length);

        for (const { value, length } of values) {
            expect(() => assert.string(value).toHaveLength(length)).toThrow();
        }
    });
});
