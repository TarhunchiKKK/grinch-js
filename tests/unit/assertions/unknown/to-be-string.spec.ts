import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const ARRAY_LENGTH = 10;
const STRING_LENGTH = { min: 10, max: 100 };

describe("UnknownAssertion.toBeString()", () => {
    test("With Valid Data", () => {
        const values = Array.from({ length: ARRAY_LENGTH }).map(() =>
            faker.string.alphanumeric({ length: STRING_LENGTH })
        );

        for (const value of values) {
            expect(() => assert.unknown(value).toBeString()).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [
            faker.number.int(),
            faker.number.float(),
            faker.number.bigInt(),
            faker.datatype.boolean(),
            faker.date.anytime(),
            null,
            undefined,
            NaN,
            {},
            []
        ];

        for (const value of values) {
            expect(() => assert.unknown(value).toBeString()).toThrow();
        }
    });
});
