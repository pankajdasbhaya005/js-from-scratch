// CALLBACK FUNCTIONS IN JAVASCRIPT
// Callback = function jo kisi dusre function me argument ke roop me pass hota hai



// 1. BASIC CALLBACK

function greet(name, callback){
    console.log("Hello " + name);
    callback(); // yahan callback function call ho raha hai
}

function sayBye(){
    console.log("Goodbye!");
}

greet("pankaj", sayBye);

/*
Output:
Hello pankaj
Goodbye!

Explanation:
sayBye function ko argument ke roop me pass kiya
Aur greet ke andar call kiya
*/



// 2. ANONYMOUS CALLBACK

function processUser(name, callback){
    console.log("Processing " + name);
    callback();
}

processUser("lucky", function(){
    console.log("User processed");

});

/*
Output:
Processing lucky
User processed

Explanation:
Direct function pass kiya bina naam ke
Isko anonymous callback bolte hain
*/



// 3. CALLBACK WITH PARAMETERS

function calculate(a, b, callback){

    let result = callback(a, b);

    console.log(result);
}

function add(a, b){
    return a + b;
}

calculate(5, 3, add);

/*
Output:
8

Explanation:
add function callback ke roop me use hua
*/



// 4. CALLBACK IN ARRAY METHODS

let numbers = [1,2,3];

numbers.forEach(function(num){

    console.log(num);

});

/*
Output:
1
2
3

Explanation:
forEach ke andar function pass kiya
Ye bhi callback hai
*/



// 5. ASYNC CALLBACK (setTimeout)

console.log("Start");
setTimeout(function(){
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

/*
Output:
Start
End
(after 2 seconds)
This runs after 2 seconds

Explanation:
setTimeout asynchronous hai
Delay ke baad callback run hota hai
*/



// 6. EVENT CALLBACK

let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    console.log("Button clicked");

});

/*
Output:
Button clicked (jab click kare)

Explanation:
Event listener me function callback hota hai
*/



// 7. CALLBACK HELL (PROBLEM)

setTimeout(function(){

    console.log("Step 1");

    setTimeout(function(){

        console.log("Step 2");

        setTimeout(function(){

            console.log("Step 3");

        },1000);

    },1000);

},1000);

/*
Output:
Step1
Step2
Step3 (delay ke sath)

Explanation:
Nested callbacks ko callback hell bolte hain
Code messy ho jata hai
*/



// 8. ERROR HANDLING STYLE CALLBACK

function fetchData(callback){

    let success = true;

    if(success){
        callback(null, "Data received");
    } else {
        callback("Error occurred", null);
    }
}

fetchData(function(error, data){

    if(error){
        console.log(error);
    } else {
        console.log(data);
    }

});

/*
Output:
Data received

Explanation:
Error-first callback pattern use hota hai
*/



// 9. REAL WORLD EXAMPLE

function loginUser(username, callback){

    console.log("User logged in:", username);

    callback(username);
}

function showDashboard(user){

    console.log("Welcome to dashboard,", user);
}

loginUser("pankaj", showDashboard);

/*
Output:
User logged in: pankaj
Welcome to dashboard, pankaj

Explanation:
Login ke baad dashboard show hua
*/