/*
Generally speaking, adding style information to the DOM through JavaScript is not a good
idea. If you can accomplish the same task by adding a class to an element and using CSS from
there, you should—it not only performs better but also keeps all styling information in the
presentation layer where it belongs.

There will be times, however, when you need to apply dynamic styling to an element with
JavaScript—for instance, a positioning value that needs to react to a moving cursor (a drag-
and-drop interface). jQuery makes adding style information to a DOM node very easy with the
css() method. This method takes a single argument, which is an object containing all the CSS
you want to apply to an element.
*/

// set the height of all nodes that have a class of module to 300px
$('.module').css({
	'height': '300px',
	'color': 'red'
});