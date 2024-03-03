// compact way to make functions
//arrow function

function sum(a, b) {
    return a + b;
}

//multiplication function
function sum(a, b) {
    return a + b;
}


// ab inhi functoins ko likhne ka compact tarika hota hai 

const arrowSum = (a, b) => {
    return a + b;
}

const multiplication = (a, b) => {
    // return a*b;
    console.log(a * b);
}


//printing "hello" using arrow function 
// jab single line of code ho to { } in brackets ko lagane ki need nhi hai pr good practice hai ki lagao 
const printHello = () => console.log("hello");



//print all the vowels of string 
function countVowel(str) {
    //"ApnaCollege", count = 5;
    let count = 0;
    for (const char of str) {
        if  (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        count++;
        console.log(char);
    }
    console.log(count);
}
}


//print all the strings using arrow function
const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if  (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        count++;
        console.log(char);
    }
    console.log(count);
}
}