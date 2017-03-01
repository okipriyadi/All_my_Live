/*
Storage
Data storage is one of the main functions of JavaScript; since the early days the community
has been on a quest for the Holy Grail of client-side storage. Because of this, there are a lot of
different ways to store data in JavaScript. Some are specific methods that you will get into later
on in the book, but there are some terms that will help you along the way.

Cache
Cache, in regard to JavaScript, doesn’t necessarily mean browser cache, although browser cache
is vitally important. Caching in a JavaScript file usually refers to variables. When you declare a
variable, it is cached, and you can reference it at any point. This is where you start seeing some
performance implications. Using a variable over and over will perform better than redeclaring
the same string over and over. You can define it once and continuously reference it.
Variables are great for organizing your code, but if you are using a string only once, it may be
better for performance to not save it to a variable. This is part of the constant balancing act you
will have to perform in JavaScript—between making something as high performance as possible
versus making it as maintainable as possible. As far as performance goes, it’s pretty minor, but
still something to consider.

Arrays
In a nutshell, arrays are lists. They can get very complicated when you get deeply into them,
but on the surface they are no more than a list. Lists can be simple and straightforward or
complicated and nested (multidimensional arrays). Arrays are one of the most flexible data
storage formats in JavaScript, and they are very common in Ajax calls because data is often
stored in an array format of some kind for easy JavaScript parsing. Listing 3.5 shows an array in
its most basic form.

Cookies
Cookies are used on both the server and the client (different kinds of cookies—think oatmeal
vs. chocolate chip; sure, they’re both technically cookies but they’re very different monsters).
They allow us to store data locally in the user’s browser to be accessed at a later time. This
is starting to become a dated way for storing data, but it does have full support in all major
browsers. It’s currently a setting that can be turned off by the user, so it’s best to not rely too
much on this type of storage for critical issues.

JavaScript Object Notation (JSON)
JSON is another data format that can be easily integrated with JavaScript; it’s often used with
external services you are consuming within your JavaScript. Generally speaking, JSON will live
in its own file and often on another server completely. It is currently the most common format
for API services, and it was chosen because the human eye very easily reads it. It was originally
thought to be an alternative to XML in data exchanges and quickly took over.
JSON is favored heavily over XML because it’s very lightweight and can be accessed across
domains for easy remote Ajax calls. Although it is native to JavaScript, it is platform indepen-
dent and can be used with any technology on the client or server side to transfer data.


Objects
Rather than saying an object is a “thing” that’s made up of other things—because that isn’t
very helpful—let’s right off the bat compare it to my grandmother. In JavaScript, my grand-
mother would be considered an object (not in real-life, but definitely in JavaScript) and she has
traits or properties. She has a first name, a last name, and a nickname, and those are also all
objects of the parent object “ grandmother .”

You can see my grandmother depicted in JavaScript object terms in example below . Notice the
parent declaration of “ grandmother ” and the nested objects of “ first-name ”, “ last-name ”,
and “ nickname .” Everything in JavaScript is an object, and when you start aligning your code
with that assumption, a lot of the concepts become more clear and easier to consume.
*/

/* store family member names in an array */
var family = [
			"joan", /* numbering starts at "0" */
			"charlie",
			"peter",
			"christine",
			"anna",
			"tim" /* this is me! */
			];


/*saving data to JSON*/
{
"family" : [
			"joan",
			"charlie",
			"peter",
			"christine",
			"anna",
			"tim"
		   ]
}


/* store extra information about my grandmother in an object */
var grandmother = {
				"first-name": " anna",
				"last-name": "carroll",
				"nickname": "ma"
				};
				
/*Anything can be stored in an object; it could be a string, like “ anna ”, or even an entire func-
tion, like getTheMail() . That is the first step in creating object-oriented JavaScript and devel-
oping a code organization pattern.*/

