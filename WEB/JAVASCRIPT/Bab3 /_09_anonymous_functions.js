/*Anonymous functions are functions that are declared as they are run, and they have no name
assigned to them. Rather than writing a detailed function, like the one in Listing 3.5.6 , you can
use an anonymous function and have it execute immediately when it is run, instead of having
it reference a function elsewhere in your document.
Anonymous functions perform better than a normally defined function because there is
nothing to reference; they just execute when needed. These functions are used only once; they
can’t be referenced over and over. Making something an anonymous function will prevent
the variable being used from slipping into the global scope (the variables are kept local to the
function)*/

(function () {
	"use strict";
	/* store family member names in an array */
	var family = [
				"joan", /* numbering starts at "0" */
				"charlie",
				"peter",
				"christine",
				"anna",
				"tim" /* this is me! */
				];
	var peopleCount = family.length;
	var i;
	/* checking to make sure there are people in the list */
	if(peopleCount > 0){
		for(i = 0; i < peopleCount; i = i + 1){
			var person = family[i];
			/* if the person is "tim", do something special */
			if(person === "tim"){
				alert(person + ", this is me!");
			} else {
				alert(person);
			}
		}
	}
}
})();