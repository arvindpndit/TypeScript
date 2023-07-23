# Union Types in TypeScript

This readme provides code snippets and explanations for using union types in TypeScript. Union types allow you to express that a value can be of multiple types, offering increased flexibility in type annotations.

## Table of Contents

1. [Introduction to Union Types](#introduction-to-union-types)
2. [Union Type Declaration](#union-type-declaration)
3. [Using Union Types](#using-union-types)
   - [Function Parameters](#function-parameters)
   - [Return Types](#return-types)
   - [Variable Declaration](#variable-declaration)
4. [Type Guards](#type-guards)
5. [Using `typeof` with Union Types](#using-typeof-with-union-types)

## Introduction to Union Types

In TypeScript, a union type allows you to specify that a value can be of more than one type. This provides greater flexibility and helps handle scenarios where a function or variable can accept or hold different types of data.

## Union Type Declaration

```typescript
let variable: string | number;
```

- The `string | number` notation indicates that the `variable` can hold values of type `string` or `number`.

## Using Union Types

### Function Parameters

```typescript
function printId(id: string | number) {
  console.log(`ID: ${id}`);
}

printId("abc"); // Output: ID: abc
printId(123); // Output: ID: 123
```

- The `printId` function takes a parameter of type `string | number`, allowing it to accept both strings and numbers.

### Return Types

```typescript
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: string | number, b: string | number): string | number {
  return a + b;
}

let result1: string = combine("Hello, ", "world!"); // result1: "Hello, world!"
let result2: number = combine(5, 10); // result2: 15
```

- The `combine` function is overloaded with two signatures, one for string inputs and another for number inputs.
- The implementation accepts `string | number` parameters and returns `string | number`, combining the inputs.

### Variable Declaration

```typescript
let value: string | number;
value = "abc";
console.log(value); // Output: "abc"

value = 123;
console.log(value); // Output: 123
```

- The `value` variable is declared with a union type `string | number`, allowing it to hold both string and number values.

## Type Guards

```typescript
function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log(`Length of the string: ${value.length}`);
  } else {
    console.log(`The value is a number.`);
  }
}

printLength("hello"); // Output: Length of the string: 5
printLength(42); // Output: The value is a number.
```

- The `typeof` type guard is used to determine the actual type of the value within the conditional block.

## Using `typeof` with Union Types

```typescript
let result: string | number = "hello";

if (typeof result === "string") {
  console.log(`The result is a string: ${result.toUpperCase()}`);
} else {
  console.log(`The result is a number: ${result.toFixed(2)}`);
}
```

- The `typeof` type guard helps narrow down the type within the `if` block, allowing access to the specific properties and methods of each type.

These code snippets and explanations cover the essential aspects of using union types in TypeScript. Union types provide increased flexibility in type annotations, allowing functions and variables to accept or hold multiple types of data. Type guards and the use of `typeof` further enhance the capabilities of union types, helping developers write more robust and type-safe code.

For more advanced TypeScript concepts and features, please refer to the [official TypeScript documentation ](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)

Happy coding!
