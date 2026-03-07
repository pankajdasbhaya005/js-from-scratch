
// DOCUMENT OBJECT MODEL (DOM)

// DOM ka matlab:
// Browser HTML ko ek tree structure me convert karta hai

// HTML → DOM tree

// Example structure:

// document
//   |
//  html
//   |
//  body
//   |
//  div
//   |
// paragraphs




// 1. SELECT ELEMENTS
// getElementById

let heading = document.getElementById("heading");
console.log(heading);

/*
Output:
<h1 id="heading">JavaScript DOM</h1>

Explanation:
ID se element select kiya
*/


// querySelector
let firstPara = document.querySelector(".text");
console.log(firstPara);

/*
Output:
First paragraph element
*/



// querySelectorAll
let allPara = document.querySelectorAll(".text");
console.log(allPara);

/*
Output:
NodeList(3)
*/




// 2.CHANGE CONTENT

heading.innerText = "DOM Manipulation";

/*
Explanation:
innerText text change karta hai
*/




// 3. CHANGE HTML

heading.innerHTML = "<i>DOM Manipulation</i>";

/*
Explanation:
HTML bhi change kar sakte hain
*/




// 4.CHANGE CSS

heading.style.color = "blue";
heading.style.fontSize = "40px";

/*
Explanation:
JavaScript se CSS change kar sakte hain
*/




// 5. CHILDREN ELEMENTS

let container = document.getElementById("container");

console.log(container.children);

/*
Output:
HTMLCollection(3)

Explanation:
container ke andar ke sab child elements
*/




// first child element

console.log(container.firstElementChild);

/*
Output:
First paragraph
*/



// last child element

console.log(container.lastElementChild);

/*
Output:
Third paragraph
*/




// 6. PARENT ELEMENT

let para = document.querySelector(".text");

console.log(para.parentElement);

/*
Output:
div container

Explanation:
parentElement se parent milta hai
*/




// 7.SIBLINGS

let secondPara = document.querySelectorAll(".text")[1];

console.log(secondPara.previousElementSibling);

/*
Output:
First paragraph
*/


console.log(secondPara.nextElementSibling);

/*
Output:
Third paragraph
*/





// 8. CREATE NEW ELEMENT

let newPara = document.createElement("p");

newPara.innerText = "New Paragraph Added";

container.appendChild(newPara);

/*
Explanation:
createElement new element banata hai
appendChild DOM me add karta hai
*/





// 9. REMOVE ELEMENT

newPara.remove();

/*
Explanation:
element remove karta hai
*/




// 10.EVENTS

let button = document.getElementById("btn");

button.addEventListener("click", function(){

console.log("Button clicked");

});

/*
Output:
Button clicked (console me)

Explanation:
User click karega to function run hoga
*/



// BOM (Browser Object Model)

// DOM → HTML ko control karta hai
// BOM → browser ko control karta hai

// current page URL
console.log(window.location.href);

// alert box
window.alert("Hello");

// browser width
console.log(window.innerWidth);

// browser height
console.log(window.innerHeight);



// (A)Real Web Dev Usage

//--- DOM use hota hai:

// 1.Form Validation
// username input check

// 2.Dynamic UI
// cart items add/remove

//3. React internally DOM handle karta hai
// React ka concept:
// Virtual DOM