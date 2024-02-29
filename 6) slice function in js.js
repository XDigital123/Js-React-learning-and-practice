//slice 

let num = [1,2,3,4];
num.slice(1,3);
//ab ye jo slice hai ye hume pura array print kr dega kyu?
//kynki ye existing array mai modifications nhi krta ye nya array create krta hai 
//to tumeh is store krwana padega tabhi ye tume output dega jo tum chate ho 
console.log(num);

//to samajh gye ye ese hi chalega ise store krwana padega 
let newArray = num.slice(1,3);
console.log(newArray);