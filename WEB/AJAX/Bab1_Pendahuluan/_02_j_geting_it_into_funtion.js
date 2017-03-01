/*
Getting It into a Function
Now that you have a working Ajax call, you will probably want to use it more than once in
your application. In fact, we do want to use it more than once. Once for the autocomplete
functionality and another time to get all the contacts in a single call.
To make the function a little easier to reuse, we’re going to take what we already have and put
it into a function, with one small change.
To be certain that this function can be reused within the context of this application and
retrieve the contacts.json file, we are going to pull the reference to data/contacts.json out of the
function and instead use an argument that will be passed when it is called. Listing 8.5 shows
our complete Ajax function with a dataURL argument being passed into it.
With the function listed in Listing 8.5 , it would now be called with the data source as an
argument like this: ajaxCall("data/contacts.json"). Calling the function like this lets
us easily reuse it with other data sources, either within the same project or on any number
of other projects, so you don’t have to keep writing the same function over and over to
accomplish the same outcome of a simple Ajax call. This is how you begin building your own
JavaScript function library.
*/

/* define the Ajax call function */
function ajaxCall( dataUrl ) {
	/* use our function to get the correct Ajax object based on support */
	var request = getHTTPObject();
	request.onreadystatechange = function() {
		if ( request.readyState === 4 && request.status === 200 ) {
			// spit out the data that comes back
			console.log(request.responseText);
		} 
	} // end onreadystatechange
	request.open("GET", dataUrl , true);
	request.send(null);
}

/*
Returning the Data
Listing 8.5.1 introduces a new argument called callback , which will represent
the function we will be passing through to access the data response. So we will have two argu-
ments; one will be a string, and the other will be a function.
Because the data is saved to a variable ( contacts ), it is easy to pass that data into the callback
function.
*/

function ajaxCall(dataUrl, callback ) {
	var request = getHTTPObject();
	request.onreadystatechange = function() {
		// check to see if the Ajax call went through
		if ( request.readyState === 4 && request.status === 200 ) {
			var contacts = JSON.parse(request.responseText);
			// make sure the callback is indeed a function before executing it
			if(typeof callback === "function"){
				callback(contacts);
			} // end function check
		} // end ajax status check
	} // end onreadystatechange
	request.open("GET", dataUrl, true);
	request.send(null);	
}
