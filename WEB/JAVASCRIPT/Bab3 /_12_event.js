/*Events
Events are how you elicit feedback from the user. If you want to execute any JavaScript on a
page, it must happen through an event of some kind. Loading of the page, clicking a link, and
submitting a form are all considered events, and you can attach functions to them all. There
are a lot of events you can attach functions to in JavaScript, including
# click 		# focus
# dblclick 		# submit
# mousedown 	# load
# mousemove 	# touchstart *
# mouseout 		# touchmove *
# mouseover 	# touchcancel *
# mouseup 		# orientationchange *
# keydown 		# gesturestart *
# keypress 		# gestureend *
# keyup 		# gesturechange *
# blur

* New event specialized for touch interactions.
*/


/* execute the function on load of the window*/
window.addEventListener("load", getFamilyMemberNames, false);

/* execute the function on clicking the document */
document.addEventListener("click", getFamilyMemberNames, false);