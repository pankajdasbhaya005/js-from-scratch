
// INSERTING AND REMOVING ELEMENTS IN DOM


// 1. createElement()
let newPara = document.createElement("p");

/*
Explanation:
createElement() se hum naya HTML element create karte hain
Abhi ye sirf memory me bana hai
DOM me add nahi hua
*/

newPara.innerText = "New Paragraph Created";

console.log(newPara);

/*
Output:
<p>New Paragraph Created</p>
*/



// 2. appendChild()
let container = document.getElementById("container");
container.appendChild(newPara);

/*
Explanation:
appendChild() element ko parent ke END me add karta hai

Before:
Paragraph1
Paragraph2

After:
Paragraph1
Paragraph2
New Paragraph
*/



// 3. append()
let anotherPara = document.createElement("p");
anotherPara.innerText = "Another Paragraph";
container.append(anotherPara);

/*
Explanation:
append() bhi element ko end me add karta hai
Difference:
append() multiple elements bhi add kar sakta hai
*/



// 4. prepend()

let firstPara = document.createElement("p");
firstPara.innerText = "First Paragraph Added";
container.prepend(firstPara);

/*
Explanation:
prepend() element ko parent ke START me add karta hai

Result:
First Paragraph Added
Paragraph1
Paragraph2
New Paragraph
*/



// 5. before()

let heading = document.getElementById("heading");
let text = document.createElement("p");
text.innerText = "Paragraph before heading";
heading.before(text);

/*
Explanation:
before() element ke BEFORE add karta hai
*/



// 6. after()

let text2 = document.createElement("p");
text2.innerText = "Paragraph after heading";
heading.after(text2);

/*
Explanation:
after() element ke AFTER add karta hai
*/



// 7. insertAdjacentHTML()
container.insertAdjacentHTML(
"beforeend",
"<p>Inserted using HTML</p>"
);

/*
Explanation:
insertAdjacentHTML HTML string ko DOM me add karta hai

Positions:

beforebegin
afterbegin
beforeend
afterend
*/



// 8. remove()
text2.remove();

/*
Explanation:
remove() element ko DOM se delete karta hai
*/



// 9. removeChild()

let firstChild = container.children[0];
container.removeChild(firstChild);

/*
Explanation:
parent.removeChild(child) se child remove hota hai
*/



// 10. replaceWith()

let replacePara = document.createElement("p");
replacePara.innerText = "Replaced Paragraph";
newPara.replaceWith(replacePara);

/*
Explanation:
replaceWith() ek element ko dusre se replace karta hai
*/