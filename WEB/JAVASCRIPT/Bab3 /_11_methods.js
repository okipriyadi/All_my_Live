/*
First off, a method is, for all intents and purposes, a function. The difference between labeling
something a function versus a method is about code organization. Earlier in the chapter, there
is a section about objects in JavaScript, and I mentioned that anything could be saved into an
object, including functions. When this happens, when a function is saved inside an object, it
is referred to as a method . That’s why things like the JavaScript method alert() that we have
been using throughout this chapter is called a method even though it looks exactly like a func-
tion call.

Although JavaScript created the alert() method, you can also create methods, and it’s totally
contingent on how you choose to organize your code. In Chapter 9 , “Code Organization,” you
will get into code organization in more depth, but for now it is important to note that when
something is native to JavaScript or built into an external library, it’s usually called a method.
Listing 3.8 illustrates how you would define your own method.
*/

/* defining your object aka naming this group of functions */
var getInformation = {
	/* first method (function inside an object) is called "names" */
	" names": function () {
							"use strict";
							alert("get the names");
						   },
						   
	/* second method is called "checkForTim" */
	"checkForTim": function () {
								"use strict";
								alert("checking for tim");
								}
};

/* get the names on load */
window.addEventListener("load", getInformation.names, false);

/* check for Tim on click */
document.addEventListener("click", getInformation.checkForTim, false);