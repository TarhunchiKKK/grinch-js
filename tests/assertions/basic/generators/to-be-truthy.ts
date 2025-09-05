import { faker } from "@faker-js/faker";

export const toBeTruthyGenerator = {
    valid() {
        return [faker.string.alphanumeric(), faker.number.float({ min: 0.1 }), faker.date.anytime(), true, {}, []];
    },
    invalid() {
        return ["", 0, false, NaN, null, undefined];
    }
};
