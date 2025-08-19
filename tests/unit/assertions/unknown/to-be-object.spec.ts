import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

describe("UnknownAssertion.toBeObject()", () => {
    test("With Valid Data", () => {
        const values = [
            {},
            {
                name: faker.person.fullName(),
                age: faker.number.int({ min: 1, max: 90 }),
                address: {
                    country: faker.location.country(),
                    city: faker.location.city(),
                    street: faker.location.street()
                }
            },
            [],
            faker.date.anytime(),
            null
        ];

        for (const value of values) {
            expect(() => assert.unknown(value).toBeObject()).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [
            faker.string.alphanumeric(),
            faker.number.int(),
            faker.number.float(),
            faker.number.bigInt(),
            faker.datatype.boolean(),
            undefined,
            NaN
        ];

        for (const value of values) {
            expect(() => assert.unknown(value).toBeObject()).toThrow();
        }
    });
});
