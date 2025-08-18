import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";
import { FAKER_OPTIONS } from "../../shared/constants";

describe("BaseAssertion.toBeDefined()", () => {
    test("With Valid Data", () => {
        const values = [
            faker.number.int(),
            faker.number.float(),
            faker.string.alphanumeric(),
            faker.string.alpha(),
            faker.string.numeric(),
            faker.date.anytime(),
            true,
            false,
            null,
            {},
            []
        ];

        for (const value of values) {
            expect(() => assert.basic(value).toBeDefined).not.toThrow();
        }
    });

    test("With Valid Data", () => {
        expect(() => assert.basic(undefined).toBeDefined()).toThrow();
    });
});
