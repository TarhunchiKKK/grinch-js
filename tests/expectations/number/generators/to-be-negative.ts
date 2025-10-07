import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;

export const toBeNegativeGenerator = {
    valid() {
        return Array.from({ length: VALUES_COUNT }).map(() => -faker.number.int({ min: 1 }));
    },
    invalid() {
        return Array.from({ length: VALUES_COUNT }).map(() => faker.number.int());
    }
};
