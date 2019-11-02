// Exercises: simple loops
console.log("Loops!!");

// Introducing the FOR loop! 
// for(initial state; condition; iterator/incrementer)
// Print out numbers 0 to 9

// Ways to increment
// i = i + 1;
// i += 1;
// i++;

for (var i = 0; i <= 9; i++) {
	console.log(i);
}




// EXERCISE: Multiplication Tables

// Write a "for" loop that will iterate from 0 to 10. For each iteration of the 
// for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// 0 * 9 = 0
// 1 * 9 = 9
// 2 * 9 = 18
// 3 * 9 = 27
// 4 * 9 = 36

for (var i = 0; i <= 10; i++) {
  console.log(`${i} * 9 = ${i * 9}`);
}


// EXERCISE: The even/odd reporter

// Write a "for" loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is even or odd, and report that to the screen 

// This formula checks for even numbers => <number> % 2 === 0 
// This formula checks for odd numbers => <number> % 2 === 1
// Let's understand why!

for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is an even number`);
  }
  else {
    console.log(`${i} is an odd number`);
  }
}

for (var i = 0; i <= 20; i++) {
  i % 2 ?
    console.log(`${i} is an odd number`) 
   : console.log(`${i} is an even number`);
}


// WHILE LOOPS
var num = 0;

while (num < 10) {
  console.log(num);
  
  num++;
}




