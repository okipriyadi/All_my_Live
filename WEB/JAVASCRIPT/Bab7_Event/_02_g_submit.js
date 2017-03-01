/*
The submit event is triggered when a form is submitted, either by clicking a Submit button,
tabbing to the Submit button and pressing Enter/Return, or sometimes just by pressing Enter/
Return while a form element is in focus. Any way you can submit a form, this event gets
triggered.

we’re using the indexOf() method in JavaScript to search for a specific string.
For example, if you were to type the letter “i” into the search box and submit the form, every
contact that contains that letter should be returned. The indexOf() method will either return
a match or the number -1, so all you have to do is check for -1 and return the others.

Something important to note from the search method in this example is that the form no
longer submits per its default behavior when the search button is clicked. This is deliberate; if
the form were to submit, you wouldn’t be able to execute the JavaScript and update the page
(it would have refreshed). You can stop a form submission by using the preventDefault()
method.
*/

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

var searchField = document.getElementById("q"), 
                  searchValue = searchField.value
var adr = {
	search : function(event){
		/* prevent the default behavior */
		event.preventDefault();
		var target = document.getElementById("output");
		var book = contacts.addressBook;
		var count = book.length;
		var i;
		target.innerHTML = "";
		if(count > 0 && searchValue !== ""){
			for(i = 0; i < count; i = i + 1) {
				var obj = contacts.addressBook[i],
						  isItFound = obj.name.indexOf(searchValue);
				// anything other than -1 means we found a match
				if(isItFound !== -1) {
					target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';
				} 
			} 
		} 
	}
} 

// save search field to a variable
var searchForm = document.getElementById("search-form");

// activate autocomplete on submit
searchForm.addEventListener("submit", adr.search, false)