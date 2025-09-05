import { faker } from "@faker-js/faker";

const VALUES_COUNT = 10;
const STRING_LENGTH = { min: 10, max: 100 };

export const toHaveLengthBetweenGenerator = {
    valid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            const value = faker.string.alphanumeric({ length: STRING_LENGTH });
            const start = faker.number.int({ min: 0, max: value.length });
            const end = faker.number.int({ min: value.length });
            return { value, start, end };
        });
    },
    invalid() {
        return Array.from({ length: VALUES_COUNT }).map(() => {
            let value = faker.string.alphanumeric({ length: STRING_LENGTH });
            const start = faker.number.int({ min: 0, max: value.length });
            const end = faker.number.int({ min: value.length, max: value.length + 100 });

            if (faker.datatype.boolean()) {
                value = faker.string.alphanumeric({
                    length: Math.max(start - faker.number.int({ min: 1, max: 100 }), 1)
                });
            } else {
                value = faker.string.alphanumeric({ length: end + faker.number.int({ min: 1, max: 100 }) });
            }

            return { value, start, end };
        });
    }
};