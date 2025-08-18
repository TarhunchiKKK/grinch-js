import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../src";
import { FAKER_OPTIONS } from "../shared/constants";

describe("Basic Assertions", () => {
    test("toBe", () => {
        const validCases = [
            faker.number.int(FAKER_OPTIONS.INT),
            faker.number.float(FAKER_OPTIONS.FLOAT),
            faker.string.alpha(FAKER_OPTIONS.STRING),
            faker.string.alphanumeric(FAKER_OPTIONS.STRING),
            faker.string.numeric(FAKER_OPTIONS.STRING),
            faker.datatype.boolean(),
            faker.date.anytime()
        ];

        for (const value of validCases) {
            expect(() => assert.basic(value).toBe(value)).not.toThrow();
        }

        const invalidCases = [
            {
                value1: faker.number.int(FAKER_OPTIONS.INT),
                value2: faker.number.int(FAKER_OPTIONS.INT)
            },
            {
                value1: faker.number.float(FAKER_OPTIONS.FLOAT),
                value2: faker.number.float(FAKER_OPTIONS.FLOAT)
            },
            {
                value1: faker.string.alpha(FAKER_OPTIONS.STRING),
                value2: faker.string.alpha(FAKER_OPTIONS.STRING)
            },
            {
                value1: faker.string.alphanumeric(FAKER_OPTIONS.STRING),
                value2: faker.string.alphanumeric(FAKER_OPTIONS.STRING)
            },
            {
                value1: faker.string.numeric(FAKER_OPTIONS.STRING),
                value2: faker.string.numeric(FAKER_OPTIONS.STRING)
            },
            {
                value1: true,
                value2: false
            },
            {
                value1: faker.date.anytime(),
                value2: faker.date.anytime()
            }
        ];

        for (const { value1, value2 } of invalidCases) {
            expect(() => assert.basic(value1).toBe(value2)).toThrow();
        }
    });
});
