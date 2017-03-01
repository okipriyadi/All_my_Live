(function(){
	var body = document.getElementsByTagName("body")[0];
	var touchControls = {
		changedOrientation : function(){
			body.innerHTML = "";
		} 
	} 
	body.addEventListener("orientationchange", touchControls.changedOrientation,false);
})();