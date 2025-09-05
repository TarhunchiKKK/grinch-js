import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;
const ARRAY_LENGTH = { min: 10, max: 100 };

export const toBeShorterThanOrEqualsGenerator = {
    valid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.helpers.uniqueArray(faker.number.int, faker.number.int(ARRAY_LENGTH));
            const length = value.length + faker.number.int();
            return { value, length };
        });
    },
    invalid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.helpers.uniqueArray(faker.number.int, faker.number.int(ARRAY_LENGTH));
            const length = value.length - faker.number.int({ min: 1 });
            return { value, length };
        });
    }
};
