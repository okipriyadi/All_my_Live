function getFamilyMemberNames() {
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
			if(person === "tim") {
				alert(person + ", this is me!");
			} else {
				alert(person);
			}
		}
	}
}

/* call the function */
getFamilyMemberNames();