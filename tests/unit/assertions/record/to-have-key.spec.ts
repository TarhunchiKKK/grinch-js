import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

describe("RecordAssertion.toHaveKey()", () => {
    test("With Valid Data", () => {
        const values = [
            {
                value: {
                    name: faker.person.fullName(),
                    age: faker.number.int({ min: 1, max: 90 }),
                    gender: faker.person.gender()
                },
                key: "gender"
            }
        ];

        for (const { value, key } of values) {
            expect(() => assert.record(value).toHaveKey(key)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [
            {
                value: {
                    name: faker.person.fullName(),
                    age: faker.number.int({ min: 1, max: 90 })
                },
                key: "gener"
            }
        ];

        for (const { value, key } of values) {
            expect(() => assert.record(value).toHaveKey(key)).toThrow();
        }
    });
});
