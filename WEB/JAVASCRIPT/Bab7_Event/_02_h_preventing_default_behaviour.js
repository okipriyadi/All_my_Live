/*
preventing Default Behavior
Preventing default behavior is something you often need to do when executing JavaScript on
DOM elements that have another behavior attached to them. For example, a link with an href
value wants to go to another page, or in our case, a form that wants to submit somewhere to
do a search query.

Preventing default behavior is done inside the method. You first need to pass the event (form
submit in our case) as an argument into the method. Then attach the preventDefault()
method to it. 
*/

var adr = {
	search : function( event ){
		event.preventDefault() ;
		/* continue the rest of the method here */
	}
}
