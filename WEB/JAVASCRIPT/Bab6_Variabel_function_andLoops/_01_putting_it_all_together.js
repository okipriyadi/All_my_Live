/* create some data in the form of a JSON object you can consume and loop through */
var contacts = {
"addressBook" : [
				{
				"name": "hillisha",
				"email": "hill@example.com",
				},
				{
				"name": "paul",
				"email": "cleveland@example.com",
				},
				{
				"name": "vishaal",
				"email": "vish@example.com",
				},
				{
				"name": "mike",
				"email": "grady@example.com",
				},
				{
				"name": "jamie",
				"email": "dusted@example.com",
				}
				]
};

/* wrap everything in an anonymous function to contain the variables */

(function () {
				/* cache some initial variables */
				var object = contacts.addressBook, // save the JSON object
				contactsCount = object.length, // how many items in the JSON object? "5"
				target = document.getElementsByTagName("body")[0], // where you're outputting the data

				i; // declare the "i" variable for later use in the loop
				/* before doing anything make sure there are contacts to loop through */
				if(contactsCount > 0) {
						/* loop through each JSON object item until you hit #5, then stop */
						for (i = 0; i < contactsCount; i = i + 1) {
								/* inside the loop "i" is the array index */
								var item = object[i],
								name = item.name,
								email = item.email;
								target.innerHTML += '<p><a href="mailto:'+ email +'">' + name + '</a></p>';
						} // end for loop
				} // end count check
})(); // end anonymous function