/*
The paring of the touchstart and touchend are very common because they mark opposite
events. The touchstart event is triggered when a user touches the screen, and the touchend
event is triggered with the opposite action of untouching the screen (removing whatever you
touched the screen with from the screen; if you touched the screen with your nose, it would
execute when you removed your nose from the screen).
*/

/* Anonymous function wrapper again! */
(function(){
	var body = document.getElementsByTagName("body")[0];
	// declare an object to hold touch controls
	
	var touchControls = {
		pokeTheScreen : function(){
			body.innerHTML += "you just poked me, how rude!<br>";
		}, 
		stopPokingTheScreen: function(){
			body.innerHTML += "please do not do that again.<br><br>";
	}
} 
	// add event listeners to the body
	body.addEventListener("touchstart", touchControls.pokeTheScreen, false);
	body.addEventListener("touchend", touchControls.stopPokingTheScreen, false);
})();