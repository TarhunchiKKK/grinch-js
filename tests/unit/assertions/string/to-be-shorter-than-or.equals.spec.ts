import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const VALUES_COUNT = 10;
const STRING_LENGTH = { min: 10, max: 100 };

describe("StringAssertion.toBeShorterThanOrEquals()", () => {
    test("With Valid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.string.alphanumeric({ length: STRING_LENGTH });
            const length = value.length + faker.number.int();
            return { value, length };
        });

        for (const { value, length } of values) {
            expect(() => assert.string(value).toBeShorterThanOrEquals(length)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.string.alphanumeric({ length: STRING_LENGTH });
            const length = value.length - faker.number.int({ min: 1 });
            return { value, length };
        });
        
        for (const { value, length } of values) {
            expect(() => assert.string(value).toBeShorterThanOrEquals(length)).toThrow();
        }
    });
});
