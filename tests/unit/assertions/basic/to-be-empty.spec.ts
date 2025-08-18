import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

describe("BaseAssertion.toBeEmpty()", () => {
    test("With Valid Data", () => {
        const values = [undefined, null];

        for (const value of values) {
            expect(() => assert.basic(value).toBeEmpty()).not.toThrow();
        }
    });

    test("With Valid Data", () => {
        const values = ["", 0, NaN, false, faker.number.int(), faker.string.alphanumeric(), {}, []];

        for (const value of values) {
            expect(() => assert.basic(value).toBeEmpty()).toThrow();
        }
    });
});
