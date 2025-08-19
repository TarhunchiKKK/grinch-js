import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

describe("RecordAssertion.toHaveKeyWithValue()", () => {
    test("With Valid Data", () => {
        const values = [
            {
                value: {
                    name: faker.person.fullName(),
                    age: faker.number.int({ min: 1, max: 90 }),
                    address: {
                        country: faker.location.country(),
                        city: faker.location.city(),
                        street: faker.location.street()
                    }
                },
                keys: ["name", "address"]
            }
        ];

        for (const { value, keys } of values) {
            for (const key of keys) {
                expect(() => assert.record(value).toHaveKeyWithValue(key, value[key])).not.toThrow();
            }
        }
    });

    test("With Invalid Data", () => {
        const values = [
            {
                record: {
                    name: faker.person.fullName(),
                    age: faker.number.int({ min: 1, max: 90 }),
                    address: {
                        country: faker.location.country(),
                        city: faker.location.city(),
                        street: faker.location.street()
                    }
                },
                keys: [
                    {
                        key: "gender",
                        value: faker.person.gender()
                    },
                    {
                        key: "name",
                        value: faker.person.fullName()
                    },
                    {
                        key: "address",
                        value: {
                            country: faker.location.country(),
                            city: faker.location.city(),
                            street: faker.location.street()
                        }
                    }
                ]
            }
        ];

        for (const { record, keys } of values) {
            for (const { key, value } of keys) {
                expect(() => assert.record(record).toHaveKeyWithValue(key, value)).toThrow();
            }
        }
    });
});
