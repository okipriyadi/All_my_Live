/*
The mouseover event triggers when a user positions a cursor over an element. mouseout trig-
gers in the opposite case, when the user removes the mouse cursor from the same element. The
combination of these two events creates a complete hover effect.
*/

var searchForm = document.getElementById("search-form");
var adr = {
		addHoverClass : function(){
			searchForm.setAttribute("class", "hovering");
		},
		
		removeHoverClass: function(){
			searchForm.removeAttribute("class");
		} 
}

// activate the focus event on the search box
searchForm.addEventListener("mouseover", adr.addHoverClass, false);

// activate the blur event on the search box
searchForm.addEventListener("mouseout", adr.removeHoverClass, false);