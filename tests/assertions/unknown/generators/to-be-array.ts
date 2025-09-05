import { faker } from "@faker-js/faker";

export const toBeArrayGenerator = {
    valid() {
        return [[]];
    },
    invalid() {
       return  [
            faker.string.alphanumeric(),
            faker.number.int(),
            faker.number.float(),
            faker.number.bigInt(),
            faker.date.anytime(),
            faker.datatype.boolean(),
            {},
            undefined,
            null,
            NaN
        ];
    }
};