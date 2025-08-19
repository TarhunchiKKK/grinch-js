import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const ARRAY_LENGTH = 10;
const STRING_LENGTH = { min: 10, max: 100 };

BigInt.prototype["toJSON"] = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

describe("UnknownAssertion.toEquals()", () => {
    test("With Valid Data", () => {
        const values = [
            faker.string.alphanumeric({ length: STRING_LENGTH }),
            faker.number.int(),
            BigInt(faker.string.numeric()),
            faker.datatype.boolean(),
            faker.date.anytime(),
            {
                name: faker.person.fullName(),
                age: faker.number.int({ min: 1, max: 90 }),
                address: {
                    country: faker.location.country(),
                    city: faker.location.city(),
                    street: faker.location.street()
                }
            },
            Array.from({ length: ARRAY_LENGTH }).map(() => ({
                name: faker.person.fullName(),
                age: faker.number.int({ min: 1, max: 90 }),
                address: {
                    country: faker.location.country(),
                    city: faker.location.city(),
                    street: faker.location.street()
                }
            })),
            null,
            undefined,
            NaN
        ];

        for (const value of values) {
            if (typeof value === "bigint") {
                console.log(JSON.stringify(value));
            }
            expect(() => assert.unknown(value).toEquals(value)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [
            {
                value1: faker.string.alphanumeric({ length: STRING_LENGTH }),
                value2: faker.string.alphanumeric({ length: STRING_LENGTH })
            },
            {
                value1: [
                    {
                        name: faker.person.fullName(),
                        age: faker.number.int({ min: 1, max: 90 }),
                        address: {
                            country: faker.location.country(),
                            city: faker.location.city(),
                            street: faker.location.street()
                        }
                    }
                ],
                value2: [
                    {
                        name: faker.person.fullName(),
                        age: faker.number.int({ min: 1, max: 90 }),
                        address: {
                            country: faker.location.country(),
                            city: faker.location.city(),
                            street: faker.location.street()
                        }
                    }
                ]
            },
            {
                value1: undefined,
                value2: null
            }
        ];

        for (const { value1, value2 } of values) {
            expect(() => assert.unknown(value1).toEquals(value2)).toThrow();
        }
    });
});
