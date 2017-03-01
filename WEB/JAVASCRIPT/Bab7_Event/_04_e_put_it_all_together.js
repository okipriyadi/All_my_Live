/* Anonymous function wrapper again! */
(function(){
	var body = document.getElementsByTagName("body")[0];
	
	var touchControls = {
		pokeTheScreen : function() {
			body.innerHTML += "you just poked me, how rude!<br>";
		}, 
	
		stopPokingTheScreen: function(){
			body.innerHTML += "please do not do that again.<br><br>";
		},
		
		showMovement : function(){
			body.innerHTML += "moving!!<br>";
		}, 
	
		changedOrientation : function(){
			body.innerHTML = "";
		} 
	}
	// add event listeners to the body
	body.addEventListener("touchstart", touchControls.pokeTheScreen, false);
	body.addEventListener("touchend", touchControls.stopPokingTheScreen, false);
	body.addEventListener("touchmove", touchControls.showMovement, false);
	body.addEventListener("orientationchange", touchControls.changedOrientation, false);
})();