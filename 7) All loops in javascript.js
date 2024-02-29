// 1) for loop 

// let num = [1,2,3,4,5];
// for(let i = 0; i<num.length; i++) {
//     console.log(num[i]);
// }




// 2) for of loop 

// let num = [1,2,3,4,5,6];
// for(let item of num) {
//     console.log(item);
// }






// 3) for in loop 

//ye loop objects ko itereate krne ke liye use kiya jata hai ye objects ki keys la kr deta hai 
//tum array bhi chala skte kynki wo bhi object hi hote hai pr array ki keys kya hogi uske index numbers

//ex1
// let num = [1,2,3,4,5,6,7];
// for(let item in num) {
    //it will print index numbers of an array kynki ye loop keys ko print krata hai 
    // console.log(item);
// }

//ex 2 object ke uper chalate hai ye object ki keys return krega 
// const myObject = {
//     js: 'javaScript',
//     cpp: 'c++',
// }

// for(const item in myObject) {
//     console.log(item);
// }
//agar mujhe keys se values bhi print krawana ho to bhut aasan hai 
// for(const item in myObject) {
//     console.log(myObject[item])
// }




// 4) for Each loop


//1) first tarika for each loop ka 


//using array of numbers 
// let num = [1,2,3,4,5,6,7,8,9,10];
// num.forEach(function(item) {
//     console.log(item);
// })

//using array of strings 
// const coding = ["js", "cpp" , "python"];
// coding.forEach(function(item){
//     console.log(item);
// })


//2) dusra tarika for each loop ka 

//using array of numbers 
let num = [1,2,3,4,5,6,7,8,9,10];
num.forEach((item) => {
console.log(item);
})

//using array of strings 
const coding = ["js", "cpp" , "python"];
coding.forEach((item) => {
    console.log(item);
})

