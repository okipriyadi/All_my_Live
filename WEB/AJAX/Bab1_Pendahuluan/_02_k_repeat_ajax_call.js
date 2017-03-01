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
			
			