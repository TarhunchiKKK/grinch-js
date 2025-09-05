import { faker } from "@faker-js/faker";

export const toBeNaNGenerator = {
    valid() {
        return [NaN];
    },
    invalid() {
        return  [faker.number.float(), faker.number.int(), 0];

    }
};