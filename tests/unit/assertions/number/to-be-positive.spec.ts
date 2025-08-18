import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const VALUES_COUNT = 10;

describe("NumberAssertion.toBePositive()", () => {
    test("With Valid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => faker.number.int({ min: 0 }));

        for (const value of values) {
            expect(() => assert.number(value).toBePositive()).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => -faker.number.int({ min: 1 }));

        console.log(values);

        for (const value of values) {
            expect(() => assert.number(value).toBePositive()).toThrow();
        }
    });
});
