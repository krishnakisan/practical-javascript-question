// How to sum of array values
// Using Reduce
let sum = [1,2,3,4,5];
let total = sum.reduce((a,c)=>{
    return a + c;
})
//console.log(total);

// Use flat array
let arr = [1,2,3,4,[5],6];
//console.log(arr.flat());
// Output = [1,2,3,4,5,6]

// Using Flat() Neseted array
let nestedArr = [1,2,3,4,[5,6,[7,8]]];
//console.log(nestedArr.flat(Infinity));
// Output = [1,2,3,4,5,6,7,8]

// Print Numbers 1 to 100 using For Loop
for (let i=1; i<=100; i++){
   // console.log(i);
}
// Output - 1,2,3,4,5,6,7,8,9,10,.........100

// Print Numbers 1 to 100 without using For Loop
// function count(start, end) {
//     console.log(start); // Log the current value of start
//     if (start < end) {
//         count(start + 1, end); // Recursively call the function with the incremented value
//     }
// }
// count(1, 100);


// function count(start, end){
//     console.log(start);
//     if(start<end){
//         count(start +1, end)
//     }
// }
// count(1,100);

//How to add value in array specific position - splice()
// Add Example
const month = ["Jan", "Feb", "March"];
month.splice(2,0,"March");
//console.log(month);
//Output - [ 'Jan', 'Feb', 'March', 'March' ]

// Remove Example
//Remove Duplicate March Value
month.splice(2,1);
//console.log(month);

//How to find largest number in array sort()
// Smalest Value
const smallVal = [50,30,20,10,1];
smallVal.sort((a,b)=>a-b);
//console.log("Smallest Value" + "", smallVal);
//output - Smallest Value [ 1, 10, 20, 30, 50 ]

//Second Largest Value
const secondLargeVal = [50,60,70,80,90,100];
secondLargeVal.sort((a,b)=>a-b);
//console.log("Second Largest Value" + "", secondLargeVal[secondLargeVal.length-2]);
//console.log("Second Largest Value" + "", secondLargeVal[secondLargeVal.length-2]);

//7. Difference between Map & Filter Functions
//Map()
let mapFun = [1,2,3,4,5];
// let multiply= mapFun.map((val)=>val * 2);
// console.log(multiply);
let multiply = mapFun.map((val)=> val *2);
//console.log(multiply);

//Filter()
let filterFun = [1,2,3,4,5];
// let filter = filterFun.filter((val)=> val>3);
//console.log(filter);

let filter = filterFun.filter((val)=> val>=3);
//console.log(filter);

// Filter() Method with Array of Object
let arrObj = [
    {
        name : "More",
        age : 29
    },
    {
        name : "Krishna",
        age : 30
    },
    {
        name : "Ajit",
        age : 35
    },
    {
        name : "Hemant",
        age : 40
    },
    {
        name : "Deepak",
        age : 35
    }
];
let result = arrObj.filter((val)=> val.age>30);
//console.log(result);

//What is Destructuring in Javascript
//Object Destructuring

let obj = {
    name : 'Krishna',
    age :35,
}
let {name,age} = obj;
//console.log(`My name is ${name} and age is ${age}`);

// Assigining new variable
let obj1 = {
    name : 'Ram',
    age :30,
}
let {name:newname, age:newage}=obj1;
//console.log(`My name is ${newname} and age is ${newage}`);


let obj2 = {
    name : 'Ram',
    age :30,
}
//let {...rest}=obj2;
//console.log(rest);

//Array Destructuring

let arrD = [1,2,3,4,5]
//let [a,b,c,d,e] = arrD;

// Using Rest Operator
let [a,...rest] = arrD;
//console.log(a,rest);

// Swap Number 
// Old way
x = 10;
y = 20;
// temp = x;
// x=y;
// y= temp;

//console.log(x);
//console.log(y);
// With Destructuring Sway number
[y,x] = [x,y];
//console.log(x);
//console.log(y);

//Shallow Copy and Deep Copy in JavaScript
// One Way using assign method
const originalObj = {
      name : 'Krishna'
}
const shallowObj = Object.assign({},(originalObj)); // Shallow Copy
shallowObj.name = 'Ram';
//console.log(originalObj);
//console.log(shallowObj);

// 2nd way - Using (...objectname) - Destructuring
const stundentName = {
    name : 'Hemant',
    age : 38
}
const stundentShallowCopy = {...stundentName}; // Shallow Copy
stundentShallowCopy.name = 'Deepak';
stundentShallowCopy.age = 35;
//console.log(stundentName);
//console.log(stundentShallowCopy);

// Deep Copy
let data = {
    name : 'Shoeb',
    address :{
        city: 'Nagpur',
    }
}

let deepCopy = JSON.parse(JSON.stringify(data));// Deep copy
deepCopy.address.city = 'Pune';
//console.log(data);
//console.log(deepCopy);

// How to cut array length in JavaScript
let cutArr = [1,2,3,4,5,6];
let res = cutArr.splice(2);
console.log(res);

// What is Use Strict Mode in JavaScript





















