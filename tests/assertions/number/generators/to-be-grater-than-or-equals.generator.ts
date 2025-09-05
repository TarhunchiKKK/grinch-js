import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;

export const toBeGraterThanOrEqualsGenerator = {
    valid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.number.float({ min: -100, max: 100 });

            return {
                value,
                argument: value - faker.number.int()
            };
        });
    },
    invalid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.number.float({ min: -100, max: 100 });

            return {
                value,
                argument: value + faker.number.int({ min: 1 })
            };
        });
    }
};
