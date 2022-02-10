// Primitives: number, string, boolean
// More comples types: arrays, objects
// Function types, parameters

//Primitives

let age: number;
age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More comples types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Elliot",
  age: 30,
};

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React - The Complete Guide";

// Union

let uni: string | number | boolean = "name";

uni = 123;

uni = true;

// Type Aliases

type Person2 = {
  name: string;
  age: number;
};

let person2: Person2;

person2 = {
  name: "elliot2",
  age: 30,
};

// Functions & types

function add(a: number, b: number) {
    return a+b;
}

function printOutPut(value: any){
    console.log(value)
}

// Generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1) //[-1, 1, 2, 3]




