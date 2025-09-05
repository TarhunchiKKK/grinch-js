import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;

export const toBeUUIDGenerator = {
    valid() {
        return Array.from({ length: VALUES_COUNT }).map(() => faker.string.uuid());
    },
    invalid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            return [
                faker.string.alphanumeric({ length: 8 }),
                faker.string.alphanumeric({ length: 4 }),
                faker.string.alphanumeric({ length: 4 }),
                faker.string.alphanumeric({ length: 12 })
            ].join("-");
        });
    }
};
