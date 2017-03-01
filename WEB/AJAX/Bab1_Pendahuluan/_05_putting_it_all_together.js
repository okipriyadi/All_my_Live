function getHTTPObject() {
	var xhr;
	if (window.XMLHttpRequest) { 
		// if it's supported, use it because it's better
		xhr = new XMLHttpRequest();
	} else if (window.ActiveXObject) { // check for the IE 6 Ajax
		xhr = new ActiveXObject("Msxml2.XMLHTTP");
	}
	return xhr;
}

function ajaxCall(dataUrl, outputElement,callback) {
	var request = getHTTPObject();
	outputElement.innerHTML = "Loading...";
	request.onreadystatechange = function() {
		if ( request.readyState === 4 && request.status === 200 ) {
			var contacts = JSON.parse(request.responseText);
			// make sure the callback is indeed a function before executing it
			if(typeof callback === "function"){
				callback(contacts);
			} 
		} 
	}
	request.open("GET", dataUrl, true);
	request.send(null);
}

/* wrap everything in an anonymous function to contain the variables */
(function(){
	var searchForm = document.getElementById("search-form"),
	searchField = document.getElementById("q"),
	getAllButton = document.getElementById("get-all"),
	target = document.getElementById("output");
	/* define address book methods */
	var addr = {
		search : function(event){
			var output = document.getElementById("output");
			/* start the Ajax call */
			ajaxCall('_02_b_contacts.json', output, function (data) {
				// save the input value, contacts length and i to variables
				var searchValue = searchField.value,
								  addrBook = data.addressBook,
								  count = addrBook.length,
								  i;
								  
				// stop the default behavior
				event.preventDefault();
				target.innerHTML = "";
				if(count > 0 && searchValue !== ""){
					for(i = 0; i < count; i = i + 1) {
						// look through the name value to see if it contains the searchtem string
						var obj = addrBook[i],
							isItFound = obj.name.indexOf(searchValue);							
						// anything other than -1 means we found a match
						if(isItFound !== -1){
							target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';
						}
					}
				}
			}); 
		},
		
		getAllContacts : function () {
			/* set the output element */
			var output = document.getElementById("output");
			/* start the Ajax call */
			ajaxCall('_02_b_contacts.json', output, function (data) {
				var addrBook = data.addressBook,
				count = addrBook.length,
				i;
				target.innerHTML = "";
				if(count > 0) {
					for(i = 0; i < count; i = i + 1) {
						var obj = addrBook[i];
						target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';
					}
				}
			}); 
		},
		
		setActiveSection : function() {
			this.parentNode.setAttribute("class", "active");
		},	
		 
		removeActiveSection : function() {
		this.parentNode.removeAttribute("class");
		},
		
		addHoverClass : function() {
		searchForm.setAttribute("class", "hovering");
		},
		
		removeHoverClass : function(){
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
})();