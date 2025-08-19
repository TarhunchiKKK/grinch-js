import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

describe("RecordAssertion.toHaveAllKeys()", () => {
    test("With Valid Data", () => {
        const values = [
            {
                value: {
                    name: faker.person.fullName(),
                    age: faker.number.int({ min: 1, max: 90 }),
                    gender: faker.person.gender(),
                    country: faker.location.country(),
                    city: faker.location.city(),
                    street: faker.location.street()
                },
                keys: ["name", "city", "street"]
            }
        ];

        for (const { value, keys } of values) {
            expect(() => assert.record(value).toHaveAllKeys(keys)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [
            {
                value: {
                    name: faker.person.fullName(),
                    age: faker.number.int({ min: 1, max: 90 }),
                    gender: faker.person.gender(),
                    country: faker.location.country(),
                    city: faker.location.city(),
                    street: faker.location.street()
                },
                keys: ["name", "city", "job"]
            }
        ];

        for (const { value, keys } of values) {
            expect(() => assert.record(value).toHaveAllKeys(keys)).toThrow();
        }
    });
});
