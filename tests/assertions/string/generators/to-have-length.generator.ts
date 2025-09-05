import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;

export const toHaveLengthGenerator = {
    valid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            const length = faker.number.int({ min: 5, max: 100 });
            const value = faker.string.alphanumeric({ length: length });
            return { value, length };
        });
    },
    invalid() {
        return Array.from({ length: VALUES_COUNT })
            .map(() => {
                const length = faker.number.int({ min: 5, max: 100 });
                const value = faker.string.alphanumeric({ length: { min: 5, max: 100 } });
                return { value, length };
            })
            .filter(({ value, length }) => value.length !== length);
    }
};
