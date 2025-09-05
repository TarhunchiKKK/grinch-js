import { faker } from "@faker-js/faker";

type Value = unknown;
type Condition = (_: Value) => boolean;

export const toSatisfyGenerator = {
    valid() {
        const sentence = faker.lorem.sentence();
        return [
            {
                value: faker.number.int({ min: 1 }),
                condition: (v: number) => v > 0
            },
            {
                value: sentence,
                condition: (v: string) => v.length === sentence.length
            },
            {
                value: { name: faker.person.fullName(), age: faker.number.int({ min: 18 }) },
                condition: (v: { age: number }) => v.age >= 18
            },
            {
                value: [1, 2, 3],
                condition: (v: number[]) => v.includes(2)
            },
            {
                value: { user: { name: "test" } },
                condition: (v: any) => v.user?.name === "test"
            }
        ] as { value: Value; condition: Condition }[];
    },
    invalid() {
        const sentence = faker.lorem.sentence();
        return [
            {
                value: faker.number.int({ max: 0 }),
                condition: (v: number) => v > 0
            },
            {
                value: sentence,
                condition: (v: string) => v.length === sentence.length + 1
            },
            {
                value: { name: faker.person.fullName(), age: faker.number.int({ max: 17 }) },
                condition: (v: { age: number }) => v.age >= 18
            },
            {
                value: [1, 3, 4],
                condition: (v: number[]) => v.includes(2)
            },
            {
                value: { user: { name: "prod" } },
                condition: (v: any) => v.user?.name === "test"
            }
        ] as { value: Value; condition: Condition }[];
    }
};
