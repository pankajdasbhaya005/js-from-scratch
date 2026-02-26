
// VARIABLES IN JAVASCRIPT


// 1️⃣ let keyword

// let se variable declare karte hain
// Yahan hum ek name variable bana rahe hain

let name = "pankaj";  
// "pankaj" ek string value hai


// Console mein print karte hain
console.log(name);  


// Ab value change karte hain
name = "pankaj dasbhaya";  
// let variable ki value change kar sakte hain

console.log(name);



// 2️⃣ const keyword

// const se variable banate hain jiska value change nahi hota

const country = "India";

console.log(country);

// Agar hum ye kare:
// country = "USA";
// To error aayega
// Kyunki const variable change nahi hota



// 3️⃣ Different Data Types

// String (text)
let city = "jsg";

// Number
let age = 20;

// Boolean (true/false)
let isStudent = true;

// Undefined
let something;

// Null
let emptyValue = null;

console.log(city);
console.log(age);
console.log(isStudent);
console.log(something);
console.log(emptyValue);



// 4️⃣ Using Variables in HTML

// HTML element ko pakad rahe hain
let heading = document.getElementById("output");

// Text change kar rahe hain variable use karke
heading.innerText = "My name is " + name + " and I live in " + city;

// + operator string join karta hai



// 5️⃣ Template Literals (Modern Way)

// Backtick ` ka use karte hain
// ${} ke andar variable likhte hain

heading.innerText = `My name is ${name} and I live in ${city}. I am ${age} years old.`;


// Ye modern aur clean way hai string banane ka