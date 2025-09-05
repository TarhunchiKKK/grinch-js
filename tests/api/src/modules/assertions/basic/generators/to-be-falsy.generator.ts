import { faker } from "@faker-js/faker";

export const toBeFalsyGenerator = {
    valid() {
        return ["", 0, false, NaN, null, undefined];
    },
    invalid() {
        return [faker.string.alphanumeric(), faker.number.float({ min: 0.1 }), faker.date.anytime(), true, {}, []];
    }
};
