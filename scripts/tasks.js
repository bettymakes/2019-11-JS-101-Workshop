console.log("We're in the home stretch!!");

// ============================================
// ✏️ Let's practice the building blocks
// ============================================
// 🧠 Before we get started on making the ToDo Application work,
// we'll need to work on some final fundamental concepts like
// Browser Events. 
//
// 🧠 This is where you'll begin to see the concepts in 
// the JS Exercises start coming together
// 
// 🧠 Most importantly, the code we'll be writing in this section
// is for 🏀 Practice ONLY 🏀. That means, we'll be commenting out
// the code after we write it. 
//
// 🚫 TL;DR
// Comment out the previous exercise when starting the next one


// 🏀 1. Get the browser to write to the console when someone clicks anywhere in the document
// document.addEventListener('click', function() {
// 	alert("I've been clicked");
// });


// 🏀 2. Change the text of the h1 that displays the page title when someone clicks anywhere in the page
// document.addEventListener('click', function() {
// 	document.getElementById('heading').innerText = "Hacked!!!";

	// You can also change the HTML inside of an element
	// document.getElementById('heading').innerHTML = "<p>Hacked!!!</p>";
// });


// 🏀 3. Display an alert printing the name of the task
//       when someone clicks any of the tasks
// Hint: We'll need to use `this` keyword
// Bonus: Come back and look at the `event` object, time permitting
// document.getElementsByClassName('task')[0].addEventListener('click', fn)
// document.getElementsByClassName('task')[1].addEventListener('click', fn)
// document.getElementsByClassName('task')[2].addEventListener('click', fn)
// document.getElementsByClassName('task')[3].addEventListener('click', fn)
// document.getElementsByClassName('task')[4].addEventListener('click', fn)

// document.querySelectorAll('.task').forEach(
// 	function(task) {
// 		task.addEventListener('click', function(event) {
// 			console.log("clicked!");
// 			console.log(this.innerText);
// 			console.log(event);
// 			console.log('this:', this);
// 		});
// 	}
// );


// 🏀 4 => (Refactor code above)
// 4a. Write a function that displays an alert
// 4b. Run the function only when any task is clicked





// ============================================
// 🏁 Let's get down to business
// ============================================

// ✅ Now that we've put all the building blocks together ...
// Let's start working on the ToDo Application and get it
// to do what we set out to accomplish:
// 1️⃣ Application marks tasks as complete when clicked
// 2️⃣ Application can mark tasks as incomplete when clicked again
// 3️⃣ Application updates the count of completed tasks


// ✅ Write a function that updates the counter based on 
//    which tasks are completed
// Hint: Start with pseudo-coding

// 1. Figure out the total number of tasks (store it in a variable)
// 2. Figure out the total number of completed tasks
		// 2b. Find the elements with `is-complete` class
// 3. Subtract completed from total to get the remaining number of tasks
// 4. Display the remaining number
		// 4a. Find the element with id `counter`
		// 4b. Change the innerText to be the remaining number

function calculateRemainingTasks() {
	var totalTasks = document.getElementsByClassName('task').length;
	var completedTasks = document.getElementsByClassName('is-complete').length;
	var remainingTasks = totalTasks - completedTasks;

	document.getElementById('counter').innerText = remainingTasks;
}


// ✅ Run the function you just wrote to update the counter
calculateRemainingTasks();


// ✅ Add an event listener to each of the tasks which will 
//    toggle the 'is-complete' css class when clicked
// Hint: Start with pseudo-coding
// 1. Find all the task elements (they have a class of task)
// 2. Iterate/loop over all the tasks and add event listener
		// 2a. We will add a CLICK event listener
		// 2b. In the function, we should ask:
					// IF the task has is-complete, remove the class
					// ELSE add the class is-complete 

document.querySelectorAll('.task').forEach(function(task) {
	task.addEventListener('click', function() {
		if (this.classList.contains('is-complete')) {
			this.classList.remove('is-complete');
		} 
		else {
			this.classList.add('is-complete');
		}

		calculateRemainingTasks();
	});
});


// REFERENCE: SAME EXECUTION BUT WITH A FOR LOOP 
// var allTasks = document.querySelectorAll('.task');

// for(var i = 0; i < allTasks.length; i++) {
// 	document.querySelectorAll('.task')[i].addEventListener('click', function() {
// 		if (this.classList.contains('is-complete')) {
// 			this.classList.remove('is-complete');
// 		} 
// 		else {
// 			this.classList.add('is-complete');
// 		}
// 	});	
// }




// ============================================
// 🤔 Other thoughts. Keep going!
// ============================================
// 🔘 How can you add more items to the list?
// 🔘 Instead of marking the items as `incomplete`, can
//    we just delete the task altogether?
// 🔘 Instead of counting the remaining tasks, can we count
//    how many tasks we've completed?


// ============================================
// 📝 Final notes
// ============================================
// How do we feel? What have we learned?
// - A lot! Our brains hurt!! 
// - Challenge: Go back and review our code in a few days 
//   from now, you'll be surprised how much more makes sense

// Where else can we write our code?
// - Use any text editors (e.g. Sublime, Atom, VS Code)
// - Create the files on your computer, the file extensions matter:
// - HTML extension => .html        (eg. about.html)
// - CSS extension => .css          (eg. about.css)
// - JavaScript extension => .js    (eg. about.js)