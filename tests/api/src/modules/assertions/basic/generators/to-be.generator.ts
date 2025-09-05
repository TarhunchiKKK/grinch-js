import { faker } from "@faker-js/faker";
import { FAKER_OPTIONS } from "../basic-assertions.constants";

export const toBeGenerator = {
    valid() {
        return [
            faker.number.int(),
            faker.number.float(FAKER_OPTIONS.FLOAT),
            faker.string.alpha(FAKER_OPTIONS.STRING),
            faker.string.alphanumeric(FAKER_OPTIONS.STRING),
            faker.string.numeric(FAKER_OPTIONS.STRING),
            faker.datatype.boolean(),
            faker.date.anytime()
        ];
    },
    invalid() {
        return [
            {
                value1: faker.number.int(FAKER_OPTIONS.INT),
                value2: faker.number.int(FAKER_OPTIONS.INT)
            },
            {
                value1: faker.number.float(FAKER_OPTIONS.FLOAT),
                value2: faker.number.float(FAKER_OPTIONS.FLOAT)
            },
            {
                value1: faker.string.alpha(FAKER_OPTIONS.STRING),
                value2: faker.string.alpha(FAKER_OPTIONS.STRING)
            },
            {
                value1: faker.string.alphanumeric(FAKER_OPTIONS.STRING),
                value2: faker.string.alphanumeric(FAKER_OPTIONS.STRING)
            },
            {
                value1: faker.string.numeric(FAKER_OPTIONS.STRING),
                value2: faker.string.numeric(FAKER_OPTIONS.STRING)
            },
            {
                value1: true,
                value2: false
            },
            {
                value1: faker.date.anytime(),
                value2: faker.date.anytime()
            }
        ];
    }
};
