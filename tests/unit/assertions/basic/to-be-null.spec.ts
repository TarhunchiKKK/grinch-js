import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

describe("BaseAssertion.toBeNull()", () => {
    test("With Valid Data", () => {
        const values = [null];

        for (const value of values) {
            expect(() => assert.basic(value).toBeNull()).not.toThrow();
        }
    });

    test("With Valid Data", () => {
        const values = [
            faker.number.int(),
            faker.number.float(),
            faker.string.alphanumeric(),
            faker.string.alpha(),
            faker.string.numeric(),
            faker.date.anytime(),
            true,
            false,
            undefined,
            {},
            []
        ];

        for (const value of values) {
            expect(() => assert.basic(value).toBeNull()).toThrow();
        }
    });
});
