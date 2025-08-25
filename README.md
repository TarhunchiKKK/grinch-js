<p align="center">
  <a href="https://nestjs.com/" target="blank">
    <img src="./assets/logo.svg" width="140" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  A progressive <a href="https://nodejs.org" target="_blank">Node.js</a> library for writing efficient and flexible e2e test scenarios.
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Philosophy](#philosophy)
- [Installation](#installation)
    - [With CLI](#with-cli)
    - [Manually](#manually)
- [Basic Usage](#basic-usage)
- [Configuration](#configuration)
- [Test Types](#test-types)
    - [Scenario](#scenario)
    - [Parallel](#parallel)
    - [Serial](#serial)
    - [Sample](#sample)
- [Lifecycle Hooks](#lifecycle-hooks)
- [Reusable Tests](#reusable-tests)
- [Assertions](#assertions)
    - [Basic Assertions](#basic-assertions)
    - [Iterable Values Assertions](#iterable-values-assertions)
    - [Number Assertions](#number-assertions)
    - [String Assertions](#string-assertions)
    - [Record Assertions](#record-assertions)
    - [Array Assertions](#array-assertions)
    - [Unknown Assertions](#unknown-assertions)

## Philosophy

In recent years, thanks to the development of web technologies, the Internet has become the "heart of information processing", which has led to the emergence of such amazing projects, including <a href="https://nestjs.com/">NestJS</a>, <a href="https://fastapi.tiangolo.com/">FastAPI</a>, <a href="https://rubyonrails.org/">Ruby on Rails</a> and others. These tools increase developer productivity and allow you to create fast, testable, and extensible applications. These projects have many excellent libraries, helpers, and tools, but none of them effectively solves one of the most difficult and time-consuming problems of modern web testing.

Grinch aims to provide a ready-made foundation that allows you to effortlessly create user-friendly, fast, flexible and easily maintainable e2e scenarios. Grinch's coding style is largely inspired by the style of frontend frameworks, where various sections of code are grouped into a tree-like structure.

## Installation

### With CLI

Run this command:

```bash
npx grinch init
```

After running this command you can see some new files:

- `grinch.config.ts` file in root of your project - configuration file
- `tests/main.grinch.ts` - entry file for Grinch scenarios

### Manually

1. Install Grinch with your package manager:

```bash
npm i --save-dev grinch

yarn add --dev grinch

pnpm i --save-dev grinch
```

2. Create `grinch.config.ts` file in the root of your project:

```typescript
import { defineConfig } from "grinch";

export default defineConfig({
    // Configuration properties
});
```

3. Create entry file for your scenarios:

```typescript
import { mapScenarios } from "grinch";

export default mapScenarios({
    command_1: [
        // Scenarios for "command_1"
    ],
    command_2: [
        // Scenarios for "command_2"
    ]
    // Other commands
});
```

## Basic Usage

## Configuration

The Grinch configuration has a minimal set of fields. All of them are not required.

| Field              | Description                                                         | Default                |
| ------------------ | ------------------------------------------------------------------- | ---------------------- |
| `entryFile`        | The input file in which Grinch will search for scenarios to execute | `tests/main.grinch.ts` |
| `reporter`         | Defines how the results of the command execution will be displayed  | `"console"`            |
| `resultsDirectory` | Defines where Grinch will store the results of the test scenarios   | `test-results`         |

## Test Types

When writing tests, Grinch saves them as a tree object, allowing you to group certain logic.

You can combine different ways to group tests.

### Scenario

Scenario is a specific sequence of actions, allowing you to simulate the actions of a real user.

Each scenario can have a shared state that can be accessed by all child tests of that scenario. The state can be any value of the object type or null.

```typescript
import { scenario } from "grinch";

const state = {
    // Fields of your state
};

const someScenario = scenario("Scenario title", state, ({ test }) => {
    test.serial("Test title", ({ test }) => {
        // Children tests
    });
});
```

It is assumed that the scenario contains within itself one root test, which is the parent for many other tests. If you declare several tests at the root of the scenario, they will all be executed **sequentially**.

### Parallel

All tests declared in the root of the parallel test will be executed in parallel.

```typescript
// ...
test.parallel("Test title", ({ test }) => {
    // Children tests
});
// ...
```

**Note**: _It is very dangerous to change the general state of the scenario in parallel tests. Be careful with this_.

### Serial

All tests declared in the root of the serial test will be executed sequentially.

```typescript
// ...
test.serial("Test title", ({ test }) => {
    // Children tests
});
// ...
```

### Sample

Sample test represents the leaf element of the scenario test tree. It can access the scenario state and perform various testing logic of your application.

This type of test cannot have child tests.

```typescript
// ...
test.sample("Test title", async ({ state }) => {
    // Testing code
});
// ...
```

## Lifecycle Hooks

Grinch provides the ability to create `beforeEach` and `afterEach` hooks.

You can use this hooks in all types of test groups (excluding sample tests) and in reusable tests.

Example:

```typescript
// ...
test.parallel("Test title", ({ test }) => {
    test.beforeEach(async () => {
        // Any logic here
    });

    // Children tests
});
// ...
```

There is no need to implement the `beforeAll` and `afterAll` hooks. These hooks can be implemented using a sequential test.

Example of the `beforeAll` hook implementation:

```typescript
// ...
test.serial("Test title", ({ test }) => {
    test.sample("This test will run before all next tests", async () => {
        // Any logic
    });

    // Children tests
});
// ...
```

In the example above, the test is the first in the sequence. Therefore, the behavior of this test will be similar to the behavior of the `beforeAll` hook. The `afterAll` hook can be implemented in a similar way.

## Reusable Tests

## Assertions

Grinch offers a number of built-in statements that have a chained interface.

All statements are created using the `assert` object.

### Basic Assertions

Basic assertion is a set of statements that are inherited by all other statements.

| Assertion          | Description                                                                        |
| ------------------ | ---------------------------------------------------------------------------------- |
| `toBe`             | Used to compare values using `===` operator                                        |
| `toBeDefined`      | Asserts that the value is not undefined                                            |
| `toBeNull`         | Asserts that the value is null                                                     |
| `tobeEmpty`        | Asserts that the value is null or undefined                                        |
| `toBeTruthy`       | Asserts that the value is truthy                                                   |
| `toBeFalsy`        | Asserts that the value is falsy (`""`, `0`, etc.)                                  |
| `toBeIn`           | Asserts that the value is present in the provided array                            |
| `toMatchZodSchema` | Asserts that the value matches the given <a href="https://zod.dev/">Zod</a> schema |
| `toSatisfy`        | Asserts that the value satisfies the provided condition function                   |

Usage:

```typescript
import { assert } from "grinch";

assert
    .basic(1)
    .toBe(1)
    .toBeTruthy()
    .toBeIn([1, 2, 3])
    .toSatisfy(value => value > 0);
```

### Iterable Values Assertions

Iterable values assertion is a set of statements that are inherited by values that represents iterable data structures (arrays and string).

!!! You cannot use these assertions directly, only through array and string assertions.

| Assertion                 | Description                                                                  |
| ------------------------- | ---------------------------------------------------------------------------- |
| `toHaveLength`            | Asserts that the iterable has the expected length                            |
| `toBeShorterThan`         | Asserts that the iterable is shorter than the specified length               |
| `toBeShorterThanOrEquals` | Asserts that the iterable is shorter than or equal to the specified length   |
| `toBeLongerThan`          | Asserts that the iterable is longer than the specified length                |
| `toBeLongerThanOrEquals`  | Asserts that the iterable is longer than or equal to the specified length    |
| `toHaveLengthBetween`     | Asserts that the iterable's length is within the specified range (inclusive) |
| `toIncludes`              | Asserts that the iterable includes the specified item                        |
| `toHaveValueAtIndex`      | Asserts that the iterable has the expected value at the specified index      |

### Number Assertions

Number assertion is a set of statements that were designed for numeric values (including NaN).

Number assertion also inherits the statements of the basic assertion.

| Assertion                | Description                                                            |
| ------------------------ | ---------------------------------------------------------------------- |
| `toBePositive`           | Asserts that the number is positive (greater than or equal to 0)       |
| `toBeNegative`           | Asserts that the number is negative (less than 0)                      |
| `toBeInteger`            | Asserts that the number is integer                                     |
| `toBeFloat`              | Asserts that the number is a floating-point number (not an integer)    |
| `toBeNaN`                | Asserts that the number is `NaN` (Not a Number)                        |
| `toBeLessThan`           | Asserts that the number is less than to provided value                 |
| `toBeLessThanOrEquals`   | Asserts that the number is less than or equal to provided value        |
| `toBeGraterThan`         | Asserts that the number is greater than to the provided value          |
| `toBeGraterThanOrEquals` | Asserts that the number is greater than or equal to the provided value |
| `toHaveValueBetween`     | Asserts that the number is within the specified range (inclusive)      |

Usage:

```typescript
import { assert } from "grinch";

assert
    .number(1)
    .toBePositive()
    .toBeLessThan(5)
    .toHaveValueBetween(0, 5)
    .toSatisfy(value => value > 0); // statement from basic assertion
```

### String Assertions

String assertion is a set of statements that were designed for string values.

String assertion also inherits the statements of the basic assertion and iterable assertion.

| Assertion           | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| `toBeUpperCase`     | Asserts that the string is in uppercase                            |
| `toBeLowerCase`     | Asserts that the string is in lowercase                            |
| `toStartsWith`      | Asserts that the string starts with the specified value            |
| `toEndsWith`        | Asserts that the string ends with the specified value              |
| `toBeNumericString` | Asserts that the string is a numeric string (contains only digits) |
| `toBeBooleanString` | Asserts that the string is either `"true"` or `"false"`            |
| `toMatchRegex`      | Asserts that the string matches the given regular expression       |
| `toBeUUID`          | Asserts that the string is a valid UUID                            |

Usage:

```typescript
import { assert } from "grinch";

assert
    .string("Alpha Centauri")
    .toStartsWith("Alpha")
    .toEndsWith("Centauri")
    .toBeTruthy() // statement from basic assertion
    .toBeLongerThan(5); // statement from iterable assertion
```

### Record Assertions

Record assertion is a set of statements that were designer for object values (satisfies Record<string, unknown> type).

Record assertion also inherits the statements of the basic assertion.

| Assertion            | Description                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------------------ |
| `toEquals`           | Asserts that the record is deeply equal to the expected value (by using `JSON.stringify` method) |
| `toHaveKey`          | Asserts that the record has the specified key                                                    |
| `toHaveAllKeys`      | Asserts that the record has all of the specified keys                                            |
| `toHaveKeyWithValue` | Asserts that the record has the specified key with the specified value                           |

Usage:

```typescript
import { assert } from "grinch";

const person = {
    name: "Julia",
    age: 42
};

assert
    .record(person)
    .toBeDefined() // statement from basic assertion
    .toHaveKey("name")
    .toHaveKeyWithValue("age", 42);
```

### Array Assertions

Array assertion is a set of statements that were designed for array values.

Array assertion also inherits the statements of the basic assertion and iterable assertion.

| Assertion          | Description                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------- |
| `toHaveEveryMatch` | Asserts that every element in the array satisfies the provided predicate function        |
| `toHaveSomeMatch`  | Asserts that at least one element in the array satisfies the provided predicate function |
| `toBeSorted`       | Asserts that the array is sorted according to the provided comparator function           |

Usage:

```typescript
import { assert } from "grinch";

const numbers = [1, 2, 3, 4, 5];

assert
    .array(number)
    .toBeDefined() // statement from basic assertion
    .toHaveLength(5) // statement from iterable assertion
    .toHaveEveryMatch(num => num > 0);
```

### Unknown Assertions

Unknown assertion is a set of statements that were designed for values of unknown type.

Unknown assertion also inherits the statements of the basic assertion.

| Assertion        | Description                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| `toEquals`       | Asserts that the value is deeply equal to the expected value (by using `JSON.stringify` method) |
| `toBeString`     | Asserts that the value is of type string                                                        |
| `toBeNuber`      | Asserts that the value is of type number                                                        |
| `toBeNan`        | Asserts that the value is NaN (Not a Number)                                                    |
| `toBeBoolean`    | Asserts that the value is of type boolean                                                       |
| `toBeBigInt`     | Asserts that the value is of type bigint                                                        |
| `toBeObject`     | Asserts that the value is of type object                                                        |
| `toBeRecord`     | Asserts that the value is of type object (excluding null and arrays)                            |
| `toBeArray`      | Asserts that the value is an array                                                              |
| `toBeInstanceOf` | Asserts that the value is an instance of the specified class                                    |

Usage:

```typescript
import { assert } from "grinch";
import { unknownValue } from "./data.ts

assert
    .unknown(unknownValue)
    .toBeDefined() // statement from basic assertion
    .toBeRecord();
```
