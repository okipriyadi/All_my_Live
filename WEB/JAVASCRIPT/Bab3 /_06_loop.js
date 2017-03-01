/*Loops in JavaScript exist to allow you to execute a block of code a certain number of times. The
block of code can be inside a function or it can be a function by itself. In the family array we
build, there are six items; executing a loop on that code means we want to go into each item
(called looping through ) and do something. Listing 3.5.3 illustrates how to set up and use a
basic for loop.*/

/* save the array of family members to a variable, and save the length in peopleCount */
var people = family, peopleCount = items.length, i;

/* checking to make sure there are people in the list */
if(peopleCount > 0){
	/* loop through each person, since i is the total number this code will loop six times */
	for(i = 0; i < peopleCount; i = i + 1){
		/* this represents 1 person */
		var person = people[i];
		}
}

