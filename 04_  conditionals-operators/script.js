
// ALL OPERATORS + CONDITION STATEMENTS COMPLETE GUIDE


// 1.ARITHMETIC OPERATORS

let a = 20;
let b = 4;

console.log(a + b);  
// Output: 24
// Explanation: 20 + 4 = 24

console.log(a - b);  
// Output: 16
// Explanation: 20 - 4 = 16

console.log(a * b);  
// Output: 80
// Explanation: 20 multiply 4

console.log(a / b);  
// Output: 5
// Explanation: 20 divide by 4

console.log(a % b);  
// Output: 0
// Explanation: Remainder after division

console.log(a ** b);  
// Output: 160000
// Explanation: 20 power 4



// 2️. ASSIGNMENT OPERATORS

let x = 10;

x += 5;  
console.log(x);
// Output: 15
// Explanation: x = x + 5

x -= 3;
console.log(x);
// Output: 12

x *= 2;
console.log(x);
// Output: 24

x /= 4;
console.log(x);
// Output: 6



// 3️. COMPARISON OPERATORS

let num1 = 10;
let num2 = "10";

console.log(num1 == num2);
// Output: true
// Explanation: Only value compare karta hai

console.log(num1 === num2);
// Output: false
// Explanation: Value + type compare karta hai

console.log(num1 != num2);
// Output: false

console.log(num1 !== num2);
// Output: true

console.log(num1 > 5);
// Output: true

console.log(num1 < 5);
// Output: false

console.log(num1 >= 10);
// Output: true

console.log(num1 <= 9);
// Output: false



// 4️.LOGICAL OPERATORS

let age = 22;
let hasID = true;

console.log(age > 18 && hasID);
// Output: true
// Explanation: Dono condition true

console.log(age < 18 || hasID);
// Output: true
// Explanation: Ek condition true

console.log(!hasID);
// Output: false
// Explanation: NOT operator opposite karta hai



// 5️. IF STATEMENT

let temperature = 35;

if (temperature > 30) {
    console.log("It is Hot");
}
// Output: It is Hot
// Explanation: Condition true thi



// 6️. IF ELSE

let score = 45;
if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}
// Output: Fail
// Explanation: 45 >= 50 false



// 7️. IF ELSE LADDER

let marks = 82;
if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}
// Output: Grade B
// Explanation: 82 >= 75 true



// 8️. NESTED IF

let userAge = 20;
let hasLicense = true;
if (userAge >= 18) {

    if (hasLicense) {
        console.log("You can drive");
    } else {
        console.log("You need a license");
    }

} else {
    console.log("You are underage");
}
// Output: You can drive
// Explanation: Dono condition true



// 9️. TERNARY OPERATOR

let number = 15;
let result = (number % 2 === 0)
    ? "Even"
    : "Odd";

console.log(result);
// Output: Odd
// Explanation: 15 % 2 = 1 → false condition



// . MULTIPLE TERNARY (ADVANCED STYLE)

let grade = 85;
let finalGrade = grade >= 90 ? "A"
    : grade >= 75 ? "B"
    : grade >= 50 ? "C"
    : "Fail";

console.log(finalGrade);
// Output: B
// Explanation: 85 >= 75 true



// REAL WEB DEV SCENARIO

let isLoggedIn = false;
if (isLoggedIn) {
    console.log("Show Dashboard");
} else {
    console.log("Show Login Page");
}
// Output: Show Login Page
// Explanation: User logged in nahi hai