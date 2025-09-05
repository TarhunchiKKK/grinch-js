import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;

export const toBeFloatGenerator = {
    valid() {
        return Array.from({ length: VALUES_COUNT }).map(() => faker.number.float());
    },
    invalid() {
        return Array.from({ length: VALUES_COUNT }).map(() => faker.number.int());
    }
};
