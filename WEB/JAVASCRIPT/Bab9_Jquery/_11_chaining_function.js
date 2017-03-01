/*
Function chaining in jQuery is, again, one of the more attractive features in the library. It
allows you to add an endless amount of methods to a single DOM node without repeating
the declaration over and over.  Using the parents() method in conjunction with addClass() is
called chaining functions . There are very few restrictions for chaining methods. Just about
anything can be chained.

The ajax() method exposes a few extra API methods to check the status of an Ajax call. They
are error() , success() , and complete() . In Listing 10.3.1 there was no error checking in the
getJSON() method. Luckily, these extra Ajax status methods can be chained to the end of
the getJSON() method to help us execute functions that check status and conditionally fire
off logic.
*/

$(document).ready(function () {
	// start Ajax call
	$.getJSON('data/contacts.json', function (data) {
		var addrBook = data.addressBook,
		count = addrBook.length;
		// clear the target area just in case there's something in it.
		$('#output').empty();
		// check the count, of course
		if (count > 0) {
			// loop through the contacts
			$.each(addrBook, function (i, obj) {
				$('#output').append('<p>' + obj.name + ', <a href="mailto:' +
					obj.email + '">'+ obj.email +'</a><p>') .hide().fadeIn()
				}); 
			} // end count check
		}).error(function () {
			// if there was an error during the ajax call
			alert('there was an ajax error');
		}).complete(function () {
			// if the ajax call completed (whether it was successful or not)
			alert('your ajax call was completed');
		}).success(function(){
			// if the ajax call was a success
			alert('your ajax call was a success');
	}); 
});