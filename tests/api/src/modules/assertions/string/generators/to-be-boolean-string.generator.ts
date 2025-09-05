import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;

export const toBeBooleanStringGenerator = {
    valid() {
        return ["true", "false"];
    },
    invalid() {
        return Array.from({ length: VALUES_COUNT })
            .map(() => faker.string.alphanumeric({ length: { min: 5, max: 30 } }))
            .filter(value => value === "true" || value === "false");
    }
};