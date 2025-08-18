import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const VALUES_COUNT = 10;

const STRING_LENGTH = 10;

describe("StringAssertion.toBeLowerCase()", () => {
    test("With Valid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() =>
            faker.string.alphanumeric({ casing: "lower", length: STRING_LENGTH })
        );

        for (const value of values) {
            expect(() => assert.string(value).toBeLowerCase()).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = Array.from({ length: VALUES_COUNT })
            .map(() => faker.string.alphanumeric({ casing: "mixed", length: STRING_LENGTH }))
            .filter(value => value !== value.toLowerCase());

        for (const value of values) {
            expect(() => assert.string(value).toBeLowerCase()).toThrow();
        }
    });
});
