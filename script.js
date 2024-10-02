// How to Get a Sum of Array
// Using Reduce
let sum = [1,2,3,4,5];
let result = sum.reduce((a,c)=>{
    return a + c;
})
console.log(result);