import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const VALUES_COUNT = 10;

describe("NumberAssertion.toHaveValueBetween()", () => {
    test("With Valid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.number.int();

            return {
                value,
                start: value - faker.number.int({ min: 0, max: 1 }),
                end: value + faker.number.int({ min: 0, max: 1 })
            };
        });

        for (const { value, start, end } of values) {
            expect(() => assert.number(value).toHaveValueBetween(start, end)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => {
            let value = faker.number.int();
            const start = value - faker.number.int({ min: 1, max: 100 });
            const end = value + faker.number.int({ min: 0, max: 100 });

            value = faker.datatype.boolean() ? value + end : value - end;

            return {
                value,
                start,
                end
            };
        });

        for (const { value, start, end } of values) {
            expect(() => assert.number(value).toHaveValueBetween(start, end)).toThrow();
        }
    });
});
