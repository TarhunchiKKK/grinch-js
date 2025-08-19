import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

describe("UnknownAssertion.toBeBoolean()", () => {
    test("With Valid Data", () => {
        const values = [true, false];

        for (const value of values) {
            expect(() => assert.unknown(value).toBeBoolean()).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [
            faker.string.alphanumeric(),
            faker.number.int(),
            faker.number.float(),
            faker.number.bigInt(),
            faker.date.anytime(),
            null,
            undefined,
            NaN,
            {},
            []
        ];

        for (const value of values) {
            expect(() => assert.unknown(value).toBeBoolean()).toThrow();
        }
    });
});
