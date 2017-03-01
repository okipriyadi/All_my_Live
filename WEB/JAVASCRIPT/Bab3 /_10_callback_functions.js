/*
When a function is passed into another function as an argument, it’s called a callback function.
The function can be something you define, or it can be something native to JavaScript already.
Functions can be very helpful in separating your logic and keeping your codebase as reusable
as possible. Anonymous functions can also be callback functions. They’re a little difficult to
explain.
*/

//an Example of a Function Calling a Function (callback)
window.addEventListener("load", 
						function (){
									alert("call back function");
									}, 
						false });
						
