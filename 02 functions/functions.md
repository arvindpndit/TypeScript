# Functions in TypeScript

This readme provides code snippets and explanations for using functions in TypeScript. Functions are an essential part of any programming language, including TypeScript, and they allow you to encapsulate reusable blocks of code. TypeScript, being a superset of JavaScript, provides additional features to enhance function typing and readability.

## Table of Contents

1. [Introduction to Functions](#introduction-to-functions)
2. [Function Declarations](#function-declarations)
3. [Function Expressions](#function-expressions)
4. [Arrow Functions](#arrow-functions)
5. [Optional and Default Parameters](#optional-and-default-parameters)
6. [Rest Parameters](#rest-parameters)
7. [Function Overloading](#function-overloading)

## Introduction to Functions

A function in TypeScript is a block of code designed to perform a specific task or calculation. Functions help break down complex tasks into smaller, more manageable pieces, improving code organization and reusability.

In TypeScript, functions can have explicit type annotations for parameters and return types, allowing for better type safety and IDE support.

## Function Declarations

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

- The `function` keyword is used to declare a function.
- `greet` is the function name.
- `(name: string)` is the parameter list with type annotations.
- `: string` specifies the return type of the function.

## Function Expressions

```typescript
const multiply = function (a: number, b: number): number {
  return a * b;
};
```

- Function expressions create anonymous functions assigned to variables.
- `multiply` is a variable that holds the function.
- `(a: number, b: number)` defines the function's parameters with type annotations.
- `: number` specifies the return type of the function.

## Arrow Functions

```typescript
const divide = (a: number, b: number): number => a / b;
```

- Arrow functions provide a concise syntax for writing functions.
- `divide` is a variable holding the arrow function.
- `(a: number, b: number)` specifies the parameters with type annotations.
- `: number` indicates the return type of the function.
- `=>` is the arrow notation for defining functions.

## Optional and Default Parameters

```typescript
function greetPerson(name: string, age?: number): string {
  if (age) {
    return `Hello, ${name}! You are ${age} years old.`;
  } else {
    return `Hello, ${name}!`;
  }
}

function getDiscount(price: number, percentage: number = 10): number {
  return price * (percentage / 100);
}
```

- The `age?` parameter is optional, denoted by the `?` symbol.
- Optional parameters allow calling the function with or without providing that parameter.
- `percentage: number = 10` assigns a default value of 10 to the `percentage` parameter if it is not provided.

## Rest Parameters

```typescript
function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}
```

- Rest parameters denoted by `...` allow the function to accept an arbitrary number of arguments as an array.
- The `numbers: number[]` syntax indicates that `numbers` is an array of numbers.

## Function Overloading

```typescript
function getFullName(firstName: string, lastName: string): string;
function getFullName(
  firstName: string,
  middleName: string,
  lastName: string
): string;
function getFullName(...args: string[]): string {
  if (args.length === 2) {
    return `${args[0]} ${args[1]}`;
  } else if (args.length === 3) {
    return `${args[0]} ${args[1]} ${args[2]}`;
  }
  throw new Error("Invalid number of arguments.");
}
```

- Function overloading allows defining multiple function signatures for the same function name.
- The actual implementation is provided in the last function with the rest parameter `...args: string[]`.

These code snippets and explanations cover the essential aspects of using functions in TypeScript. Functions play a crucial role in structuring and organizing code, enabling code reusability and enhancing readability. TypeScript's strong typing system empowers developers to write more reliable and maintainable functions, leading to better software development practices.

For more advanced TypeScript concepts and features, please refer to the [official TypeScript documentation ](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
