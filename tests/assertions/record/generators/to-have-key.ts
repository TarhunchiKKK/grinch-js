import { faker } from "@faker-js/faker";

export const toHaveKeyGenerator = {
    valid() {
        return [
            {
                value: {
                    name: faker.person.fullName(),
                    age: faker.number.int({ min: 1, max: 90 }),
                    gender: faker.person.gender()
                },
                key: "gender"
            }
        ];
    },
    invalid() {
        return [
            {
                value: {
                    name: faker.person.fullName(),
                    age: faker.number.int({ min: 1, max: 90 })
                },
                key: "gener"
            }
        ];
    }
};
