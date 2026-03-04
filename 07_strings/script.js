
// STRINGS IN JAVASCRIPT
// String = text data



// 1. CREATING STRINGS

let name = "Pankaj";
let city = 'jsg';

console.log(name);
console.log(city);

/*
Output:
Pankaj
jsg

Explanation:
Strings double quotes ya single quotes dono me likh sakte hain
*/



// 2. STRING PROPERTY (length)

let language = "JavaScript";

console.log(language.length);

/*
Output:
10

Explanation:
length property string ke characters count karti hai
*/



// 3. STRING CONCATENATION

let firstName = "Pankaj";
let lastName = "Dasbhaya";

let fullName = firstName + " " + lastName;

console.log(fullName);

/*
Output:
Pankaj Dasbhaya

Explanation:
+ operator se strings join hoti hain
*/



// 4. TEMPLATE LITERALS (Modern Method)

let age = 20;

let message = `My name is ${firstName} and I am ${age} years old`;

console.log(message);

/*
Output:
My name is Pankaj and I am 20 years old

Explanation:
Backticks (` `) use karte hain
${} ke andar variables likhte hain
*/



// 5. ESCAPE SEQUENCE

let text1 = "Hello \"World\"";

console.log(text1);

/*
Output:
Hello "World"

Explanation:
\" quotes ko escape karta hai
*/


let text2 = "Line1\nLine2";

console.log(text2);

/*
Output:
Line1
Line2

Explanation:
\n new line create karta hai
*/



// 6.STRING SLICING

let word = "JavaScript";

let part = word.slice(0, 4);

console.log(part);

/*
Output:
Java

Explanation:
slice(start, end)
start included
end excluded
*/



// 7. REPLACE METHOD

let sentence = "I like Java";

let newSentence = sentence.replace("Java", "JavaScript");

console.log(newSentence);

/*
Output:
I like JavaScript

Explanation:
replace old text ko new text se change karta hai
*/



// 8. REMOVE WHITE SPACES

let text = "   Hello World   ";

console.log(text.trim());

/*
Output:
Hello World

Explanation:
trim() start aur end ke extra spaces remove karta hai
*/



// 9. CONVERT CASE

let lang = "javascript";

console.log(lang.toUpperCase());
console.log(lang.toLowerCase());

/*
Output:
JAVASCRIPT
javascript

Explanation:
toUpperCase → capital letters
toLowerCase → small letters
*/



// 10. STRING INDEX

let fruit = "Mango";

console.log(fruit[0]);
console.log(fruit[2]);

/*
Output:
M
n

Explanation:
String array jaisa behave karta hai
Index 0 se start hota hai
*/



// 11. includes()

let sentence2 = "JavaScript is powerful";

console.log(sentence2.includes("powerful"));

/*
Output:
true

Explanation:
check karta hai word string me exist karta hai ya nahi
*/



// 12. startsWith / endsWith

let site = "google.com";

console.log(site.startsWith("google"));
console.log(site.endsWith(".com"));

/*
Output:
true
true

Explanation:
String start ya end check karta hai
*/



// 13.SPLIT METHOD

let words = "HTML CSS JavaScript";

let arr = words.split(" ");

console.log(arr);

/*
Output:
["HTML", "CSS", "JavaScript"]

Explanation:
split string ko array me convert karta hai
*/

//14. web dev example
// Login validation:

let username = "   pankaj   ";

username = username.trim();

console.log(username);

// output: pankaj
// Form validation me bohot use hota hai.