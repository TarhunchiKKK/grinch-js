import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

describe("NumberAssertion.toBeNaN()", () => {
    test("With Valid Data", () => {
        const values = [NaN];

        for (const value of values) {
            expect(() => assert.number(value).toBeNaN()).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [faker.number.float(), faker.number.int(), 0];

        for (const value of values) {
            expect(() => assert.number(value).toBeNaN()).toThrow();
        }
    });
});
