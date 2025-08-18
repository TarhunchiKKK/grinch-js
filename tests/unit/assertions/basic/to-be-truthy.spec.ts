import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

describe("BaseAssertion.toBeTruthy()", () => {
    test("With Valid Data", () => {
        const values = [
            faker.string.alphanumeric(),
            faker.number.float({ min: 0.1 }),
            faker.date.anytime(),
            true,
            {},
            []
        ];

        for (const value of values) {
            expect(() => assert.basic(value).toBeTruthy()).not.toThrow();
        }
    });

    test("With Valid Data", () => {
        const values = ["", 0, false, NaN, null, undefined];

        for (const value of values) {
            expect(() => assert.basic(value).toBeTruthy()).toThrow();
        }
    });
});
