// Exercises: Functions
// Create a function that adds two numbers together
// The function will log the result to console
function add(num1, num2) {
	return num1 + num2;
}

var sum = add(9, 50);


// EXERCISE: Simple Greeting

// Write a function that when called, simply logs your name to the screen like so "Hello XYZ!"
// Don't forget to execute the function
function simpleGreeting() {
  console.log("Hello Betty");
}

simpleGreeting();


// EXERCISE: Universal Greeting
// Write a function that takes one argument and logs anyone's name like so: "Hello XYZ!". 
function universalGreeting(name) {
  // console.log(`Hello ${name}!!`);
  return `Hello ${name}!!`;
}

var greetKarim = universalGreeting("Karim");
console.log(`So nice to meet you! ${greetKarim}`);

universalGreeting("Karim");
universalGreeting("Aman");
universalGreeting("Betty");


// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// The function should calculate the 2 possible ages based on those years.
// It should output the result to the screen like so: "You are NN years old."
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in!
function calculateAge(birth, current) {
  console.log(`You are ${current - birth} years old.`);
}
calculateAge(1960, 2019);
calculateAge(2001, 2019);


function bonusAge(birth) {
  var today = new Date();
  var thisYear = today.getFullYear();

  console.log(`You are ${thisYear - birth} years old.`);
}
bonusAge(1960);
bonusAge(2001);



