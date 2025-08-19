import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const VALUES_COUNT = 10;

describe("StringAssertion.toBeUUID()", () => {
    test("With Valid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => faker.string.uuid());

        for (const value of values) {
            expect(() => assert.string(value).toBeUUID()).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = Array.from({ length: VALUES_COUNT }).map(() => {
            return [
                faker.string.alphanumeric({ length: 8 }),
                faker.string.alphanumeric({ length: 4 }),
                faker.string.alphanumeric({ length: 4 }),
                faker.string.alphanumeric({ length: 12 })
            ].join("-");
        });

        for (const value of values) {
            expect(() => assert.string(value).toBeUUID()).toThrow();
        }
    });
});
