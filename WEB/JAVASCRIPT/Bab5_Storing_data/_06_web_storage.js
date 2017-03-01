/*
In HTML5 you have access to two new storage objects: localStorage and sessionStorage .
These objects are paired with three methods: setItem , getItem , and removeItem . Let’s take a
look at them individually.

setItem
The setItem method takes two arguments. The first is the equivalent of a variable label, or
what you want to call the data being stored. The second argument is the data itself, which
must be a string. Calling setItem with local/sessionStorage will store the data locally with
the user.

Both localStorage and sessionStorage use the same syntax and methods. The only differ-
ence between the two objects is that localStorage will remain active until explicitly removed
by you (the developer) or the user, via the browser preferences; it’s actually pretty difficult for
a user to clear. sessionStorage acts differently because it is a session-based storage method,
which means it will remove itself at the end of each browser session (when the browser is
closed).
/*

/* set localStorage, manually save a localStorage object called “ favoriteSandwich ” with a value of “Meatball”. */
localStorage.setItem("favoriteSandwich", "Meatball");

/* retrieve stored data */
var sandwich = localStorage.getItem("favoriteSandwich"); // returns "Meatball"
alert(sandwich);

/* delete stored data */
localStorage.removeItem("favoriteSandwich");


/*
Web storage currently can take only strings for data. This can be problematic when you need to
store multiple items. You can get around this limitation by storing your data in a JSON object
and then using the JSON.stringify method to convert the entire object to a string that can
be stored using Web storage.

Listing 5.16 shows how you might take the entire favoriteSandwiches JSON object and save it locally with Web storage.
*/


var favoriteSandwiches = {
"breakfast" : [
				{
				"name": "Egg, Sausage and Cheese",
				"bread": "English Muffin"
				},
				{
				"name": "Egg Whites on Flatbread",
				"bread": "Flatbread"
				}
				],
"lunch" : [
				{
				"name": "Turkey Club",
				"bread": "Wheat Bread"
				},
				{
				"name": "Grilled Cheese",
				"bread": "White Bread"
				}
				],
"dinner" : [
				{
				"name": "Meatball",
				"bread": "Kaiser Roll"
				},
				{
				"name": "Hamburger",
				"bread": "Hamburger Roll"
				}
				]
};

/* stringify the JSON object first */
var stringObject = JSON.stringify(favoriteSandwiches);

/* add the string object to localStorage */
localStorage.setItem("favoriteSandwiches", stringObject);

/* get the locally stored data */
var storedItem = localStorage.getItem("favoriteSandwiches");

/* convert it from a string, back into a JSON object */
var convertObject = JSON.parse(storedItem);
alert(convertObject.breakfast[0].name); // Egg, Sausage and Cheese

