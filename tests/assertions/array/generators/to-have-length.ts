import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;
const ARRAY_LENGTH = { min: 10, max: 100 };

export const toHaveLengthGenerator = {
    valid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            const length = faker.number.int(ARRAY_LENGTH);
            const value = faker.helpers.uniqueArray(faker.number.int, length);
            return { value, length };
        });
    },
    invaid() {
        return Array.from({ length: VALUES_COUNT })
            .map(() => {
                const length = faker.number.int(ARRAY_LENGTH);
                const value = faker.helpers.uniqueArray(faker.number.int, faker.number.int(ARRAY_LENGTH));
                return { value, length };
            })
            .filter(({ value, length }) => value.length !== length);
    }
};
