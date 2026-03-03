
// FUNCTIONS IN JAVASCRIPT
// Function = reusable block of code



// 1. BASIC FUNCTION (NO PARAMETER)

function greet() {
    console.log("Hello, Welcome!");
}

// Function call karna zaruri hai warna run nahi hoga
greet();

/*
Output:
Hello, Welcome!

Explanation:
function banaya → greet
Phir greet() call kiya → code run hua
*/



// 2.FUNCTION WITH PARAMETERS

function greetUser(name) {
    console.log("Hello " + name);
}

greetUser("pankaj");

/*
Output:
Hello pankaj

Explanation:
name ek parameter hai
"pankaj" argument hai
*/



// 3. FUNCTION WITH RETURN

function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result);

/*
Output:
8

Explanation:
return value ko wapas bhejta hai
add(5,3) = 8
*/



// 4. FUNCTION EXPRESSION

// Function ko variable me store kar sakte hain

const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5));

/*
Output:
20

Explanation:
Ye anonymous function hai
Variable multiply me store kiya
*/



// 5. ARROW FUNCTION (Modern Way)

// Normal function:
function square(num) {
    return num * num;
}

// Same arrow function:

const squareArrow = (num) => {
    return num * num;
};

console.log(squareArrow(6));

/*
Output:
36

Explanation:
Arrow function modern syntax hai
React me mostly ye hi use hota hai
*/



// 6. SHORT ARROW FUNCTION

// Agar sirf 1 line return ho to curly braces nahi lagte

const double = (num) => num * 2;

console.log(double(7));

/*
Output:
14
Explanation:
Implicit return ho gaya
*/



// 7. DEFAULT PARAMETERS

function welcome(name = "Guest") {
    console.log("Welcome " + name);
}

welcome();
welcome("Rahul");

/*
Output:
Welcome Guest
Welcome Rahul

Explanation:
Agar argument pass nahi hua to default value use hogi
*/



// 8. CALLBACK FUNCTION

// Function ko argument ke form me pass kar sakte hain

function processUser(name, callback) {
    console.log("Processing user:", name);
    callback();
}

function done() {
    console.log("User processed successfully");
}

processUser("pankaj", done);

/*
Output:
Processing user: pankaj
User processed successfully

Explanation:
done function ko argument me pass kiya
Ye callback kehlata hai
*/



// 9. REAL WEB DEV EXAMPLE

const checkLogin = (isLoggedIn) => {
    return isLoggedIn 
        ? "Show Dashboard" 
        : "Show Login Page";
};

console.log(checkLogin(true));
console.log(checkLogin(false));

/*
Output:
Show Dashboard
Show Login Page

Explanation:
Ternary use kiya inside function
React me ye pattern common hai
*/