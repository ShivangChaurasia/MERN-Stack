let arr = [10, 20, 30, 40, 50]; //if we run typeof on array it will return object//

// console.log("Original array: " + arr);
// console.log("1st value of array: " + arr[0]);
// console.log("2nd value of array: " + arr[1]);
// console.log("3rd value of array: " + arr[2]);

// console.log("Array length: " + arr.length);
// console.log("Array after push: " + arr.push(60)); //adds element at the end
// console.log("Original array: " + arr);
// console.log("Array after pop: " + arr.pop()); //removes last element
// console.log("Array after unshift: " + arr.unshift(0)); //adds element at the beginning
// console.log("Original array: " + arr);
// console.log("Array after shift: " + arr.shift()); //removes first element
// console.log("Index of 30 in array: " + arr.indexOf(30));
// console.log("Original array: " + arr);
// console.log("Array after splice: " + arr.splice(2, 1, 25)); //removes 1 element at index 2 and adds 25
// console.log("Original array: " + arr);
// console.log("Array after slice: " + arr.slice(1, 4)); //returns a new array from index 1 to 3
// console.log("Array after reverse: " + arr.reverse()); //reverses the array
// console.log("Array after sort: " + arr.sort((a, b) => a - b)); //sorts the array in ascending order


// let random = [1, "apple", true, 5.6, {name: "John"}, [1, 2, 3]];
// console.log("Random array: " + random);
// console.log("Type of 1st element: " + typeof random[0]);
// console.log("Type of 2nd element: " + typeof random[1]);
// console.log("Type of 3rd element: " + typeof random[2]);
// console.log("Type of 4th element: " + typeof random[3]);
// console.log("Type of 5th element: " + typeof random[4]);
// console.log("Type of 6th element: " + typeof random[5]);
// console.log("Type of 7th element: " + typeof random[6]);

// random.push([20,40,60]);
// console.log("Array after adding elements: " + random);
// console.log("Index of 60 in array: " + random.indexOf(60));
// console.log("Accessing nested array element: " + random[6][2]);
// let newArr = random.concat(["banana", "orange"]);
// console.log("New array after concatenation: " + newArr);
// console.log(random.length);


// let [f,s,t,fo,fi] = arr;
// console.log("First element: " + f);
// console.log("Second element: " + s);
// console.log("Third element: " + t);
// console.log("Fourth element: " + fo);
// console.log("Fifth element: " + fi);


//OBJECTs-----------

// const Student = {
//     name: "Alice",
//     age: 20,
//     isEnrolled: true,
//     courses: ["Math", "Science", "History"]
// }
// console.log(Student);
// console.log("Student Name: " + Student.name);
// console.log("Student Age: " + Student.age);
// console.log("Is Student Enrolled: " + Student.isEnrolled);
// console.log("Student Courses: " + Student.courses);
// console.log("First Course: " + Student.courses[0]);

// Example of for...in loop in JavaScript
const person = {fname:"John", lname:"Doe", age:25};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Example of for...of loop in JavaScript

const colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log("Color: " + color);
}

