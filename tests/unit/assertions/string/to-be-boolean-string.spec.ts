import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const VALUES_COUNT = 10;

describe("StringAssertion.toBeBooleanString()", () => {
    test("With Valid Data", () => {
        const values = ["true", "false"];

        for (const value of values) {
            expect(() => assert.string(value).toBeBooleanString()).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = Array.from({ length: VALUES_COUNT })
            .map(() => faker.string.alphanumeric({ length: { min: 5, max: 30 } }))
            .filter(value => value === "true" || value === "false");

        for (const value of values) {
            expect(() => assert.string(value).toBeBooleanString()).toThrow();
        }
    });
});
