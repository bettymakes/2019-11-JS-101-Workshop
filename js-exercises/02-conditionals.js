// Exercises: conditional logic
console.log("Second exercise!!");

// Weather Forecaster
// If the temp is greater than 30 deg, "It's too hawt 🔥!"
// If the temp is greater than 0 deg, "It's just right!"
// If the temp is 0 or less, "Brr! It's cold!"

// >  greater than
// <  less than
// >= great than or equal to
// >= less than or equal to

var temp = 0;

if (temp >= 30) {
	console.log("It's too hawt!");
}
else if (temp >= 0) {
	console.log("It's just right!");
}
else {
	console.log("Brr! It's cold!");
}

// Checking for equality
// Using == is loose equality, it will change the type through type coersion and then check the value
// "7" == 7 => true 

// Using === is strict equality, it checks type and value
// "7" === 7 => false

var date = "sunday";
if ("sunday") {
	console.log("The weekend is ending!!!");
}

// Falsey values in javascript
// 0
// ""
// false
// null
// undefined

var value;
if (temp > 3) {
	value = "truthy";
} else {
	value = "falsey";
}

// Ternary operater
// MDN Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
var value = temp > 3 ? "truthy" : "falsey"; 

// ANDs and ORs
// &&  and
// ||  or


// EXERCISE: What number's bigger?

// Store your age in a variable
// Store your best friend's age in a variable
// Write an if/else statement that logs a message stating who is older
var age = 85;
var bestieAge = 103;

if (age > bestieAge) {
	console.log("I'm older than my bestie");
}
else {
	console.log("My bestie is older than me");
}

age > bestieAge ? 
  console.log("I'm oldest!") 
  : console.log("Bestie oldest!");

// Notes for React World:
// var headingMarkup = someCondition ?
//   (
//     <div>
//       <h1> fjdsljfkdsa </h1>
//     </div>
//   ) :
//   null;


// coniditional ? whateverexpressionIfTrue : whateverexpressionIfFalse;

// EXERCISE: Who's allowed on the ride?

// Store a rider's age in a variable
// Store the rider's height (in cm) in a variable
// Write a "compound" if/else statement that checks if the rider meets the minimum requirements and logs a message to the console
// Rider's need to be 150cm tall, and at least 13 years of age

const HEIGHT_MINIMUM = 150;
const AGE_MINIMUM = 13;

const riderAge = 15;
var riderHeight = 120;

if (riderAge > AGE_MINIMUM) {
  if (riderHeight > HEIGHT_MINIMUM) {
    console.log("You can ride!");
  } 
  else {
    console.log("Sorry! Too short");
  }
} 
else {
  console.log("Sorry! Too young.")
}


if((riderAge > AGE_MINIMUM) && (riderHeight > HEIGHT_MINIMUM)) {
  console.log("You can ride");
} 
else {
  console.log("You can't ride");
}

((riderAge > AGE_MINIMUM) && (riderHeight > HEIGHT_MINIMUM)) ?
  console.log("You can ride")
  : console.log("You can't ride");



// Values reimagined in objects
// const HEIGHT_MINIMUM = 150;
// const AGE_MINIMUM = 13;

// const MINIMUM_REQUIREMENT = {
//   height: 150,
//   age: 13,
// };

// const riderAge = 15;
// var riderHeight = 120;

// var riderDetails = {
//   age: 15,
//   height: 120,
// };



