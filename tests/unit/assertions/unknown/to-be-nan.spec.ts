import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

describe("UnknownAssertion.toBeNan()", () => {
    test("With Valid Data", () => {
        const values = [NaN];

        for (const value of values) {
            expect(() => assert.unknown(value).toBeNan()).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [
            faker.string.alphanumeric(),
            faker.number.int(),
            faker.number.float(),
            faker.number.bigInt(),
            faker.datatype.boolean(),
            faker.date.anytime(),
            null,
            undefined,
            {},
            []
        ];

        for (const value of values) {
            expect(() => assert.unknown(value).toBeNan()).toThrow();
        }
    });
});
