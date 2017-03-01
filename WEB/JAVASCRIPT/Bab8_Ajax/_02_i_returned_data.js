/*
The Server Response
Inside the onreadystatechange event handler, and after you check to make sure the request is
complete and successful, you can finally get the data that was returned from the Ajax call.
In addition to readyState and status , the Ajax object also returns your data as a property. It
will either be returned in the form of a string or as XML , depending on which data format you
choose to interact with.

As a String
If your data response in is the form of a string, it will return as responseText . This is just a
string of data that needs to either output as it is returned or be parsed with some of the native
objects available in JavaScript. This is the most common form of Ajax response data.
This format is the most common format because it can contain anything from plain text, to
HTML, to JSON (hint, hint), and then be parsed accordingly. To access this data inside our Ajax
call, you access the Ajax object, then the responseText like this: request.responseText ;

As XML
If you are returning XML data, the response will be in the form of responseXML . Everything is
pretty much the same besides that.
Listing 8.4.2 shows how you would spit out the retuned data into the JavaScript console to
observe the contents of the response.
*/

var request = getHTTPObject();
request.onreadystatechange = function(){
	// check if the request is ready and that it was successful
	if( request.readyState === 4 && request.status === 200 ) {
		// spit out the data that comes back
		console.log(request.responseText);
	}
}


request.open("GET", "data/contacts.json", true);
/* make the actual call */
request.send(null);
