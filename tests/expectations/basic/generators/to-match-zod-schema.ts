import { faker } from "@faker-js/faker";
import { z } from "zod";

export const toMatchZodSchemaGenerator = {
    valid() {
        const userSchema = z.object({
            name: z.string(),
            age: z.number().positive(),
            email: z.string().email(),
            isSubscribed: z.boolean()
        });

        return [
            {
                schema: z.string(),
                value: faker.lorem.sentence()
            },
            {
                schema: z.number(),
                value: faker.number.int()
            },
            {
                schema: z.boolean(),
                value: faker.datatype.boolean()
            },
            {
                schema: z.array(z.string()),
                value: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]
            },
            {
                schema: userSchema,
                value: {
                    name: faker.person.fullName(),
                    age: faker.number.int({ min: 18, max: 99 }),
                    email: faker.internet.email(),
                    isSubscribed: faker.datatype.boolean()
                }
            }
        ];
    },
    invalid() {
        const userSchema = z.object({
            name: z.string(),
            age: z.number().positive(),
            email: z.string().email(),
            isSubscribed: z.boolean()
        });

        return [
            { schema: z.string(), value: faker.number.int() },
            { schema: z.number(), value: faker.lorem.word() },
            { schema: z.boolean(), value: "true" },
            {
                schema: z.array(z.string()),
                value: [faker.lorem.word(), faker.number.int(), faker.lorem.word()]
            },
            {
                schema: userSchema,
                value: {
                    name: faker.person.fullName(),
                    age: -10, // invalid age
                    email: faker.internet.email(),
                    isSubscribed: faker.datatype.boolean()
                }
            },
            {
                schema: userSchema,
                value: {
                    name: faker.person.fullName(),
                    age: faker.number.int({ min: 18, max: 99 }),
                    email: "not-an-email", // invalid email
                    isSubscribed: faker.datatype.boolean()
                }
            },
            {
                schema: userSchema,
                value: {
                    name: faker.person.fullName(),
                    // missing age
                    email: faker.internet.email(),
                    isSubscribed: faker.datatype.boolean()
                }
            }
        ];
    }
};
