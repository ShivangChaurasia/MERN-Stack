// const my_eng = 70;
// const my_math = 85;
// const my_science = 90;
// const my_history = 75;

// function percentage(eng, math, science, history) {
//     const total = eng + math + science + history;
//     return (total / 400) * 100;
// }

// console.log("My percentage is: " + percentage(my_eng, my_math, my_science, my_history) + "%");



// // Number
// let num = 200;
// let num2 = 3234.45678;
// console.log(num.toFixed(3));//No. of '0's after decimal
// console.log(num2.toPrecision(5)); //Rounf off to total no. of digits



// // String
// let str = "Hello, World!";
// console.log(str.length);
// console.log(str.toUpperCase()); //for converting to uppercase
// console.log(str.toLowerCase()); //for converting to lowercase
// console.log(str.indexOf("World")); //gives index of first occurrence
// console.log(str.slice(0, 5)); //extracts a section of a string and returns it as a new string
// console.log(str.replace("World", "JavaScript")); //replaces a specified value with another value in a string
// console.log(str.split(", ")); //splits a string into an array of substrings
// console.log(str.charAt(7)); //returns the character at the specified index
// console.log(str.includes("Hello")); //checks if a string contains a specified value
// console.log(str.startsWith("Hello")); //checks if a string starts with a specified value
// console.log(str.endsWith("!")); //checks if a string ends with a specified value
// console.log(str.repeat(2)); //repeats a string a specified number of times
// console.log(str.trim()); //removes whitespace from both ends of a string
// console.log(str.concat(" Welcome to JavaScript.")); //joins two or more strings
// console.log(str.substr(7, 5)); //extracts a substring from a string (start index, length)
// console.log(str.search("World")); //searches a string for a specified value and returns the position of the match
// console.log(str.match(/o/g));  //searches a string for a match against a regular expression and returns the matches
// console.log(str.lastIndexOf("o")); //returns the index of the last occurrence of a specified value in a string
// console.log(str.localeCompare("Hello, World!")); //compares two strings in the current locale
// console.log(str.normalize()); //returns the Unicode Normalization Form of a given string
// console.log(str.match("Hello")); //searches a string for a match against a regular expression (case insensitive)


// // Example of Math functions in JavaScript
// let number = -5.7;
// console.log("Absolute value: " + Math.abs(number)); //absolute value
// console.log("Ceiling value: " + Math.ceil(number)); //ceiling value
// console.log("Floor value: " + Math.floor(number)); //floor value
// console.log("Rounded value: " + Math.round(number)); //rounded value
// console.log("Square root: " + Math.sqrt(25)); //square root
// console.log("Power: " + Math.pow(2, 3)); //power
// console.log("Random number between 0 and 1: " + Math.random()); //random number between 0 and 1
// let max = 10;
// let min = 0;
// console.log("Random number between 1 and 10: " + Math.floor(Math.random() * (max-min +1)))+min; //random number between 1 and 10
// console.log("Maximum value: " + Math.max(10, 20, 5, 15)); //maximum value
// console.log("Minimum value: " + Math.min(10, 20, 5, 15)); //minimum value
// console.log("Natural logarithm of 10: " + Math.log(10)); //natural logarithm
// console.log("Sine of 30 degrees: " + Math.sin(30 * (Math.PI / 180))); //sine value
// console.log("Cosine of 60 degrees: " + Math.cos(60 * (Math.PI / 180))); //cosine value
// console.log("Tangent of 45 degrees: " + Math.tan(45 * (Math.PI / 180))); //tangent value
// console.log("Exponential of 2: " + Math.exp(2)); //exponential value
// console.log("Cube root of 27: " + Math.cbrt(27)); //cube root value


// // Example of date functions in JavaScript
// let currentDate = new Date();
// console.log("Current Date and Time: " + currentDate);
// console.log("Year: " + currentDate.getFullYear());
// console.log("Month: " + (currentDate.getMonth() + 1)); //Months are zero-based
// console.log("Date: " + currentDate.getDate());
// console.log("Day: " + currentDate.getDay());    //0=Sunday, 1=Monday, ..., 6=Saturday
// console.log("Hours: " + currentDate.getHours());
// console.log("Minutes: " + currentDate.getMinutes());
// console.log("Seconds: " + currentDate.getSeconds());
// console.log("Milliseconds: " + currentDate.getMilliseconds());
// console.log("Timestamp: " + currentDate.getTime()); //milliseconds since January 1, 1970
// console.log("UTC String: " + currentDate.toUTCString()); //Coordinated Universal Time
// console.log("Locale String: " + currentDate.toLocaleString()); //based on local time zone
// console.log("ISO String: " + currentDate.toISOString()); //ISO 8601 format