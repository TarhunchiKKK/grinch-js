import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

type Value = unknown;
type Condition = (_: Value) => boolean;

describe("BaseAssertion.toSatisfy()", () => {
    test("With Valid Data", () => {
        const values = [
            {
                value: faker.number.int({ min: 20 }),
                condition: (value: number) => value >= 20
            },
            {
                value: faker.string.alphanumeric({ length: 20 }),
                condition: (value: string) => value.length >= 20
            },
            {
                value: true,
                condition: (value: boolean) => value
            },
            {
                value: Array.from({ length: 10 }).map(() => faker.string.alphanumeric()),
                condition: (value: string[]) => value.every(item => typeof item === "string")
            }
        ];

        for (const { value, condition } of values) {
            expect(() => assert.basic(value as Value).toSatisfy(condition as Condition)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [
            {
                value: faker.number.int({ min: 20 }),
                condition: (value: number) => value < 0
            },
            {
                value: faker.string.alphanumeric({ length: 20 }),
                condition: (value: string) => value.length <= 10
            },
            {
                value: true,
                condition: (value: boolean) => !value
            },
            {
                value: Array.from({ length: 10 }).map(() => faker.string.alphanumeric()),
                condition: (value: string[]) => value.every(item => typeof item !== "string")
            }
        ];

        for (const { value, condition } of values) {
            expect(() => assert.basic(value as Value).toSatisfy(condition as Condition)).toThrow();
        }
    });
});
