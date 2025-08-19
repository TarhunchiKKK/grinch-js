import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const ARRAY_LENGTH = 10;

type Value = unknown[];
type Condition = (_: unknown) => boolean;

describe("ArrayAssertion.toHaveEveryMatch()", () => {
    test("With Valid Data", () => {
        const values = [
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
        ];

        for (const { value, condition } of values) {
            expect(() => assert.array(value as Value).toHaveEveryMatch(condition as Condition)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [
            {
                value: Array.from({ length: ARRAY_LENGTH }).map(() =>
                    faker.string.alphanumeric({ length: { min: 10, max: 100 }, casing: "upper" })
                ),
                condition: (value: string) => value !== value.toUpperCase()
            },
            {
                value: Array.from({ length: ARRAY_LENGTH }).map(() => faker.number.int({ min: 10 })),
                condition: (value: number) => value < 10
            }
        ];

        for (const { value, condition } of values) {
            expect(() => assert.array(value as Value).toHaveEveryMatch(condition as Condition)).toThrow();
        }
    });
});
