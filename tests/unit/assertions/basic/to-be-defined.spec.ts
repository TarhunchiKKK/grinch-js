import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

describe("BaseAssertion.toBeDefined()", () => {
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
            null,
            {},
            []
        ];

        for (const value of values) {
            expect(() => assert.basic(value).toBeDefined()).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [undefined];

        for (const value of values) {
            expect(() => assert.basic(value).toBeDefined()).toThrow();
        }
    });
});
