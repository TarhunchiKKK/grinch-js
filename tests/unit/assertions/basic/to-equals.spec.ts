import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import { assert } from "../../../../src";

const generateFullPerson = () => ({
    name: faker.person.fullName(),
    age: faker.number.int({ min: 1, max: 100 }),
    address: {
        country: faker.address.country(),
        city: faker.address.city(),
        street: faker.address.street(),
        home: faker.address.buildingNumber(),
        room: faker.number.int()
    },
    info: {
        gender: faker.person.gender(),
        bio: faker.person.bio(),
        job: {
            title: faker.person.jobTitle(),
            type: faker.person.jobType(),
            area: faker.person.jobArea()
        }
    }
});

const generateShortPerson = () => ({
    name: faker.person.fullName(),
    age: faker.number.int({ min: 1, max: 100 }),
    address: {
        country: faker.address.country(),
        city: faker.address.city(),
        streetAddress: faker.address.streetAddress()
    },
    info: {
        gender: faker.person.gender(),
        bio: faker.person.bio(),
        job: faker.person.jobTitle()
    }
});

describe("BaseAssertion.toEquals()", () => {
    test("With Valid Data", () => {
        const person = generateFullPerson();

        expect(() => assert.basic(person).toEquals(person)).not.toThrow();
    });

    test("With Valid Data", () => {
        const fullPerson = generateFullPerson();
        const shortPerson = generateShortPerson();

        expect(() => assert.basic(fullPerson).toEquals(shortPerson)).toThrow();
    });
});
