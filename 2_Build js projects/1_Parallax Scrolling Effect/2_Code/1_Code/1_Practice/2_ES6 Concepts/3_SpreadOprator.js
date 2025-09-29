let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];
console.log(combined); // [1,2,3,4,5,6]

// Copy object
let obj1 = { name: "Kajal", age: 22 };
let obj2 = { ...obj1, course: "CS" };

console.log(obj2); // {name: "Kajal", age: 22, course: "CS"}