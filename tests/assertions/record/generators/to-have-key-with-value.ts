import { faker } from "@faker-js/faker";

export const toHaveKeyWithValueGenerator = {
    valid() {
        return [
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
    },
    invalid() {
        return [
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
    }
};
