import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;
const STRING_LENGTH = 100;

export const toIncludesGenerator = {
    valid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.string.alphanumeric({ length: STRING_LENGTH });
            const start = faker.number.int({ min: 0, max: value.length - STRING_LENGTH / 4 });
            const end = start + faker.number.int({ min: start + 1, max: value.length - 1 });
            return { value, substr: value.slice(start, end) };
        });
    },
    invalid() {
        return Array.from({ length: VALUES_COUNT })
            .map(() => {
                const value = faker.string.alphanumeric({ length: STRING_LENGTH });
                const substr = faker.string.alphanumeric({ length: STRING_LENGTH / 4 });
                return { value, substr };
            })
            .filter(({ value, substr }) => !value.includes(substr));
    }
};
