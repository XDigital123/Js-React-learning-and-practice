//splice in js 
// let num = [1,2,3,4,5,6,7,8,9];
//2 index se start kro, 3 elements ko delete krdo, 11,12,13 ko insert krod deleted jagah pr
// num.splice(2,3,11,12,13);
// console.log(num);


// ye splice function return bhi krta hai deleted elements ko aur iska typeof nikalenge to Object aayega kynki
//ye ek array hai 

// 2)
let num = [1,2,3,4,5,6,7,8,9];
num.splice(2,3,11,12,13);
console.log("printing new array with new inserted values : ", num);
let deletedValues = num.splice(2,3,11,12,13);
//ye deleted values return bhi krta hai
console.log("Printing deleted values : ", deletedValues);
