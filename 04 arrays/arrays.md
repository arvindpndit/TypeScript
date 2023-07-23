# Arrays in TypeScript

This readme provides code snippets and explanations for working with arrays in TypeScript. Arrays are a fundamental data structure that allows you to store and manipulate multiple values of the same type. TypeScript enhances arrays with type annotations, making it more predictable and enabling better tooling support.

## Table of Contents

1. [Introduction to Arrays](#introduction-to-arrays)
2. [Array Type Annotations](#array-type-annotations)
3. [Array Initialization](#array-initialization)
4. [Array Methods](#array-methods)
   - [Push and Pop](#push-and-pop)
   - [Shift and Unshift](#shift-and-unshift)
   - [Slice](#slice)
   - [Map](#map)
   - [Filter](#filter)
   - [Reduce](#reduce)
   - [forEach](#foreach)
5. [Multi-dimensional Arrays](#multi-dimensional-arrays)

## Introduction to Arrays

An array in TypeScript is an ordered collection of elements of the same type. Arrays allow you to store and manipulate data in a structured manner, making it easier to work with large sets of data.

## Array Type Annotations

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
```

- Array type annotations specify that the `numbers` array contains numbers, and the `names` array contains strings.
- The `number[]` and `string[]` syntax is used to define arrays of specific types.

## Array Initialization

```typescript
let fruits: string[] = [];
fruits.push("apple");
fruits.push("banana");
fruits.push("orange");
```

- Arrays can be initialized as empty, and elements can be added using the `push()` method.

## Array Methods

### Push and Pop

```typescript
let stack: number[] = [];
stack.push(1); // stack: [1]
stack.push(2); // stack: [1, 2]
let topElement: number = stack.pop(); // topElement: 2, stack: [1]
```

- The `push()` method adds elements to the end of the array.
- The `pop()` method removes and returns the last element from the array.

### Shift and Unshift

```typescript
let queue: string[] = [];
queue.unshift("first"); // queue: ["first"]
queue.unshift("second"); // queue: ["second", "first"]
let firstElement: string = queue.shift(); // firstElement: "second", queue: ["first"]
```

- The `unshift()` method adds elements to the beginning of the array.
- The `shift()` method removes and returns the first element from the array.

### Slice

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let slicedNumbers: number[] = numbers.slice(1, 4); // slicedNumbers: [2, 3, 4]
```

- The `slice()` method returns a new array containing elements from the specified start index (inclusive) to the specified end index (exclusive).

### Map

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let doubledNumbers: number[] = numbers.map((num) => num * 2); // doubledNumbers: [2, 4, 6, 8, 10]
```

- The `map()` method creates a new array by applying a provided function to each element of the original array.

### Filter

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let evenNumbers: number[] = numbers.filter((num) => num % 2 === 0); // evenNumbers: [2, 4]
```

- The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

### Reduce

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let sum: number = numbers.reduce((acc, num) => acc + num, 0); // sum: 15
```

- The `reduce()` method applies a function to each element of the array, reducing it to a single value.

### forEach

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));
```

- The `forEach()` method executes a provided function once for each array element.

## Multi-dimensional Arrays

```typescript
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

- Multi-dimensional arrays are arrays of arrays, forming a matrix or grid-like structure.

These code snippets and explanations cover the essential aspects of working with arrays in TypeScript. Arrays are powerful data structures that allow you to perform various operations efficiently. With TypeScript's type annotations and enhanced tooling support, you can write more reliable and maintainable code when dealing with arrays in your projects.

For more advanced TypeScript concepts and features, please refer to the [official TypeScript documentation ](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)

Happy coding!
