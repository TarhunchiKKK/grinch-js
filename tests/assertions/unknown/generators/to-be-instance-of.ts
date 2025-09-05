import { faker } from "@faker-js/faker";

class Person {
    private name = faker.person.fullName();

    protected age = faker.number.int();

    public gender = faker.person.gender();
}

export const toBeInstanceOfGenerator = {
    valid() {
        return [
            {
                value: faker.date.anytime(),
                className: Date
            },
            {
                value: {},
                className: Object
            },
            {
                value: [],
                className: Array
            },
            {
                value: new Person(),
                className: Person
            }
        ];
    },
    invalid() {
        return {
            values: [
                faker.string.alphanumeric(),
                faker.number.int(),
                faker.datatype.boolean(),
                faker.date.anytime(),
                {},
                [],
                new Person()
            ],
            classNames: [String, Number, Boolean, Date, Object, Array, Person]
        };
    }
};