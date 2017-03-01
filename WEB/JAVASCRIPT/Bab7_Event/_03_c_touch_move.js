/*
The touchmove event is triggered when the user moves their finger on the screen. It is always
preceded by the touchstart event. Naturally, you have to touch the screen before you can
move your finger. This is often used to create swipe gestures or to move objects around the
screen.
*/

(function(){
	var body = document.getElementsByTagName("body")[0];
	// declare an object to hold touch controls
	var touchControls = {
		showMovement : function(){
			body.innerHTML += "moving!!<br>";
			}
	} 
	body.addEventListener("touchmove", touchControls.showMovement, false);
})();
