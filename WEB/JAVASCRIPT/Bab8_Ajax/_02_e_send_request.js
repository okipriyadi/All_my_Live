/*
send()
After all the data for your Ajax call has been properly prepared in the open() method, you can
use the send() method to ship off the data and request and begin waiting for the readyState
property to let you know when the Ajax call data is ready to be used.
*/

function getHTTPObject() {
	// initialize the variable
	var xhr;
	if (window.XMLHttpRequest) { // check for support
		xhr = new XMLHttpRequest();
	} else if (window.ActiveXObject) { // check for the IE 6 Ajax
		xhr = new ActiveXObject("Msxml2.XMLHTTP");
	}
	return xhr;
}

var request = getHTTPObject();
// Get all the information ready to go 
request.open("GET", "data/contacts.json", true);
/* initiate actual call */
request.send(null);
/* OR - initiate the call with some data */
request.send("hello data");



/*
You may have noticed that we’re passing null into the send object, which means that we’re not
sending any extra data with the Ajax call. We just want the file.
If you were using any back-end processing on the data URL, you can pass the extra filtering
information through the send() method. 

The request in Listing 8.3.2 would produce the same data as if you were to visit the URL
search.php?searchterm=hill , a normal search results page. In our example we are doing the
search processing with JavaScript, because this is a JavaScript book.
*/

var request = getHTTPObject();
request.open("GET", "search.php", true);
request.send("searchterm=hill");


