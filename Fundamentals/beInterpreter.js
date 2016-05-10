// Problem 1
console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable)
}
console.log(first_variable);

//Problem 1(predictions and rearranged code)

var first_variable;  // var hello declaration floats to the top

function firstFunc() {					// function declaration/assignment floats to the top under variable declarations				
  first_variable = "Not anymore!!!";
  console.log(first_variable)
}										//prints anything because function didn't execute
console.log(first_variable);			//>undefined
first_variable = "Yipee I was first!";	//stores a value to the variable
console.log(first_variable);			//>"Yipee I was first"

                           

// Problem 2
var food = "Chicken";  		
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // NOTE: I'M TRYING TO TRICK YOU HERE!!!!
}
eat();						
console.log(food);			
                           

// Problem 2 (predictions and rearranged code)
var food;					// var hello declaration floats to the top
var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // it declares var food again inside function but does nothing until a console.log after it.
}
eat();						// prints "half-chicken" 
console.log(food);			// prints "Chicken" because it console in global scope
                       

// Problem 3
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);

// Problem 3   (predictions and rearranged code)
var new_word;				// var hello declaration floats to the top
function lastFunc() {		// function declaration/assignment floats to the top under variable declarations				
  new_word = "old";
}							// does nothing until we call it lastFunc();
var new_word = "NEW!";		

console.log(new_word);		//prints > NEW



 