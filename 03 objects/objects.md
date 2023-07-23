# Objects in TypeScript

This readme provides code snippets and explanations for working with objects in TypeScript. Objects are a fundamental data structure that allows you to store and organize related data as key-value pairs. TypeScript adds static typing to objects, making it more predictable and providing better tooling support.

## Table of Contents

1. [Introduction to Objects](#introduction-to-objects)
2. [Object Literal](#object-literal)
3. [Type Annotations for Objects](#type-annotations-for-objects)
4. [Interface for Objects](#interface-for-objects)
5. [Optional Properties](#optional-properties)
6. [Readonly Properties](#readonly-properties)
7. [Nesting Objects](#nesting-objects)

## Introduction to Objects

An object in TypeScript is a collection of key-value pairs, where each key is a unique identifier (string or symbol) and each value can be of any data type, including other objects.

## Object Literal

```typescript
const person = {
  name: "Arvind Pandit",
  age: 30,
  isStudent: true,
};
```

- The object `person` is created using an object literal syntax.
- The keys are `name`, `age`, and `isStudent`, and the corresponding values are `"Arvind Pandit"`, `30`, and `true`.

## Type Annotations for Objects

```typescript
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

const person: Person = {
  name: "Arvind Pandit",
  age: 30,
  isStudent: true,
};
```

- We define a `Person` type with explicit type annotations for each property.
- The `person` variable is declared as type `Person`, ensuring that it conforms to the defined structure.

## Interface for Objects

```typescript
interface Car {
  brand: string;
  model: string;
  year: number;
}

const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};
```

- An interface `Car` defines the structure of the object, similar to a type.
- The `myCar` variable is of type `Car`, adhering to the specified interface.

## Optional Properties

```typescript
interface Employee {
  name: string;
  age?: number;
  department: string;
}

const employee1: Employee = {
  name: "Alice",
  department: "HR",
};

const employee2: Employee = {
  name: "Bob",
  age: 25,
  department: "Engineering",
};
```

- The `age?` property is optional, denoted by the `?` symbol.
- Optional properties can be omitted when creating objects of the interface.

## Readonly Properties

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = {
  x: 10,
  y: 20,
};

// Error: Cannot assign to 'x' because it is a read-only property.
point.x = 5;
```

- `readonly` keyword makes the properties of the object read-only.
- Once assigned, the values of read-only properties cannot be changed.

## Nesting Objects

```typescript
interface Address {
  street: string;
  city: string;
}

interface Person {
  name: string;
  age: number;
  address: Address;
}

const person: Person = {
  name: "Arvind Pandit",
  age: 28,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};
```

- Objects can be nested within other objects, creating complex data structures.
- In this example, the `Person` interface contains another object `Address` as one of its properties.

These code snippets and explanations cover the essential aspects of working with objects in TypeScript. Leveraging TypeScript's static typing and interfaces helps ensure that objects adhere to specific structures, leading to more robust and maintainable code. With TypeScript, you can create predictable and structured data representations, enabling better collaboration and development practices.

For more advanced TypeScript concepts and features, please refer to the [official TypeScript documentation ](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)

Happy coding!
