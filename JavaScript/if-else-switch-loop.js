// Example of if-else statement in JavaScript

let age = 18;
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}

age = 16;
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}

// Example of if-else if-else statement in JavaScript

let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
}
else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


// Example of nested if-else statement in JavaScript

let number = 10;
if (number > 0) {
    if (number % 2 === 0) {
        console.log("The number is a positive even number.");
    } else {
        console.log("The number is a positive odd number.");
    }
} else {
    console.log("The number is not positive.");
}


// Example of switch statement in JavaScript
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");

}


//Example of for loop in JavaScript
for (let i = 1; i <= 5; i++) {
    console.log("Iteration number: " + i);
}
// Example of while loop in JavaScript
let count = 1;
while (count <= 5) {
    console.log("Count is: " + count);
    count++;
}

// Example of do-while loop in JavaScript
let num = 1;
do {
    console.log("Number is: " + num);
    num++;
} while (num <= 5);

// Example of ternary operator in JavaScript
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log("Discount: " + (discount * 100) + "%");



// Example of for...in loop in JavaScript
const person = {fname:"John", lname:"Doe", age:25};
for (let key in person) {
    console.log(key + ": " + person[key]);
}