import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const VALUES_COUNT = 10;

describe("NumberAssertion.toBeLessThanOrEquals()", () => {
    test("With Valid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.number.float({ min: -100, max: 100 });

            return {
                value,
                argument: value + faker.number.int({ min: 0, max: 1 })
            };
        });

        for (const { value, argument } of values) {
            expect(() => assert.number(value).toBeLessThanOrEquals(argument)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.number.float({ min: -100, max: 100 });

            return {
                value,
                argument: value - faker.number.int({ min: 1 })
            };
        });

        for (const { value, argument } of values) {
            console.log(value, argument);
            expect(() => assert.number(value).toBeLessThanOrEquals(argument)).toThrow();
        }
    });
});
