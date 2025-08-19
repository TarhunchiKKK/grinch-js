import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const VALUES_COUNT = 10;
const ARRAY_LENGTH = { min: 10, max: 100 };

describe("ArrayAssertion.toBeLongerThan()", () => {
    test("With Valid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.helpers.uniqueArray(faker.number.int, faker.number.int(ARRAY_LENGTH));
            const length = value.length - faker.number.int({ min: 1 });
            return { value, length };
        });

        for (const { value, length } of values) {
            expect(() => assert.array(value).toBeLongerThan(length)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.helpers.uniqueArray(faker.number.int, faker.number.int(ARRAY_LENGTH));
            const length = value.length + faker.number.int({ min: 0, max: 1 });
            return { value, length };
        });
        for (const { value, length } of values) {
            expect(() => assert.array(value).toBeLongerThan(length)).toThrow();
        }
    });
});
