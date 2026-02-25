// Ye line browser ke console mein message print karti hai
// Console dekhne ke liye: Right click → Inspect → Console tab
console.log("JavaScript successfully connected!");


// Ye line ek popup alert show karti hai jab page load hota hai
// Alert ek built-in function hai JavaScript ka
alert("Welcome! JavaScript is running.");


// Ab hum ek function bana rahe hain
// Function ek reusable block hota hai jo tab chalega jab hum use call karenge
function changeContent() {

    // document ka matlab hai pura HTML page
    // getElementById ka matlab hai: jis element ka id diya hai ushe pakad lo
    let heading = document.getElementById("mainHeading");

    // innerText ka matlab hai element ke andar ka text change karna
    heading.innerText = "Heading Changed Successfully!";

    
    // Ab paragraph ko pakad rahe hain
    let paragraph = document.getElementById("para");

    // Paragraph ka text change kar rahe hain
    paragraph.innerText = "JavaScript ne content change kar diya 😎";


    // Ab body ka background color change karte hain
    // document.body matlab pura page ka body section
    document.body.style.backgroundColor = "lightyellow";


    // Console mein bhi message print kar dete hain
    console.log("Button was clicked and content changed.");
}