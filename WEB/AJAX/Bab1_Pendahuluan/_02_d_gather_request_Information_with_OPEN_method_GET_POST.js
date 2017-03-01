/*
open()
it does is prepare the statement to be executed by gathering all the necessary information. 
It’s like having an administrative assistant for your Ajax call.

The three arguments in the open() method of Listing 8.3 are
1. The method (GET/POST)
2. The file or URL to get
3. A Boolean flag for asynchronous script
There are also two other optional arguments:
4. Username
5. Password

GET vs POST
Ajax calls can be in the form of a GET or a POST . it should be sent via a POST , 
but if you’re working with nonsensitive data (like we are right now), it’s best to use a GET .
You may be thinking, why not just use a POST all the time for Ajax because the URL isn’t ever
exposed? The answer is that a GET request performs better than a POST in most situations.
Because the data in a GET is exposed, less processing is involved, which speeds up the perfor-
mance of the request.


Sending Credentials
The last two arguments in the open() method are reserved for a username and a password. You
would use these arguments when implementing an Ajax call on a sign-in or registration form
(for example). Whenever you send password information with this method, it is important to
make sure the data is encrypted for better security. Even though you would use a POST method
and the URL wouldn’t be exposed publicly, encryption is equally as important as it is when
coding on the server.
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
request.open("GET", "contacts.json", true);
