import { faker } from "@faker-js/faker";

export const toBeEmptyGenerator = {
    valid() {
        return [undefined, null];
    },
    invalid() {
        return ["", 0, NaN, false, faker.number.int(), faker.string.alphanumeric(), {}, []];
    }
};
