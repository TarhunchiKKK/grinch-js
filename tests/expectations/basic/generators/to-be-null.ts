import { faker } from "@faker-js/faker";

export const toBeNullGenerator = {
    valid() {
        return [null];
    },
    invalid() {
        return [
            faker.number.int(),
            faker.number.float(),
            faker.string.alphanumeric(),
            faker.string.alpha(),
            faker.string.numeric(),
            faker.date.anytime(),
            true,
            false,
            undefined,
            {},
            []
        ];
    }
};
