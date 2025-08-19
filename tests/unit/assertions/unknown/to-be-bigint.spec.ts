import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const ARRAY_LENGTH = { min: 3, max: 100 };

describe("UnknownAssertion.toBeBigInt()", () => {
    test("With Valid Data", () => {
        const values = faker.helpers.uniqueArray(faker.number.bigInt, faker.number.int(ARRAY_LENGTH));

        for (const value of values) {
            expect(() => assert.unknown(value).toBeBigInt()).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [
            faker.string.alphanumeric(),
            faker.string.numeric(),
            faker.number.int(),
            faker.number.float(),
            faker.datatype.boolean(),
            faker.date.anytime(),
            null,
            undefined,
            NaN,
            {},
            []
        ];

        for (const value of values) {
            expect(() => assert.unknown(value).toBeBigInt()).toThrow();
        }
    });
});
