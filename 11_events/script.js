// JAVASCRIPT EVENTS
// Event = jab user koi action karta hai
// Example:
// click
// typing
// mouse move
// form submit



// 1. Inline Event Example
// HTML me directly likhte hain
// <button onclick="alert('Clicked')">

// Ye method modern development me avoid karte hain



// 2. addEventListener (Best Method)

let button = document.getElementById("btn");
button.addEventListener("click", function(){
console.log("Button clicked");

});

/*
Output:
Button clicked (console me)

Explanation:
User button click karega to function run hoga
*/



// 3. Event Object

button.addEventListener("click", function(event){
console.log(event);
});

/*
Explanation:
event object me event ki sari details hoti hain
Example:
mouse position
target element
event type
*/



// MOUSE EVENTS
button.addEventListener("mouseover", function(){
console.log("Mouse over button");
});

/*
Mouse button par aayega to message print hoga
*/



button.addEventListener("mouseout", function(){
console.log("Mouse left button");
});



button.addEventListener("dblclick", function(){
console.log("Button double clicked");
});



// KEYBOARD EVENTS

let input = document.getElementById("inputBox");
input.addEventListener("keydown", function(e){
console.log("Key pressed:", e.key);
});

/*
Output example:
Key pressed: a
Key pressed: b
*/



input.addEventListener("keyup", function(){
console.log("Key released");
});



// FORM EVENTS

let form = document.getElementById("form");
form.addEventListener("submit", function(e){
e.preventDefault();
console.log("Form submitted");
});

/*
Explanation:
preventDefault page reload hone se rokta hai
*/



// EVENT BUBBLING  (most important concept)

let list = document.getElementById("list");
list.addEventListener("click", function(){
console.log("UL clicked");

});



document.body.addEventListener("click", function(){
console.log("Body clicked");

});

/*
Explanation:

Agar LI click kare
Event pehle LI
phir UL
phir BODY tak bubble karega

Isko Event Bubbling bolte hain
*/



// STOP PROPAGATION

button.addEventListener("click", function(e){
e.stopPropagation();
console.log("Button only");

});

/*
Explanation:
Event bubbling ko rok deta hai
*/



// EVENT DELEGATION

list.addEventListener("click", function(e){
console.log(e.target.textContent);

});

/*
Output:
Item 1
Item 2
Item 3

Explanation:
UL par event lagaya
LI automatically handle ho gaye
Ye Event Delegation hai
*/



// REMOVE EVENT LISTENER

function sayHello(){

console.log("Hello");

}

button.addEventListener("click", sayHello);

// remove event

button.removeEventListener("click", sayHello);

/*
Explanation:
removeEventListener se event remove ho jata hai
*/



// Real Web Development Usage

// Events use hote hain:

// Button click actions (login button, submit button)


// Form validation (email validation)



// Keyboard shortcuts (search bar typing)



// Dynamic UI (dropdown menu and modal open close)



// Todo apps ( task add and  task remove)

