<p align="center">
  <a href="https://nestjs.com/" target="blank">
    <img src="./assets/logo.svg" width="120" alt="Nest Logo" />
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

- <i>grinch.config.ts</i> file in root of your project - configuration file
- <i>tests/main.grinch.ts</i> - entry file for Grinch scenarios

### Manualy

1. Install Grinch with your package manager:

```bash
npm i --save-dev grinch

yarn add --dev grinch

pnpm i --save-dev grinch
```

2. Create <i>grinch.config.ts</i> file in the root of your project:

```typescript
import { defineConfig } from "grinch";

export default defineConfig({
    // Configuration properties
});
```

3. Create entry file for your scenarios:

```typescript
import { mapScenarios  } from "grinch

export default mapScenarios({
  "command_1": [
    // Scenarios for "command_1"
  ],
  "command_2": [
    // Scenarios for "command_2"
  ],
  // Other commands
});
```
