import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;
const STRING_LENGTH = 10;

export const toBeLowerCaseGenerator = {
    valid() {
        return Array.from({ length: VALUES_COUNT }).map(() =>
            faker.string.alphanumeric({ casing: "lower", length: STRING_LENGTH })
        );
    },
    invalid() {
        return Array.from({ length: VALUES_COUNT })
            .map(() => faker.string.alphanumeric({ casing: "mixed", length: STRING_LENGTH }))
            .filter(value => value !== value.toLowerCase());
    }
};
