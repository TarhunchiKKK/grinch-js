import { faker } from "@faker-js/faker";

const ARRAY_LENGTH = 10;

export const toBeNumberGenerator = {
    valid() {
        return [
            ...Array.from({ length: ARRAY_LENGTH }).map(() => faker.number.int()),
            ...Array.from({ length: ARRAY_LENGTH }).map(() => faker.number.float()),
            NaN
        ];
    },
    invalid() {
        return [
            faker.string.alphanumeric(),
            faker.string.alpha(),
            faker.string.numeric(),
            faker.datatype.boolean(),
            faker.date.anytime(),
            null,
            undefined,
            {},
            []
        ];
    }
};
