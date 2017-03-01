/*kadang data yang diambil dari server cukup besar sehingga loading seakan tiada berhenti, oleh karena
itu kita membutuhkan feedback.  

depicts the ajaxCall() function and how we might output a loading message
(see the bolded text). This function is now also taking a third argument to define a region to
place the loading message. We will also use the same region to output the actual content so the
loading message is removed when the data is returned.
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

/* define the Ajax call */
function ajaxCall(dataUrl, outputElement, callback){
	var request = getHTTPObject();
	outputElement.innterHTML = "Loading...";
	request.onreadystatechange = function(){
		// check to see if the Ajax call went through
		if ( request.readyState === 4 && request.status === 200 ) {
			// save the ajax response to a variable
			var contacts = JSON.parse(request.responseText);
			// make sure the callback is indeed a function before executing it
			if(typeof callback === "function"){
				callback(contacts);
			} // end check
		} // end ajax status check
	} // end onreadystatechange
	request.open("GET", dataUrl, true);
	request.send(null);
}

