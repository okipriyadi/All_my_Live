$(document).ready(function () {
	$.ajax({
		type 		: 'GET',
		url  		: '_08_contacts.json', 
		dataType 	: 'json', 
		success 	: function( data ) {
							// if the call is a success do this
							console.log( data.addressBook);
					   },
		error 		: function () {
							// if the call fails do this
							alert('an ajax error occurred');}
					  }); 
}); 