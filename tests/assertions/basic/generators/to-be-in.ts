import { faker } from "@faker-js/faker";

const ARRAY_LENGTH = 20;

const generateValue = <T>(initializer: () => T, valid: boolean) => {
    const items = Array.from({ length: ARRAY_LENGTH }).map(initializer);

    let value: T;

    if (valid) {
        value = items[faker.number.int({ min: 0, max: items.length - 1 })];
    } else {
        value = initializer();
    }

    return { value, items };
};

export const toBeInGenerator = {
    valid() {
        return [
            generateValue(() => faker.number.float(), true),
            generateValue(() => faker.string.alphanumeric(), true),
            generateValue(() => faker.date.anytime(), true),
            generateValue(() => ({ name: faker.person.fullName(), age: faker.number.int() }), true)
        ];
    },
    invalid() {
        return [
            generateValue(() => faker.number.float(), false),
            generateValue(() => faker.string.alphanumeric(), false),
            generateValue(() => faker.date.anytime(), false),
            generateValue(() => ({ name: faker.person.fullName(), age: faker.number.int() }), false)
        ].filter(({ value, items }) => items.includes(value as never));
    }
};
