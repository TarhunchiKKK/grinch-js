import { faker } from "@faker-js/faker";

const ARRAY_LENGTH = { min: 3, max: 100 };

export const toBeBigintGenerator = {
    valid() {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        return  faker.helpers.uniqueArray(faker.number.bigInt, faker.number.int(ARRAY_LENGTH));
    },
    invalid() {
        return  [
            faker.string.alphanumeric(),
            faker.string.numeric(),
            faker.number.int(),
            faker.number.float(),
            faker.datatype.boolean(),
            faker.date.anytime(),
            null,
            undefined,
            NaN,
            {},
            []
        ];
    }
};