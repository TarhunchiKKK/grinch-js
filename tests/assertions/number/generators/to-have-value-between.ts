import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;

export const toHaveValueBetweenGenerator = {
    valid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.number.int();

            return {
                value,
                start: value - faker.number.int({ min: 0, max: 1 }),
                end: value + faker.number.int({ min: 0, max: 1 })
            };
        });
    },
    invalid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            let value = faker.number.int();
            const start = value - faker.number.int({ min: 1, max: 100 });
            const end = value + faker.number.int({ min: 0, max: 100 });

            value = faker.datatype.boolean() ? value + end : value - end;

            return {
                value,
                start,
                end
            };
        });
    }
};
