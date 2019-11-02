// Exercises: Variables
// Log something to the console!
console.log("Variables Exercise!!");


// 1a) Create a bank account variable

// Variables are camelcased
// var keyword was the only way to declare variables until 2015
var bankAccount = 10; 
bankAccount = 800;

// New ways to delcare variables after 2015
const family = 5; // cannot reassign values to a constant 
let powerRangers = 6; // very similar to `var` except for scoping 



// 1b) Create a statement that says "My bank account value is $x"
//     - Explore single & double quoted strings
//     - Bonus: Template literals
var bankStatement = "My bank account value is $" + bankAccount + ".";
var bankStatement2 = 'My secret account value is $1000000';

var bankStatement3 = `My bank account value is ${100 + 4}.`;



var singleQuotedString = 'It\'s cold outside';
var nonEscapedString1 = "It's cold outside";
var doubleQuotedString = "Then Karim said, \"I love JavaScript!\""
var nonEscapedString2 = 'Then Karim said, "I love JavaScript!"'




// 2) Math'ing! We follow the rules of BEDMAS
var sum = 10 + 4;
var difference = 100 - 50;
var product = 3 * 2;
var quoitent = 10 / 5;

var number = 10 * (5 + 2); // => 52




// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their age based on the stored values.
// Output them to the screen like so: "They are NN years old.", substituting the values.
var currentYear = 2019;
var birthYear = 1942;
var age = currentYear - birthYear;
console.log(`They are ${age} years old.`);


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
var currentAge = 15;
var maximumAge = 105;
var amountPerDay = 10;
console.log(`You will need ${((maximumAge - currentAge) * 365) * 10} to last until the ripe old age of ${maximumAge}`);




// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

// (0°C × 9/5) + 32 = 32°F
var celcius = 20;
var cToF = (celcius * 9 / 5) + 32;
console.log(`${celcius}°C is ${cToF}°F`);

// (32°F − 32) × 5/9 = 0°C
var fahrenheit = 132;
var fToC = (fahrenheit - 32) * 5 / 9;
console.log(`${fahrenheit}°F is ${Math.round(fToC)}°C`)






