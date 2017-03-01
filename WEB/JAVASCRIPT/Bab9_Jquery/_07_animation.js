/*
The capability to combine events and the css() method syntax to create JavaScript anima-
tions is one of the most popular features in jQuery. For this, the library exposes an animate ()
method that contains CSS properties you want to animate to.

The animate() method takes three arguments. The first is the CSS properties to animate, like
you used with the css() method. The second argument is the duration of the animation in
milliseconds. The third (optional) argument is a callback function you want to execute when
the animation is finished.
*/

// bind a click event to the only button on the page
$('button').click(function () {
	// animate all the heights of each module to 0
	$('.module'). animate ({
							'height': '0px'
				  }, 
				  500, 
				  function () {
								// after the animation is complete, change the button text
								$('button').text('now what, smart guy?');
				  }); // close animate anonymous callback function
});
							  
							  
							  