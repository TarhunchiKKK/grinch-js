import { faker } from "@faker-js/faker";

const ARRAY_LENGTH = 10;

type Value = unknown[];
type Condition = (_: unknown) => boolean;

export const toHaveSomeMatchGenerator = {
    valid() {
        return [
            {
                value: Array.from({ length: ARRAY_LENGTH }).map(() =>
                    faker.string.alphanumeric({ length: { min: 10, max: 100 }, casing: "upper" })
                ),
                condition: (value: string) => value === value.toUpperCase()
            },
            {
                value: Array.from({ length: ARRAY_LENGTH }).map(() => faker.number.int({ min: 10 })),
                condition: (value: number) => value >= 10
            }
        ] as { value: Value; condition: Condition }[];
    },
    invalid() {
        return [
            {
                value: Array.from({ length: ARRAY_LENGTH }).map(() =>
                    faker.string.alphanumeric({ length: { min: 10, max: 100 }, casing: "upper" })
                ),
                condition: (value: string) => value === value.toLowerCase()
            },
            {
                value: Array.from({ length: ARRAY_LENGTH }).map(() => faker.number.int({ min: 10 })),
                condition: (value: number) => value < 10
            }
        ] as { value: Value; condition: Condition }[];
    }
};
