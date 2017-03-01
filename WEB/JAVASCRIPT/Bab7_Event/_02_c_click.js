/*
You want to be sure that the element you’re binding a click event to is indeed a click-
able element. There are two ways to tell if an element if clickable. The first is to turn off all CSS
and JavaScript in the browser and click it; if something happens, you have a clickable element.
If not, you don’t.
*/

/* define the adr object to hold your methods (aka functions) */
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



var adr = {
			getAllContacts : function(){
				var target = document.getElementById("output");
				/* save the contacts JSON object to a variable */
				var book = contacts.addressBook;
				var count = book.length;
				var i;
				target.innterHTML = "";
				/* as usual, check the count before looping */
				if(count > 0){
					/* loop through the contacts */
					for(i = 0; i < count; i = i + 1){
						var obj = book[i];
						target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';
						} 
				}
			} 
} 

var btn = document.getElementById("get-all");

// activate the click event on your button
btn.addEventListener("click", adr.getAllContacts, false);

