/*
The JavaScript console is a feature that can save your life as a designer or developer. The actual
“console” is something that you will use in a browser, but I consider it something built into the
language, so here we are, under this heading instead of the next one.
The console does some things automatically, such as monitor Ajax calls and output error codes
with line numbers to help you out. You can see the URL of an Ajax request and pick apart
any data that was being passed through. That can be immensely helpful for any debugging
assignment.
The console can also be manually worked with from inside your JavaScript file. It can be useful
for outputting data or locating points of failure in your code. Because JavaScript runs from the
top of the file (generally) to the bottom, it can be very easy to pinpoint the exact spot where
a script may be breaking. In Listing 2.4 you can see how to use the console to output various
information.
*/

/* output a basic message to the console */
console.log("hello there");

/* output a variable in the console */
var msg = "this is from a variable";
console.log(msg);