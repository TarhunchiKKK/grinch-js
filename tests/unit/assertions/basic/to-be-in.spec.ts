import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const ARRAY_LENGTH = 20;

const generateValue = <T>(initializer: () => T, valid: boolean) => {
    const items = Array.from({ length: ARRAY_LENGTH }).fill(null).map(initializer);

    let value: T;

    if (valid) {
        value = items[faker.number.int({ min: 0, max: items.length - 1 })];
    } else {
        value = initializer();
    }

    return { value, items };
};

describe("BaseAssertion.toBeIn()", () => {
    test("With Valid Data", () => {
        const values = [
            generateValue(() => faker.number.float(), true),
            generateValue(() => faker.string.alphanumeric(), true),
            generateValue(() => faker.date.anytime(), true),
            generateValue(() => ({ name: faker.person.fullName(), age: faker.number.int() }), true)
        ];

        for (const { value, items } of values) {
            expect(() => assert.basic(value).toBeIn(items)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [
            generateValue(() => faker.number.float(), false),
            generateValue(() => faker.string.alphanumeric(), false),
            generateValue(() => faker.date.anytime(), false)
            // generateValue(() => ({ name: faker.person.fullName(), age: faker.number.int() }), false)
        ];

        for (const { value, items } of values) {
            expect(() => assert.basic(value).toBeIn(items)).toThrow();
        }
    });
});
