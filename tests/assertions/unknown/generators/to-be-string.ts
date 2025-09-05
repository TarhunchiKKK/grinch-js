import { faker } from "@faker-js/faker";

const ARRAY_LENGTH = 10;
const STRING_LENGTH = { min: 10, max: 100 };

export const toBeStringGenerator = {
    valid() {
        return Array.from({ length: ARRAY_LENGTH }).map(() =>
            faker.string.alphanumeric({ length: STRING_LENGTH })
        );
    },
    invalid() {
        return [
            faker.number.int(),
            faker.number.float(),
            faker.number.bigInt(),
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