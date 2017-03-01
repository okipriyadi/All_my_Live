// define your zebra striping function (it is not yet a plug in)
function zebraStripe( wrapper , elToStripe ){
	$(wrapper).find( elToStripe + ':odd').css({
		'background': '#ccc'
	});
}


// wait for the document to be loaded
$(document).ready( function () {
	var output = $('table'),
	tr = output.find('tr');
	// call the function with 2 required arguments
	zerbraStripe(output, tr);
}); 

