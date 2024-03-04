// ******************************* map method in js   **********************

// let nums = [67,52,39];
// nums.map((val) => {
//     console.log(val);
// });



//2) 
//ye map old array mai koi change nhi krta new array return krta hai 
//hum console main "nums" likhenge to hamara purana array print ho jayega usme koi change nhi hoga
// let nums = [67,52,39];
// let newArr = nums.map((val) => {
//     return val * 2;
// });
// console.log(newArr);



//**************************************  filter method  *******************

//1) 
// let arr = [1,2,3,4,5,6,7,8,9,10];
// //i want to filter even numbers 
// let newFilterdArray = arr.filter((val) => {
//     return val % 2 === 0;   
// })
// console.log(newFilterdArray);


//2) 
//I want all values greater than 3;

// let arr = [1,2,3,4,5,6,7,8,9,10];
// //i want to filter even numbers 
// let newFilterdArray = arr.filter((val) => {
//     return val > 3;   
// })
// console.log(newFilterdArray);



//**************************************  reduce method  *******************
//1)  
// I want to print sum of all these values 
// let arr = [ 1, 2, 3, 4, 5];

// const output = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log(output);


// 2) 
// I want to print the Largest element of the array 
// let arr = [ 11, 2, 33, 40, 5];
// const largestElement = arr.reduce((prev, curr) => {
//     // agar "prev" "curr" se bada hai to "prev" return krdo nhi to "curr" return krdo; 
//     return prev > curr ? prev : curr;
// })

// console.log(largestElement);
