import { faker } from "@faker-js/faker";

export const toHaveAllKeysGenerator = {
    valid() {
        return [
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
    },
    invalid() {
        return [
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

    }
};