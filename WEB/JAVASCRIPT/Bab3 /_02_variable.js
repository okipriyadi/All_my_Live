/*
Local Variables
Local variables are defined within a function and can be used only within that function. 
That means that you can’t declare a local variable inside function A and use it in function B 
because they are contained inside the function in which they were defined. 
Local variables are always prefaced using “ var ” when they’re defined.
belo example shows a list of basic variables defined. These are empty variables right now, but we’ll
be filling them up pretty soon.
*/

/*a list of empty variables*/
var familyMember1;
var familyMember2;
var familyMember3;
var familyMember4;
var familyMember5;
var familyMember6;

/*a list of variables with string value*/
familyMember1 = "joan";
familyMember2 = "charlie";
familyMember3 = "peter";
familyMember4 = "christine";
familyMember5 = "anna";
familyMember6 = "tim"; /* this is me */


/*When variables are empty like that, it’s called initializing a variable, and it is necessary from
time to time, as you will see later in this chapter when you get into loops.*/

/* GLOBAL VARIABEL
Another kind of variable you may come across is a global variable. Global variables are well
named because they can be used globally throughout your JavaScript. They can be defined
three different ways:
1. Defining them with “ var ” outside a function
2. Adding something directly to the window object
3. Defining them anywhere without using “ var ”
Something to consider when using global variables is to keep track of the names so you don’t
have any duplicates. This is especially important when using a large amount of JavaScript to
prevent naming collisions. Listing 3.2.1 shows you how to set up global variables. Use them
sparingly.*/

/* with var outside a function */
var titleOfApplication;

/* attached to the window object */
window.titleOfApplication

/* global from inside a function */
titleOfApplication;

/*Global variables like this are generally used for things you know for a fact will never change
or something that needs to be filtered through an entire JavaScript file, like a directory URL or
a special prefix you may be using. They can be handy on smaller projects but quickly become
difficult to work with as an application grows larger, so be sure to use them sparingly.*/

