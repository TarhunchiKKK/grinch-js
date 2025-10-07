import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;
const ARRAY_LENGTH = { min: 10, max: 100 };

export const toIncludesGenerator = {
    valid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.helpers.uniqueArray(faker.number.int, faker.number.int(ARRAY_LENGTH));
            const index = faker.number.int({ min: 0, max: value.length - 1 });
            return { value, item: value[index] };
        });
    },
    invalid() {
        return Array.from({ length: VALUES_COUNT })
            .map(() => {
                const value = faker.helpers.uniqueArray(faker.number.int, faker.number.int(ARRAY_LENGTH));
                const item = faker.number.int();
                return { value, item };
            })
            .filter(({ value, item }) => !value.includes(item));
    }
};
