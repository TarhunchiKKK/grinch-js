import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;
const STRING_LENGTH = { min: 10, max: 100 };

export const toBeLongerThanOrEqualsGenerator = {
    valid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.string.alphanumeric({ length: STRING_LENGTH });
            const length = value.length - faker.number.int();
            return { value, length };
        });
    },
    invalid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.string.alphanumeric({ length: STRING_LENGTH });
            const length = value.length + faker.number.int({ min: 1 });
            return { value, length };
        });
    }
};
