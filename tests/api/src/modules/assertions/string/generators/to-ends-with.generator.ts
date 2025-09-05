import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;
const STRING_LENGTH = 100;
const SUBSRT_MAX_LENGTH = 40;

export const toEndsWithGenerator = {
    valid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.string.alphanumeric({ length: STRING_LENGTH });
            const substr = value.slice(value.length - SUBSRT_MAX_LENGTH, value.length);
            return { value, substr };
        });
    },
    invalid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.string.alphanumeric({ length: STRING_LENGTH });
            const substr = faker.string.alphanumeric({ length: SUBSRT_MAX_LENGTH });
            return { value, substr };
        });
    }
};
