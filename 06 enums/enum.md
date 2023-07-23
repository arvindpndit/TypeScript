# Enums in TypeScript

This readme provides code snippets and explanations for using enums in TypeScript. Enums are a powerful feature that allows you to define a set of named constants, providing more readable and self-documenting code.

## Table of Contents

1. [Introduction to Enums](#introduction-to-enums)
2. [Enum Declaration](#enum-declaration)
3. [Enum Values](#enum-values)
4. [Numeric Enums](#numeric-enums)
5. [String Enums](#string-enums)
6. [Heterogeneous Enums](#heterogeneous-enums)
7. [Enum with Custom Values](#enum-with-custom-values)
8. [Using Enums in Code](#using-enums-in-code)

## Introduction to Enums

Enums in TypeScript are a way to define a set of named constants, where each constant represents a unique value. Enums make the code more expressive and easier to understand, especially when dealing with fixed sets of related values.

## Enum Declaration

```typescript
enum Direction {
  North,
  East,
  South,
  West,
}
```

- The `enum` keyword is used to declare an enum.
- `Direction` is the name of the enum.
- The constants `North`, `East`, `South`, and `West` represent the possible values of the enum.

## Enum Values

```typescript
enum Color {
  Red,
  Green,
  Blue,
}
```

By default, enums start with a value of 0 and increment by 1 for each subsequent constant. In this example:

- `Color.Red` has a value of `0`.
- `Color.Green` has a value of `1`.
- `Color.Blue` has a value of `2`.

## Numeric Enums

```typescript
enum Day {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
```

You can explicitly set numeric values for enum constants. If the value is not explicitly set, TypeScript will assign incremental numeric values starting from 0.

In this example:

- `Day.Sunday` has a value of `1`.
- `Day.Monday` has a value of `2`.
- And so on, until `Day.Saturday` with a value of `7`.

## String Enums

```typescript
enum Direction {
  North = "NORTH",
  East = "EAST",
  South = "SOUTH",
  West = "WEST",
}
```

Enums can also use string values as constants. Each constant must have a unique string value.

## Heterogeneous Enums

```typescript
enum MixedEnum {
  Zero,
  One = "ONE",
  Two = 2,
}
```

Enums can have a mix of numeric and string constants.

## Enum with Custom Values

```typescript
enum ErrorCode {
  NotFound = 404,
  Unauthorized = 401,
  InternalServerError = 500,
}
```

Enums are often used to represent error codes or status codes in APIs.

## Using Enums in Code

```typescript
enum Color {
  Red,
  Green,
  Blue,
}

function getColorName(color: Color): string {
  switch (color) {
    case Color.Red:
      return "Red";
    case Color.Green:
      return "Green";
    case Color.Blue:
      return "Blue";
    default:
      return "Unknown";
  }
}

const selectedColor: Color = Color.Green;
const colorName: string = getColorName(selectedColor);
console.log(colorName); // "Green"
```

Enums are especially useful in switch statements or when you want to map constant values to more descriptive names.

These code snippets and explanations cover the essential aspects of using enums in TypeScript. Enums provide a way to represent a set of named constants, making the code more expressive and readable. By using enums, you can improve code maintainability and avoid the use of "magic numbers" or arbitrary strings, leading to more reliable and self-documenting code.

For more advanced TypeScript concepts and features, please refer to the [official TypeScript documentation ](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)

Happy coding!
