import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;

export const toBePositiveGenerator = {
    valid() {
        return Array.from({ length: VALUES_COUNT }).map(() => faker.number.int({ min: 0 }));
    },
    invalid() {
        return Array.from({ length: VALUES_COUNT }).map(() => -faker.number.int({ min: 1 }));
    }
};
