import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const ARRAY_LENGTH = 100;

const STRING_LENGTH = { min: 10, max: 100 };

type Value = unknown[];
type Comparator = (a: unknown, b: unknown) => number;

describe("ArrayAssertion.toBeSorted()", () => {
    test("With Valid Data", () => {
        const values = [
            {
                value: Array.from({ length: ARRAY_LENGTH })
                    .map(() => faker.string.alphanumeric({ length: STRING_LENGTH }))
                    .sort((a, b) => (a < b ? -1 : 1)),
                comparator: (a: string, b: string) => (a < b ? -1 : 1)
            },
            {
                value: Array.from({ length: ARRAY_LENGTH })
                    .map(() => faker.number.int())
                    .sort((a, b) => a - b),
                comparator: (a: number, b: number) => a - b
            }
        ];

        for (const { value, comparator } of values) {
            expect(() => assert.array(value as Value).toBeSorted(comparator as Comparator)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [
            {
                value: Array.from({ length: ARRAY_LENGTH }).map(() =>
                    faker.string.alphanumeric({ length: STRING_LENGTH })
                ),
                comparator: (a: string, b: string) => (a < b ? -1 : 1)
            },
            {
                value: Array.from({ length: ARRAY_LENGTH }).map(() => faker.number.int()),
                comparator: (a: number, b: number) => a - b
            }
        ];

        for (const { value, comparator } of values) {
            expect(() => assert.array(value as Value).toBeSorted(comparator as Comparator)).toThrow();
        }
    });
});
