// function sum(a,b,c){  //Normal function
//     let total = a+b+c;
//     console.log("Normal: "+total);
// }

// function sumRest(...num){
//     let t =num[0]+num[1]+num[2];
//     console.log("Rest operator Output: "+t); //Rest operator collects all arguments into an array
// }

// sum(10,20,30);
// sumRest(10,20,30);



// // Spread Operator

// let obj ={
//     name: "John",
//     age: 30,
//     city: "New York,Paris,Berlin,London",
// }

// let obj2 = {...obj, country: "USA"}; //Spread operator to copy properties of obj into obj2 and add new property


// let {name,...remaining} = obj; //Destructuring with rest operator to get remaining properties
// console.log("Original Object: ", obj);
// // console.log("New Object with Spread Operator: ", obj2);

// function object(name,age,city){
//     console.log("Name: "+name);
//     console.log("Age: "+age);
//     console.log("City: "+city);
// }

// object(...Object.values(obj)); //Spread operator to pass object values as individual arguments

// function array(name,age,city){
//     let cityArray = city.split(","); //Splitting city string into array
//     console.log(cityArray);
// }

// array(obj.name, obj.age, obj.city);


// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let combined = [...arr1, ...arr2]; //Using spread operator to combine two arrays
// console.log("Combined Array: ", combined);

// let [first, ...rest] = combined; //Using rest operator to get first element and the rest of the array
// console.log("First Element: ", first);
// console.log("Rest of the Elements: ", rest);

// combined.forEach(function(val){
//     console.log(val);
// }) //Using forEach to iterate over combined array and print each value

// const hello = (combined) => {console.log(combined);} //Arrow function to print combined array
// hello(combined);

// combined.forEach(hello); //Using forEach to iterate over combined array and print each value using arrow function

// let newarr = combined.map((val)=>val*=5); //Using map to iterate over combined array and print each value using arrow function
// console.log(newarr)


// const arr3 = combined.filter((val) => val > 3); //Using filter to get values greater than 3
// console.log(arr3);

// const newarr = combined.reduce((acc, val) => acc + val, 0); //Using reduce to get sum of all values
// console.log(newarr);



let people = [
    {name: "Alice", age: 25, city: "New York"},
    {name: "Bob", age: 30, city: "New York"},
    {name: "Charlie", age: 35, city: "Chicago"},
    {name: "David", age: 40, city: "Houston"},
    {name: "Eve", age: 45, city: "Phoenix"}
];

const cond = people.filter((val) =>{
    let name = ''
    if(val.city === "New York"){
        name += val.name;
        return name;
    }
});
console.log(cond);











