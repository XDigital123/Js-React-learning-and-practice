// let num = [10,12,22,56,42,15,52,65,26,42,56,325,3625,12];
//yaad rakna ki ye sort() alphabatically sort krta hai 
//agar mujhe ise ascending order mai sort krna ho to uske liye sort ke pass ek optional compare function hota hai 
// num.sort();
// console.log(num);



//2) sorting in ascending order 

let compare = (a,b) => {
    return a-b; //desending order ke liye b-a likhenge
}
let num = [10,22,42,15,65,26,56,325,3625,12];
num.sort(compare);
console.log(num);
