import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;


export const toBeIntegerGenerator = {
    valid() {
        return  Array.from({ length: VALUES_COUNT }).map(() => faker.number.int());

    },
    invalid() {
        return  Array.from({ length: VALUES_COUNT }).map(() => faker.number.float());

    }
};