# Project Setup Guide

Follow these steps to set up and run the project:

## Install Dependencies

To install the necessary dependencies for the project, run the following command:

```bash
npm install typescript jest ts-jest @types/jest --save-dev
```

s
This command will install:

- `typescript`: A language for application-scale JavaScript.
- `jest`: A delightful JavaScript testing framework.
- `ts-jest`: A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.
- `@types/jest`: TypeScript type definitions for Jest.

## Compile Code

To compile the TypeScript code into JavaScript, use the following command:

```bash
npx tsc
```

This command will use the TypeScript compiler (`tsc`) to transpile your TypeScript files according to the configuration in your `tsconfig.json` file.

## Run Tests

To run the tests for the project, execute the following command:

```bash
npm test
```

This command will run all the test cases defined in your project using Jest.

By following these steps, you will be able to set up, compile, and test the project successfully.
