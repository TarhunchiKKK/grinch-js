import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const VALUES_COUNT = 10;
const STRING_LENGTH = 100;

describe("StringAssertion.toBeNumericString()", () => {
    test("With Valid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => faker.string.numeric({ length: STRING_LENGTH }));

        for (const value of values) {
            expect(() => assert.string(value).toBeNumericString()).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() =>
            faker.string.alphanumeric({ length: STRING_LENGTH })
        );

        for (const value of values) {
            expect(() => assert.string(value).toBeNumericString()).toThrow();
        }
    });
});
