// Exercises: Arrays
console.log("Arrays!!!");

// Create an array, store it in a variable
                                                                // 0      1     2
var friends = ['pikachu', 'squirttle', 'charmander', 105, true, [null, 'hello', 5]];
               // 0            1            2         3    4             5

// Getting or accessing values from our array
// Say the name of our array with its position number
friends[3] // => 105
friends[5][1] //=> 'hello' 


// Setting a new value
// To change/overwrite an existing value:
friends[1] = 'charizard';


// To add NEW values I have two options:
// Option 1: through its position #
friends[friends.length] = 'boop';
friends[friends.length] = 'poop';
friends[friends.length] = 'toop';

friends[friends['length']] = 'betty';


// Option 2: use the Push function
friends.push('last!');


// Tell us how many items are in an array
friends.length




// EXERCISE: Your top movies

// Create an array that contains the titles of a few of your favourite movies.
var movies = [
	'mean girls', 
  'pokemon the movie', 
  'high school musical 3', 
  'lion king', 
	'big hero 6',
  'item',
];


// Print the amount of movies in the array
movies.length


// Select the movie that you saw most recently from the array and store that into a variable.
var mostRecentlyWatched = movies[2];

// Log the sentence to the console: "The most recent movie I saw was <movie>"
console.log(`The most recent movie I saw was ${mostRecentlyWatched}!!`);



// EXERCISE: Applying loops to Arrays
// Log the sentence to the console for EVERY movie in your list:
// "One of my top favourite movies is: <movie>"
// Hint: You'll end up with 4-5 console.log statements


// Using a for loop, perform the same operation as above


console.log(`One of my top favourite movies is: ${movies[0]}`);
console.log(`One of my top favourite movies is: ${movies[1]}`);
console.log(`One of my top favourite movies is: ${movies[2]}`);
console.log(`One of my top favourite movies is: ${movies[3]}`);
console.log(`One of my top favourite movies is: ${movies[4]}`);

for (var i = 0; i < movies.length; i++) {
  console.log(`One of my top favourite movies is: ${movies[i]}`);
}

// Function Declaration
function printMovie(movie) {
  console.log(`One of my top favourite movies is: ${movie}`);
}

// Function Definition
var printMovie2 = function(movie) {
  console.log(`One of my top favourite movies is: ${movie}`);
}

movies.forEach(
  // Anonymous Function
  function(movie) {
    console.log(`One of my top favourite movies is: ${movie}`);
  }
);

var numbers = [2, 5, 6, 10];

var thousandedArray = numbers.map(function(num) {
  return num * 1000;
});





