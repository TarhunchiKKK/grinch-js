import { faker } from "@faker-js/faker";


const VALUES_COUNT = 10;
const STRING_LENGTH = 100;

export const toBeNumericStringGenerator = {
    valid() {
        return Array.from({ length: VALUES_COUNT }).map(() => faker.string.numeric({ length: STRING_LENGTH }));
    },
    invalid() {
        return Array.from({ length: VALUES_COUNT }).map(() =>
            faker.string.alphanumeric({ length: STRING_LENGTH })
        );
    }
};