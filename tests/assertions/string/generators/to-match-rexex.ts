import { faker } from "@faker-js/faker";

const STRING_LENGTH = { length: { min: 10, max: 20 } };

export const toMatchRegexGenerator = {
    valid() {
        return [
            {
                value: `hello ${faker.lorem.word()}`,
                regexp: /hello/
            },
            {
                value: faker.string.numeric(5),
                regexp: /^\d+$/
            },
            {
                value: faker.internet.email(),
                regexp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            },
            {
                value: `${faker.string.alpha({ casing: "lower", length: 3 })}-${faker.string.numeric(3)}-${faker.string.alpha({ casing: "upper", length: 3 })}`,
                regexp: /[a-z]+-\d+-[A-Z]+/
            },
            {
                value: faker.helpers.arrayElement(["Case Insensitive", "case insensitive", "CASE INSENSITIVE"]),
                regexp: /case insensitive/i
            }
        ];
    },
    invalid() {
        return [
            {
                value: faker.string.alphanumeric(STRING_LENGTH),
                regexp: /^hello$/
            },
            {
                value: faker.string.alphanumeric(STRING_LENGTH),
                regexp: /^\d+$/
            },
            {
                value: faker.string.alphanumeric(STRING_LENGTH),
                regexp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            },
            {
                value: faker.string.alphanumeric(STRING_LENGTH),
                regexp: /case sensitive/
            }
        ];
    }
};
