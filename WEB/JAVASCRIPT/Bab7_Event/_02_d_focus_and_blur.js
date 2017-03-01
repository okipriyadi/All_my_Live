/* use the same adr method */
var adr = {

	addActiveSection : function(){
		this.parentNode.setAttribute("class", "active");
	}, // end method, note the comma
	
	removeActiveSection: function(){
		this.parentNode.removeAttribute("class");
	}
}

var searchField = document.getElementById("q");

searchField.addEventListener("focus", adr.addActiveSection, false);
searchField.addEventListener("blur", adr.removeActiveSection, false);