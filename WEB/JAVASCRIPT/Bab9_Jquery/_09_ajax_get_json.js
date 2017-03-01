/*
The ajax() method by itself is very flexible, but because our application is using JSON, we can
utilize an Ajax method built into the jQuery library that was specifically created to properly
parse JSON data. This method is called getJSON() and it is a shortcut to the normal ajax()
method.

getJSON() takes two arguments. The first is a URL to the JSON data, and the second is the
function you want to execute upon a successful data return.
*/

$(document).ready(function () {
	// start Ajax call	
	$.getJSON('_08_contacts.json', function (data) {
										var addrBook = data.addressBook,
										count = addrBook.length;
										// clear the target area just in case there's something in it.
										$('#output').empty();
										// check the count, of course
										if (count > 0) {
											console.log( addrBook );
										} // end count check
	});
}); 

