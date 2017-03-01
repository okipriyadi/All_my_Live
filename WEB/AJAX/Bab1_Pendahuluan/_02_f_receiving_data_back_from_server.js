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
request.onreadystatechange = function(){
	// check if the request is ready
	if( request.readyState === 4 ) {
	// do something
}