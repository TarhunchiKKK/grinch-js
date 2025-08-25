<p align="center">
  <a href="https://nestjs.com/" target="blank">
    <img src="./assets/logo.svg" width="140" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  A progressive <a href="https://nodejs.org" target="_blank">Node.js</a> library for writing efficient and flexible e2e test scenarios.
</p>

## Philosophy

In recent years, thanks to the development of web technologies, the Internet has become an information processing center, which has led to the emergence of such amazing projects, including <a href="https://nestjs.com/">NestJS</a>, <a href="https://fastapi.tiangolo.com/">FastAPI</a>, <a href="https://rubyonrails.org/">Ruby on Rails</a> and others. These tools increase developer productivity and allow you to create fast, testable, and extensible applications. These projects have many excellent libraries, helpers, and tools, but none of them effectively solves one of the most difficult and time-consuming problems of modern web testing.

Grinch aims to provide a ready-made foundation that allows you to effortlessly create user-friendly, fast, flexible and easily maintainable e2e scenarios. Grinch's coding style is largely inspired by the style of frontend frameworks, where various sections of code are grouped into a tree-like structure.

## Installation

### With CLI

Run this command:

```bash
npx grinch init
```

After running this command you can see some new files:

- _grinch.config.ts_ file in root of your project - configuration file
- _tests/main.grinch.ts_ - entry file for Grinch scenarios

### Manualy

1. Install Grinch with your package manager:

```bash
npm i --save-dev grinch

yarn add --dev grinch

pnpm i --save-dev grinch
```

2. Create _grinch.config.ts_ file in the root of your project:

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

| Field            | Description                                                         | Default              |
| ---------------- | ------------------------------------------------------------------- | -------------------- |
| entryFile        | The input file in which Grinch will search for scenarios to execute | tests/main.grinch.ts |
| reporter         | Defines how the results of the command execution will be displayed  | "console"            |
| resultsDirectory | Defines where Grinch will store the results of the test scenarios   | test-results         |

## Test Types

When writing tests, Grinch saves them as a tree object, allowing you to group certain logic.

You can combine different ways to group tests.

### Scenario

Scenario is a specific sequence of actions, allowing you to simulate the actions of a real user.

Each scenario can have a shared state that can be accessed by all child tests of that scenario. The state can be any value of the object type or null.

```typescript
import { scenarios } from "grinch";

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

## Reusable Tests

## Assertions

### Basic Assertions

### Iterable Values Assertions

### Number Assertions

### String Assertions

### Record Assertions

### Array Assertions

### Unknown Assertions
