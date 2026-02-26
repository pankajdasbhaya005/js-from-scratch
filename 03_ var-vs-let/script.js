
// WHY WE DO NOT USE "var" IN MODERN JS


// 1.VAR PROBLEM - REDECLARATION ISSUE

// var same variable ko dobara declare karne deta hai
// Ye dangerous hai kyunki accidentally value overwrite ho sakti hai

var name = "Pankaj";
var name = "Rahul";   // ! No error (problem)

console.log(name);  
// Output: Rahul
// Pehli value silently overwrite ho gayi



// 2.LET DOES NOT ALLOW REDECLARATION

let age = 20;
// let age = 25; --- Error aayega
// Same scope me dubara declare nahi kar sakte

age = 25;   //  Value change allowed
console.log(age);



// 3.VAR HAS FUNCTION SCOPE (Confusing)
// LET HAS BLOCK SCOPE (Safer)


// Block scope example:
if (true) {

    var city = "jsg";  
    let country = "India";

}

// var block ke bahar bhi accessible hai !
console.log(city);   // jsg (unexpected behavior)

// let block ke bahar accessible nahi hai
// console.log(country);  Error



// 4.HOISTING DIFFERENCE

// var hoist hota hai aur undefined deta hai
console.log(a);   // undefined
var a = 10;


// let bhi hoist hota hai BUT use karne se pehle access nahi kar sakte
// console.log(b); ---- Error
let b = 20;



// 5.REAL WORLD PROBLEM WITH VAR

for (var i = 0; i < 3; i++) {
    // loop
}

console.log(i);
// Output: 3
// i loop ke bahar bhi accessible hai (problem)


// Ab same loop let se

for (let j = 0; j < 3; j++) {
    // loop
}

// console.log(j);  Error
// j sirf loop ke andar available hai (safe)



// FINAL PROFESSIONAL RULE

// By default use const
// Agar value change karni ho toh use let
// var avoid karo in modern JavaScript



// SUMMARY

// var problems:
// 1. Redeclaration allowed
// 2. Block scope follow nahi karta
// 3. Hoisting confusing
// 4. Bugs create karta hai

// let advantages:
// 1. Block scoped
// 2. Redeclaration allow nahi karta
// 3. Cleaner behavior
// 4. React aur modern JS ke liye required