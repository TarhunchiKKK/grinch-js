import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

describe("RecordAssertion.toEquals()", () => {
    test("With Valid Data", () => {
        const values = [
            {
                name: faker.person.fullName(),
                age: faker.number.int({ min: 1, max: 90 }),
                address: {
                    country: faker.location.country(),
                    city: faker.location.city(),
                    street: faker.location.street()
                }
            }
        ];

        for (const value of values) {
            expect(() => assert.record(value).toEquals(value)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [
            {
                value1: {
                    name: faker.person.fullName(),
                    age: faker.number.int({ min: 1, max: 90 }),
                    address: {
                        country: faker.location.country(),
                        city: faker.location.city(),
                        street: faker.location.street()
                    }
                },
                value2: {
                    name: faker.person.fullName(),
                    age: faker.number.int({ min: 1, max: 90 }),
                    address: {
                        country: faker.location.country(),
                        city: faker.location.city(),
                        street: faker.location.street()
                    }
                }
            },
            {
                value1: {
                    name: "John",
                    address: {
                        city: "Toronto"
                    }
                },
                value2: {
                    name: "John",
                    address: {
                        city: "Ottawa"
                    }
                }
            }
        ];

        for (const { value1, value2 } of values) {
            expect(() => assert.record(value1).toEquals(value2)).toThrow();
        }
    });
});
