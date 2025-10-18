// Types of DataTypes in JavaScript

// 1. Primitive Data Types
let numberVar = 42;               // Number
let stringVar = "Hello, World!"; // String
let booleanVar = true;          // Boolean
let undefinedVar;            // Undefined
let nullVar = null;          // Null
let symbolVar = Symbol("unique"); // Symbol
let bigIntVar = 9007199254740991n; // BigInt

// 2. Non-Primitive Data Types
let objectVar = {               // Object
    name: "Alice",
    age: 30
};
let arrayVar = [1, 2, 3, 4, 5]; // Array
let functionVar = function() {   // Function
    return "I am a function";
};

// Displaying the types of each variable
console.log(typeof numberVar);     // "number"
console.log(typeof stringVar);     // "string"
console.log(typeof booleanVar);    // "boolean"
console.log(typeof undefinedVar);  // "undefined"
console.log(typeof nullVar);       // "object" (this is a known quirk in JavaScript)
console.log(typeof symbolVar);     // "symbol"
console.log(typeof bigIntVar);    // "bigint"
console.log(typeof objectVar);    // "object"
console.log(typeof arrayVar);     // "object"
console.log(typeof functionVar);  // "function"
// Note: Arrays are of type "object" in JavaScript

