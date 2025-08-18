import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const VALUES_COUNT = 10;

describe("NumberAssertion.toBeInteger()", () => {
    test("With Valid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => faker.number.int());

        for (const value of values) {
            expect(() => assert.number(value).toBeInteger()).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => faker.number.float());

        for (const value of values) {
            expect(() => assert.number(value).toBeInteger()).toThrow();
        }
    });
});
