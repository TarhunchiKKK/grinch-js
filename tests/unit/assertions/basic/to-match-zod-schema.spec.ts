import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";
import { z } from "zod";

describe("BaseAssertion.toMatchZodSchema()", () => {
    test("With Valid Data", () => {
        const values = [
            {
                value: {
                    name: faker.person.fullName(),
                    age: faker.number.int(),
                    address: {
                        country: faker.address.country(),
                        city: faker.address.city()
                    }
                },
                schema: z.object({
                    name: z.string(),
                    age: z.int(),
                    address: z.object({
                        country: z.string(),
                        city: z.string()
                    })
                })
            }
        ];

        for (const { value, schema } of values) {
            expect(() => assert.basic(value).toMatchZodSchema(schema)).not.toThrow();
        }
    });

    test("With Invalid Data", () => {
        const values = [
            {
                value: {
                    name: faker.person.fullName(),
                    age: faker.number.int(),
                    address: {
                        country: faker.address.country(),
                        street: faker.address.street()
                    }
                },
                schema: z.object({
                    name: z.string(),
                    age: z.int(),
                    address: z.object({
                        country: z.string(),
                        city: z.string()
                    })
                })
            }
        ];

        for (const { value, schema } of values) {
            expect(() => assert.basic(value).toMatchZodSchema(schema)).toThrow();
        }
    });
});
