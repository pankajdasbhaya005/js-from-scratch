// LOOPS IN JAVASCRIPT
// Loop ka matlab: kisi kaam ko baar baar repeat karna



// 1. FOR LOOP

// Syntax:
// for (initialization; condition; increment/decrement) {
//     code
// }

for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

/*
Explanation:

let i = 1     → starting value
i <= 5        → jab tak condition true hai tab tak loop chalega
i++           → har baar 1 se increase hoga

Output:
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
*/



// 2. WHILE LOOP

// Jab tak condition true rahegi tab tak loop chalega

let count = 1;

while (count <= 5) {
    console.log("While Loop:", count);
    count++;  // Important: warna infinite loop ho jayega
}

/*
Explanation:
Pehle condition check hoti hai
Phir code chalta hai

Output:
While Loop: 1
While Loop: 2
While Loop: 3
While Loop: 4
While Loop: 5
*/



// 3. DO-WHILE LOOP

// Ye kam se kam 1 baar zarur chalega
// Pehle code run hota hai, baad me condition check hoti hai
// isko bahat kam use kiya jata hai 
let num = 1;

do {
    console.log("Do While:", num);
    num++;
} while (num <= 5);

/*
Output:
Do While: 1
Do While: 2
Do While: 3
Do While: 4
Do While: 5
*/



// 4. FOR IN LOOP

// Ye mainly objects ke liye use hota hai
// Ye object ke keys ko iterate karta hai

let person = {
    name: "pankaj",
    age: 20,
    city: "jsg"
};

for (let key in person) {
    console.log(key, ":", person[key]);
}

/*
Explanation:
key = property name
person[key] = us key ki value

Output:
name : pankaj
age : 20
city : jsg
*/



// 5. FOR OF LOOP

// Ye arrays ke liye use hota hai
// Ye direct values deta hai

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

/*
Explanation:
fruit variable me direct array ki value aati hai

Output:
Fruit: Apple
Fruit: Banana
Fruit: Mango
*/



// EXTRA: BREAK & CONTINUE

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;  // 3 skip karega
    }

    console.log("Continue Example:", i);
}

/*
Output:
Continue Example: 1
Continue Example: 2
Continue Example: 4
Continue Example: 5
*/

for (let i = 1; i <= 5; i++) {

    if (i === 4) {
        break;  // loop yahin ruk jayega
    }

    console.log("Break Example:", i);
}

/*
Output:
Break Example: 1
Break Example: 2
Break Example: 3
*/