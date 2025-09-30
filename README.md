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
- [Basic Usage](#basic-usage)
- [Features](#features)
  - [Grouping Tests](#grouping-tests)
    - [Scenario](#scenario)
    - [Parallel](#parallel)
    - [Serial](#serial)
    - [Sample](#sample)
  - [Lifecycle Hooks](#lifecycle-hooks)
  - [Reusable Tests](#reusable-tests)
    - [Reusable Tests Limitations](#reusable-tests-limitations)
  - [Skipping Tests](#skipping-tests)
  - [Reporting](#reporting)
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

1. Install Grinch with your package manager:

```bash
npm i --save-dev grinch

yarn add --dev grinch

pnpm i --save-dev grinch
```

2. Create entry file for your scenarios:

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

3. Add script to you `package.json`:

```json
{
    "scripts: {
        "test": "npx ts-node your-file.ts command_name",
    }
}
```

Or if you use JavaScript:

```json
{
    "scripts: {
        "test": "node your-file.js command_name",
    }
}
```

## Basic Usage

Let's imagine that we have the following task:

1. The user logs in to the system.
2. Authorized user creates a post.
3. Authorized user gets his own post.

Let's implement this scenario using Grinch.

First, let's import neccessary members:

```typescript
import { expect, scenario } from "grinch";
```

Now let's create a state for the senario:

```typescript
type State = {
    jwt: string;
    postId: string;
};

const state: State = {
    jwt: "",
    postId: ""
};
```

Now let's write tests for user login, post creating and post getting.

```typescript
import { api } from "./api";

export const PostCreationScenario = scenario("Create post", state, ({ test }) => {
    test.serial("should create post", ({ test }) => {
        // Login user and get JWT token
        test.sample("should login user", async ({ state }) => {
            // Extracting JWT token from api response
            const { jwt } = await api.signIn({
                email: "test@gmail.com",
                password: "Pa$$word"
            });

            // Validating JWT token
            expect.string(jwt).toBeDefined();
            
            // Saving JWT token to state
            state.jwt = jwt;
        });

        // Create post using JWT token
        test.sample("should create new post", async ({ state }) => {
            // Extracting post id from response
            const { id: postId } = await api.createPost({
                title: "New post",
                content: "Let's talk about...",
                // Adding JWT token to headers
                auth: state.jwt
            });

            // Validating post id
            expect.string(postId).toBeUUID();

            // Saving post id for further post getting
            state.postId = postId;
        });

        // Verify post creation
        test.sample("should find new post", async ({ state }) => {
            // Extracting post id from response
            const { id: postId } = await api.findPostById(state.postId);

            // Validating post id
            expect.string(postId).toBe(state.postId as string);
        });
    });
});
```

Now let's update our entry file:

```typescript
import { mapScenarios } from "grinch";
import { PostCreationScenario } from "./create-post.grinch.ts";

export default mapScenarios({
    posts: [PostCreationScenario]
});
```

Now you can run this command to test post creating:

```bash
npx ts-node your-file.ts posts
```

Grinch will search for command provided in CLI and run corresponding scenarios in parallel.

## Features

### Grouping Tests

When writing tests, Grinch saves them as a tree object, allowing you to group certain logic.

You can combine different ways to group tests.

#### Scenario

Scenario is a specific sequence of actions, allowing you to simulate the actions of a real user.

Each scenario can have a shared state that can be accessed by all child tests of that scenario. The state can be any value of the object type or null.

```typescript
import { scenario } from "grinch";

const state = {
    // Fields of your state
};

const SomeScenario = scenario("Scenario title", state, ({ test }) => {
    test.serial("TestInfo title", ({ test }) => {
        // Children tests
    });
});
```

It is assumed that the scenario contains within itself one root test, which is the parent for many other tests. If you declare several tests at the root of the scenario, they will all be executed **sequentially**.

#### Parallel

All tests declared in the root of the parallel test will be executed in parallel.

If one of the tests fails, the other tests will continue to run.

```typescript
test.parallel("TestInfo title", ({ test }) => {
    // Children tests
});
```

**Note**: _It is very dangerous to change the general state of the scenario in parallel tests. Be careful with this_.

#### Serial

All tests declared in the root of the serial test will be executed sequentially.

If one of the tests fails, the entire sequence will also fail.

```typescript
test.serial("TestInfo title", ({ test }) => {
    // Children tests
});
```

#### Sample

Sample test represents the leaf element of the scenario test tree. It can access the scenario state and perform various testing logic of your application.

This type of test cannot have child tests.

```typescript
// ...
test.sample("TestInfo title", async ({ state }) => {
    // Testing code
});
// ...
```

### Lifecycle Hooks

Grinch provides the ability to create `beforeEach` and `afterEach` hooks.

You can use this hooks in all types of test (excluding sample tests) and in reusable tests.

Example:

```typescript
test.parallel("TestInfo title", ({ test }) => {
    test.beforeEach(async () => {
        // Any logic here
    });

    // Other tests

    test.afterEach(async () => {
        // Any logic here
    });
});
```

There is no need to implement the `beforeAll` and `afterAll` hooks. These hooks can be implemented using a sequential test.

Example of the `beforeAll` and `afterAll` hooks implementation:

```typescript
test.serial("TestInfo title", ({ test }) => {
    test.sample("This test will run before all next tests", async () => {
        // Any logic
    });

    // Other tests

    test.sample("This test will run after all previous tests", async () => {
        // Any logic
    });
});
```

In the example above, the first test is the first in the sequence. Therefore, the behavior of this test will be similar to the behavior of the `beforeAll` hook. 

Similarly, the last test is the last in the sequence. Therefore, the behavior of this test will be similar to the behavior of the `afterAll` hook. 

### Reusable Tests

One of the key features of Grinch is reusable tests. This feature can greatly reduce the number of duplicates in the code.

Reusable tests also may accept parameters. This makes this feature even more flexible.

Let's create a simple scenario:

```typescript
import { scenario } from "./index";

type ScenarioState = {
    name: string;
    age: number;
    country: string;
};

scenario("Scenario title", state, ({ test }) => {
    test.serial("TestInfo title", ({ test }) => {
        // Here we will use reusable test
    });
});
```

Now let's create reusable test:

```typescript
import { reusableTest } from "./index";

type PartialState = {
    country: string;
};

const EditCountryTest = reusableTest<PartialState, string>(({ test, params }) => {
    test.sample("Edit country", ({ state }) => {
        state.country = params;
    });
});
```

You may also notice that our reusable test callback accept object with `params` field. This field contains a value that we will pass to our reusable test later.

All children tests will be executed serially (like with `test.serial()`).

Now let's reuse our test in scenario:

```typescript
import { reuseTest, scenario } from "./index";

type ScenarioState = {
    name: string;
    age: number;
    country: string;
};

scenario("Scenario title", state, ({ test }) => {
    test.serial("TestInfo title", ({ test }) => {
        // Here we are reusing EditContryTest
        EditCountryTest.apply("Edit country", test, "UK");
    });
});
```

Our reusable test now can get access to scenario state.

The last parameter of `EditCountryTest.use` will be passed to `params` field which we talked about above.

#### Reusable Tests Limitations

Note that the `PartialState` type is a supertype of `ScenarioState`.

**Only one condition is necessary to use the reusable tests:**

_The type of test being reused should be a supertype of the scenario state type._

This condition is necessary for type safety.

### Skipping Tests

Grinch provides the ability to skip tests, groups, and hooks. You can easily replace the names of missing methods with the methods you need. Methods for skipping tests:

Example:

```typescript
// Skipping sample test execution
test.skip.sample(/* ... */);

// Skipping group execution (children tests will not be executed)
test.skip.serial(/* ... */);
test.skip.parallel(/* ... */);

// Skipping hooks execution
test.skip.beforeEach(/* ... */);
test.skip.afterEach(/* ... */);
```

**Note**: _If you are skipping tests group execution (`serial` or `parallel`) all children tests will also be skipped_.

### Reporting

Сalling the `mapScenarios` function returns an array of objects of type:

```typescript
type TestResult = {
    title: string;
    result: "succeed" | "failed" | "error" | "not runed";
    children?: TestResult[];
};
```

You can implement your own result processing logic:

```typescript
import { mapScenarios, TestResult } from "grinch";

// Your custom function to process testing results
function processResults(results: TestResult[]) {
    // ...
}

const results = mapScenarios({
    // Here are your scenarios
});

// Results processing
results.then(processResults);
```

## Assertions

Grinch offers a number of built-in statements that have a chained interface.

All statements are created using the `expect` object.

### Basic Assertions

Basic assertion is a set of statements that are inherited by all other statements.

| Assertion          | Description                                                                        |
| ------------------ | ---------------------------------------------------------------------------------- |
| `toBe`             | Used to compare values using `===` operator                                        |
| `toBeDefined`      | Asserts that the value is not `undefined`                                          |
| `toBeNull`         | Asserts that the value is `null`                                                   |
| `tobeEmpty`        | Asserts that the value is `null` or `undefined`                                    |
| `toBeTruthy`       | Asserts that the value is truthy                                                   |
| `toBeFalsy`        | Asserts that the value is falsy (`""`, `0`, etc.)                                  |
| `toBeIn`           | Asserts that the value is present in the provided array                            |
| `toMatchZodSchema` | Asserts that the value matches the given <a href="https://zod.dev/">Zod</a> schema |
| `toSatisfy`        | Asserts that the value satisfies the provided condition function                   |

Usage:

```typescript
import { expect } from "grinch";

expect
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

Number assertion is a set of statements that were designed for numeric values (including `NaN`).

Number assertion also inherits the statements of the basic assertion.

| Assertion                | Description                                                            |
| ------------------------ | ---------------------------------------------------------------------- |
| `toBePositive`           | Asserts that the number is positive (greater than or equal to `0`)     |
| `toBeNegative`           | Asserts that the number is negative (less than `0`)                    |
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
import { expect } from "grinch";

expect
    .number(1)
    .toBePositive()
    .toBeLessThan(5)
    .toHaveValueBetween(0, 5)
    .toSatisfy(value => value > 0); // Statement from basic assertion
```

### String Assertions

String assertion is a set of statements that were designed for string values.

String assertion also inherits the statements of the basic assertion and iterable assertion.

| Assertion           | Description                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| `toBeUpperCase`     | Asserts that the string is in uppercase                                                        |
| `toBeLowerCase`     | Asserts that the string is in lowercase                                                        |
| `toStartsWith`      | Asserts that the string starts with the specified value                                        |
| `toEndsWith`        | Asserts that the string ends with the specified value                                          |
| `toBeNumericString` | Asserts that the string is a numeric string (contains only digits)                             |
| `toBeBooleanString` | Asserts that the string is either `"true"` or `"false"`                                        |
| `toMatchRegex`      | Asserts that the string matches the given regular expression                                   |
| `toBeJWT`           | Asserts that the string is a <a href="https://www.jwt.io/">JWT</a> (checks only string format) |
| `toBeUUID`          | Asserts that the string is a valid `uuid`                                                      |

Usage:

```typescript
import { expect } from "grinch";

expect
    .string("Alpha Centauri")
    .toStartsWith("Alpha")
    .toEndsWith("Centauri")
    .toBeTruthy()           // Statement from basic assertion
    .toBeLongerThan(5);     // Statement from iterable assertion
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
import { expect } from "grinch";

const person = {
    name: "Julia",
    age: 42
};

expect
    .record(person)
    .toBeDefined()          // Statement from basic assertion
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
import { expect } from "grinch";

const numbers = [1, 2, 3, 4, 5];

expect
    .array(numbers)
    .toBeDefined()          // Statement from basic assertion
    .toHaveLength(5)        // Statement from iterable assertion
    .toHaveEveryMatch(num => num > 0);
```

### Unknown Assertions

Unknown assertion is a set of statements that were designed for values of unknown type.

Unknown assertion also inherits the statements of the basic assertion.

| Assertion        | Description                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| `toEquals`       | Asserts that the value is deeply equal to the expected value (by using `JSON.stringify` method) |
| `toBeString`     | Asserts that the value is of type `string`                                                      |
| `toBeNuber`      | Asserts that the value is of type `number`                                                      |
| `toBeNan`        | Asserts that the value is `NaN` (Not a Number)                                                  |
| `toBeBoolean`    | Asserts that the value is of type `boolean`                                                     |
| `toBeObject`     | Asserts that the value is of type `object`                                                      |
| `toBeRecord`     | Asserts that the value is of type `object` (excluding `null` and arrays)                        |
| `toBeArray`      | Asserts that the value is an array                                                              |
| `toBeInstanceOf` | Asserts that the value is an instance of the specified class                                    |

Usage:

```typescript
import { expect } from "grinch";
import { unknownValue } from "./data.ts";

expect
    .unknown(unknownValue)
    .toBeDefined()          // Statement from basic assertion
    .toBeRecord();
```
