import { faker } from "@faker-js/faker";

export const toBeNaNGenerator = {
    valid() {
        return [NaN];
    },
    invalid() {
        return [
            faker.string.alphanumeric(),
            faker.number.int(),
            faker.number.float(),
            faker.number.bigInt(),
            faker.datatype.boolean(),
            faker.date.anytime(),
            null,
            undefined,
            {},
            []
        ];
    }
};
