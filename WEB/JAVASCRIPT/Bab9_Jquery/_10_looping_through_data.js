/*Now that we have set up our Ajax request with the getJSON() method, the next step is to loop
through and output the data that is returned with the jQuery each() method.*/

$(document).ready( function () {
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
				obj.email + '">'+ obj.email +'</a><p>');
			}); 
		} // end count check
	}); // end ajax call
}); // close document.ready