/*
Ajax talks to the server, the server doesn’t talk to Ajax. Because of this, Ajax does two things:
1. Sends a request to the server
2. Processes the data returned from the server
Sending an Ajax request opens up a new property for you to monitor called readyState.

GET versus POST and Performance
	Ajax calls can be in the form of a GET or a POST . it should be sent via a POST , 
but if you’re working with nonsensitive data (like we are right now), it’s best to use a GET .
You may be thinking, why not just use a POST all the time for Ajax because the URL isn’t ever
exposed? The answer is that a GET request performs better than a POST in most situations.
Because the data in a GET is exposed, less processing is involved, which speeds up the perfor-
mance of the request.

open()
The open() method is the second step in getting your Ajax call started. Think of it like a
configuration file for the Ajax call. It doesn’t do any actual work, but what it does is prepare
the statement to be executed by gathering all the necessary information. It’s like having an
administrative assistant for your Ajax call.

The three arguments in the open() method of Listing 8.3 are
1. The method (GET/POST)
2. The file or URL to get
3. A Boolean flag for asynchronous script
There are also two other optional arguments:
4. Username
5. Password

Method
File or URL
The file or URL argument is a place for the file path or full HTTP URL of the data source you
will be pulling in via the Ajax call. If it’s a local file, like ours is, the path is relative to the HTML
document you’re using it in, not the JavaScript file. This is why ours is set to data/contacts.json
and not ../data/contacts.json.

Asynchronous or Synchronous
The third argument in the open() method is a flag to tell the Ajax call whether it will be
executed as a synchronous call or an asynchronous call. As mentioned earlier, this will be set to
true almost all the time, because asynchronous Ajax calls usually provide a much better user
experience when compared to synchronous calls.
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

/*
Sending Credentials
The last two arguments in the open() method are reserved for a username and a password. You
would use these arguments when implementing an Ajax call on a sign-in or registration form
(for example). Whenever you send password information with this method, it is important to
make sure the data is encrypted for better security. Even though you would use a POST method
and the URL wouldn’t be exposed publicly, encryption is equally as important as it is when
coding on the server.

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
/* Get all the information ready to go */
request.open("GET", "search.php", true);
/* initiate actual call and filter by the term "hill" */
request.send("searchterm=hill");

/*
Receiving Data Back from the server
After the request is sent, the call will return from the server, hopefully with the data you
requested. As I mentioned a little earlier in the chapter, Ajax opens up a new property called
readystate , which is tied to an event called readystatechange , which constantly monitors
the progress of every Ajax call and reports back to you so you know when the data is available
to parse.

readystate
readyState is the property in an Ajax call that reports back the status that corresponds with a
checkpoint in the processing of that Ajax call. Five values get reported back:
1. 0 – The open method hasn’t been called (uninitialized)
2. 1 – The open method has been called, but the send method has not (loading)
3. 2 – The send method has been called and the request is being sent (loaded)
4. 3 – The response has started to come back (interacting)
5. 4 – The request is complete (complete)
Each time a readyState value changes, the readystatechange event is triggered. Knowing
this, you can attach an event handler to this new event and wait for the “4” status to be
reached before executing something on the returned data.

It is possible to listen for each step in the process if you want to provide very detailed feedback
to the user, but generally speaking, it’s easier to wait for the request to complete by looking for
the “complete” value.

In Listing 8.4 you can see our Ajax object followed by the event handler for
onreadystatechange , and then an if statement checking the readyState value. Not so
tough, right? It looks like a normal function. And it is just a function with an if statement.

By checking the readyState value like this, you can be sure you’re not executing code before
you have data available to parse.
*/

var request = getHTTPObject();
request.onreadystatechange = function(){
	// check if the request is ready
	if( request.readyState === 4 ) {
	// do something
}

/*
Server Status
The readystate property is great, but it only tells you what the step-by-step process of an Ajax
call is. It doesn’t give you any information on whether the request was successful.
The Ajax object also returns a property called status , which correlates to the server status
codes you would normally find on a Web server, like 404 , 200 , 304 , 500 , and so on. An Ajax
call can, in theory, go out to the server and successfully come back, but encounter some sort of
failure on the server that prevented the data from being returned. Some of the more common
codes you can check for are
1. 404 – Page not found
2. 304 – Not modified
3. 500 – Internal server error
4. 200 – All is well on the server
You can write conditional code for each of these statuses, but for our purposes, we are going to
focus on the success status of 200 and combine that with our readyState of 4 .
In Listing 8.4.1 you can see the addition to the if statement, which now not only checks for a
complete Ajax call, but also for a successful server status code to be returned.
*/

var request = getHTTPObject();
request.onreadystatechange = function(){
		// check if the request is ready and that it was successful
		if( request.readyState === 4 && request.status === 200 ) {
			// do something
		}
}

request.open("GET", "contacts.json", true);
request.send(null);

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

/*
Making Repeat Ajax Calls
Creating the illusion of real-time data (that’s right, it’s an illusion) is something JavaScript, and
particularly Ajax are both very good at. We already learned how to create and execute an Ajax
call once, based on either the load of a page or a user-initiated event. But you can also create a
system that can automatically make Ajax calls over and over.
This is a useful method when you’re trying to create the real-time updating illusion. I say
“illusion” because it’s not truly a 1 to 1 relationship when data is returned. You can use the
JavaScript object setInterval() to execute a block of code over and over with a set time in
between each call. Listing 8.6 shows how you would use this method to execute a JavaScript
alert every 5 seconds. The setInterval() method takes two arguments. The first is whatever
function you’d like to repeat, and the second is how much time, in milliseconds, you want to
pass in between each call.
*/

/* alert a message every 3 seconds */
setInterval('alert("fire off an Ajax call', 5000); // alert something every 5 seconds


/*
The same pattern can be applied to our ajaxCall() function to fire the call off every 5
seconds. This process of constantly hitting the server to check for new information is called
polling . If we were pulling data that was being constantly updated, it would be very valuable
to poll the server to refresh the data onscreen every so often. Listing 8.6.1 shows how using
setInternal() with the ajaxCall() function might look. We don’t have a lot of use for
something like this for the autocomplete form, but it is a very powerful and frequently used
method when returning data from a server.
*/

/* make this Ajax call every 5 seconds */
setInterval('ajaxCall("data/contacts.json", 
			function(){
				console.log("made a call");})', 
			5000); // 5000 milliseconds = 5 seconds
			
			