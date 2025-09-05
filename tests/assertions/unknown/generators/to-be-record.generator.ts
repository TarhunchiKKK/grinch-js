import { faker } from "@faker-js/faker";

export const toBeRecordGenerator = {
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
            }
        ];
    },
    invalid() {
        return [
            faker.string.alphanumeric(),
            faker.number.int(),
            faker.number.float(),
            faker.number.bigInt(),
            faker.datatype.boolean(),
            null,
            undefined,
            NaN,
            []
        ];
    }
};