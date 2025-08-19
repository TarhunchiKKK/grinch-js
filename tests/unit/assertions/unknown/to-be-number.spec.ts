import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const ARRAY_LENGTH = 10;

describe("UnknownAssertion.toBeNuber()", () => {
    test("With Valid Data", () => {
        const values = [
            ...Array.from({ length: ARRAY_LENGTH }).map(() => faker.number.int()),
            ...Array.from({ length: ARRAY_LENGTH }).map(() => faker.number.float()),
            NaN
        ];

        for (const value of values) {
            expect(() => assert.unknown(value).toBeNuber()).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [
            faker.string.alphanumeric(),
            faker.string.alpha(),
            faker.string.numeric(),
            faker.datatype.boolean(),
            faker.date.anytime(),
            null,
            undefined,
            {},
            []
        ];

        for (const value of values) {
            expect(() => assert.unknown(value).toBeNuber()).toThrow();
        }
    });
});
