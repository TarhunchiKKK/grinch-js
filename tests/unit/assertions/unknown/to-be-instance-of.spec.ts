import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

class Person {
    private name = faker.person.fullName();

    protected age = faker.number.int();

    public gender = faker.person.gender();
}

describe("UnknownAssertion.toBeInstanceOf()", () => {
    test("With Valid Data", () => {
        const values = [
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

        for (const { value, className } of values) {
            expect(() => assert.unknown(value).toBeInstanceOf(className)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const data = {
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

        for (const value of data.values) {
            for (const className of data.classNames) {
                if (value instanceof className) {
                    continue;
                }

                expect(() => assert.unknown(value).toBeInstanceOf(className)).toThrow();
            }
        }
    });
});
