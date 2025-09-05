import { faker } from "@faker-js/faker";

export const toEqualsGenerator = {
    valid() {
        return [
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
    },
    invalid() {
        return [
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
    }
};