import { faker } from "@faker-js/faker";

export const toBeDefinedGenerator = {
    valid() {
        return [
            faker.number.int(),
            faker.number.float(),
            faker.string.alphanumeric(),
            faker.string.alpha(),
            faker.string.numeric(),
            faker.date.anytime(),
            true,
            false,
            null,
            {},
            []
        ];
    },
    invalid() {
        return [undefined];
    }
};
