import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;
const STRING_LENGTH = { min: 10, max: 100 };

export const toHaveValueAtIndexGenerator = {
    valid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.string.alphanumeric({ length: STRING_LENGTH });
            const index = faker.number.int({ min: 0, max: value.length - 1 });
            const item = value[index];
            return { value, index, item };
        });
    },
    invalid() {
        return Array.from({ length: VALUES_COUNT })
            .map(() => {
                const value = faker.string.alphanumeric({ length: STRING_LENGTH });
                const index = faker.number.int({ min: 0, max: value.length - 1 });
                const item = faker.string.alphanumeric({ length: 1 });
                return { value, index, item };
            })
            .filter(({ value, index, item }) => value[index] !== item);
    }
};
