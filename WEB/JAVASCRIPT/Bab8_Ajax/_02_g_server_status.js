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


