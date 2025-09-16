import { faker } from "@faker-js/faker";

const ARRAY_LENGTH = 10;
const STRING_LENGTH = { min: 10, max: 100 };

export const toEqualsGenerator = {
    valid() {
        return [
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
    },
    invalid() {
        return [
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
    }
};
