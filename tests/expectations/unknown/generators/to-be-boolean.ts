import { faker } from "@faker-js/faker";

export const toBeBooleanGenerator = {
    valid() {
        return [true, false];
    },
    invalid() {
        return [
            faker.string.alphanumeric(),
            faker.number.int(),
            faker.number.float(),
            faker.number.bigInt(),
            faker.date.anytime(),
            null,
            undefined,
            NaN,
            {},
            []
        ];
    }
};
