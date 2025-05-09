

Hi everyone!  
Today I want to explain the **difference between interfaces and types in TypeScript**, and also show how to use **union** and **intersection types**. I hope this will help anyone who’s learning TypeScript like me.

## Interfaces vs Types

In TypeScript, both `interface` and `type` are used to describe the **shape of an object**, but they have some differences.

### When to use `interface`

- **Better for object structures** (especially if you're working with classes).
- **Supports extending (inheritance)** easily.
- You can **merge interfaces** (declaration merging).


<!-- Examples -->

```ts
// Interface
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

const emp: Employee = {
  name: "John",
  age: 30,
  employeeId: 1234
};

// Types
type Animal = {
  name: string;
  legs: number;
};

const dog: Animal = {
  name: "Buddy",
  legs: 4
};

// Uninon type
type StringOrNumber = string | number;

let value: StringOrNumber;
value = "hello"; 
value = 123; 

// Intersection type
type A = { x: number };
type B = { y: number };

type C = A & B; // has both x and y

const point: C = {
  x: 10,
  y: 20
};