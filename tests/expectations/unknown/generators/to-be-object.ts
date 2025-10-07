import { faker } from "@faker-js/faker";

export const toBeObjectGenerator = {
    valid() {
        return [
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
    },
    invalid() {
        return [
            faker.string.alphanumeric(),
            faker.number.int(),
            faker.number.float(),
            faker.number.bigInt(),
            faker.datatype.boolean(),
            undefined,
            NaN
        ];
    }
};
