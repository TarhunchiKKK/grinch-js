import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

describe("UnknownAssertion.toBeArray()", () => {
    test("With Valid Data", () => {
        const values = [[]];

        for (const value of values) {
            expect(() => assert.unknown(value).toBeArray()).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [
            faker.string.alphanumeric(),
            faker.number.int(),
            faker.number.float(),
            faker.number.bigInt(),
            faker.date.anytime(),
            faker.datatype.boolean(),
            {},
            undefined,
            null,
            NaN
        ];

        for (const value of values) {
            expect(() => assert.unknown(value).toBeArray()).toThrow();
        }
    });
});
