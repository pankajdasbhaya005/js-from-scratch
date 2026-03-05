// ARRAYS IN JAVASCRIPT
// Array = ek variable jo multiple values store karta hai



// 1.ARRAY CREATE KARNA

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);

/*
Output:
["Apple","Banana","Mango"]

Explanation:
Array square brackets [] me banta hai
Multiple values ek jagah store kar sakte hain
*/



// 2. ARRAY LENGTH PROPERTY

console.log(fruits.length);

/*
Output:
3

Explanation:
length property total elements count karti hai
*/



// 3. ARRAY INDEX ACCESS

console.log(fruits[0]);
console.log(fruits[2]);

/*
Output:
Apple
Mango

Explanation:
Array indexing 0 se start hoti hai
*/



// 4. MODIFY ARRAY VALUE

fruits[1] = "Orange";

console.log(fruits);

/*
Output:
["Apple","Orange","Mango"]

Explanation:
Index use karke value change kar sakte hain
*/



// 5. ARRAY METHODS



// push → end me element add

fruits.push("Grapes");

console.log(fruits);

/*
Output:
["Apple","Orange","Mango","Grapes"]
*/



// pop → last element remove

fruits.pop();

console.log(fruits);

/*
Output:
["Apple","Orange","Mango"]
*/



// unshift → start me element add

fruits.unshift("Pineapple");

console.log(fruits);

/*
Output:
["Pineapple","Apple","Orange","Mango"]
*/



// shift → first element remove

fruits.shift();

console.log(fruits);

/*
Output:
["Apple","Orange","Mango"]
*/



// 6. CONCAT METHOD

let arr1 = [1,2];
let arr2 = [3,4];

let merged = arr1.concat(arr2);

console.log(merged);

/*
Output:
[1,2,3,4]

Explanation:
2 arrays ko join karta hai
*/



// 7. SLICE METHOD

let numbers = [10,20,30,40,50];

let part = numbers.slice(1,4);

console.log(part);

/*
Output:
[20,30,40]

Explanation:
slice(start,end)
end include nahi hota
*/



// 8. SPLICE METHOD

let nums = [1,2,3,4,5];

nums.splice(2,1);

console.log(nums);

/*
Output:
[1,2,4,5]

Explanation:
index 2 se 1 element remove
*/



// 9. INCLUDES METHOD

let colors = ["red","blue","green"];

console.log(colors.includes("blue"));

/*
Output:
true

Explanation:
check karta hai element exist karta hai ya nahi
*/



//10. INDEXOF METHOD

console.log(colors.indexOf("green"));

/*
Output:
2

Explanation:
element ka index return karta hai
*/



// 11. JOIN METHOD

let words = ["Hello","World"];

console.log(words.join(" "));

/*
Output:
Hello World

Explanation:
array ko string me convert karta hai
*/



// 12. LOOP THROUGH ARRAY

let numsArray = [10,20,30,40];



// FOR LOOP

for(let i = 0; i < numsArray.length; i++){
    console.log(numsArray[i]);
}

/*
Output:
10
20
30
40
*/



// FOR OF LOOP

for(let value of numsArray){

    console.log(value);

}

/*
Output:
10
20
30
40
*/



// FOR IN LOOP

for(let index in numsArray){

    console.log(index, numsArray[index]);

}

/*
Output:
0 10
1 20
2 30
3 40
*/



// WHILE LOOP

let i = 0;

while(i < numsArray.length){

    console.log(numsArray[i]);
    i++;

}



/*
Output:
10
20
30
40
*/



// 12. ARRAY.MAP()

let numbers2 = [1,2,3,4];
let doubled = numbers2.map(function(num){
    return num * 2;
});

console.log(doubled);

/*
Output:
[2,4,6,8]

Explanation:
map array ke har element par function apply karta hai
*/



// 14. FILTER METHOD

let nums3 = [10,15,20,25];
let even = nums3.filter(function(num){
    return num % 2 === 0;
});

console.log(even);

/*
Output:
[10,20]

Explanation:
filter condition true wale elements return karta hai
*/



// 15. REDUCE METHOD

let nums4 = [1,2,3,4];
let sum = nums4.reduce(function(total, num){
    return total + num;
},0);

console.log(sum);

/*
Output:
10

Explanation:
reduce array ko ek single value me convert karta hai
*/



// 16. ARRAY.FROM()

let str = "Hello";
let arr = Array.from(str);
console.log(arr);

/*
Output:
["H","e","l","l","o"]

Explanation:
string ko array me convert karta hai
*/

// 17. ARRAY.ISARRAY()

console.log(Array.isArray(fruits));
console.log(Array.isArray(str));

/*
Output:
true
false

Explanation:
check karta hai variable array hai ya nahi
*/  
