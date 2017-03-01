/* wrap everything in an anonymous function to contain the variables */
(function() {

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
	
	// define the DOM elements and common variables you'll need
	var searchForm = document.getElementById("search-form"),
	searchField = document.getElementById("q"),
	getAllButton = document.getElementById("get-all"),
	count = contacts.addressBook.length,
	target = document.getElementById("output");
	
	/* define address book methods */
	var addr = {
		search : function(event) {
			var searchValue = searchField.value,
			i;
			// stop the default behavior
			event.preventDefault();
			target.innerHTML = "";
			if(count > 0 && searchValue !== "") {
				for(i = 0; i < count; i = i + 1) {
					var obj = contacts.addressBook[i],
						isItFound = obj.name.indexOf(searchValue);
					// anything other than -1 means we found a match
					if(isItFound !== -1) {
						target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' +
							obj.email + '">'+ obj.email +'</a><p>';
					}
				} 
			} 
		},
	
		getAllContacts : function () {
			var i;
			target.innerHTML = "";
			if(count > 0){
				for(i = 0; i < count; i = i + 1) {
					var obj = contacts.addressBook[i];
					target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' +
						obj.email + '">'+ obj.email +'</a><p>';
				} 
			}
		},
		
		setActiveSection : function(){
			// add a class of "active" to the wrapping div
			this.parentNode.setAttribute("class", "active");
		},
		
		removeActiveSection : function(){
			// remove the class from the wrapping div
			this.parentNode.removeAttribute("class");
		},
		
		addHoverClass : function(){
			// add the class to the wrapping div
			searchForm.setAttribute("class", "hovering");
		},
		
		removeHoverClass : function(){
			// remove the class from the wrapping div
			searchForm.removeAttribute("class");
		}
	} 
	
	searchField.addEventListener("keyup", addr.search, false);
	searchField.addEventListener("focus", addr.setActiveSection, false);
	searchField.addEventListener("blur", addr.removeActiveSection, false);
	getAllButton.addEventListener("click", addr.getAllContacts, false);
	searchForm.addEventListener("mouseover", addr.addHoverClass, false);
	searchForm.addEventListener("mouseout", addr.removeHoverClass, false);
	searchForm.addEventListener("submit", addr.search, false);
})(); // end anonymous function
