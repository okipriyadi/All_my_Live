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

var xmlhttp = getHTTPObject();
//A variable used to distinguish whether to open or close the calendar.
var showCalendar = true;

function showHideCalendar() {
	if (showCalendar == true){
		//Show the calendar.
		document.getElementById("opencloseimg").src = "01_e_close.bmp";
		showCalendar = false;
		var obj = document.getElementById("calendar");
		xmlhttp.open("GET", "01_c_calendar.php");
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				obj.innerHTML = xmlhttp.responseText;
			}
		}
		xmlhttp.send(null);
	
	} else {
		//Hide the calendar.
		document.getElementById("opencloseimg").src = "01_d_add.png";
		showCalendar = true;
		document.getElementById("calendar").innerHTML = "";
	}
}