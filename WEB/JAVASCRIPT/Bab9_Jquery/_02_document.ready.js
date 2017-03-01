/*
The ready() method is bound to the document and takes a single argument, 
which is the entirety of the JavaScript you’re attaching to the HTML document. 
It is a listener-type method, which will hold off execution of any script contained 
within it until the entire DOM is loaded. Previous to this chapter, we went over the load event 
to execute script when the entire DOM is loaded.  The load event will hold off on execution 
until every asset, including images, has been successfully received. Waiting until images are 
received can take longer than you might prefer to wait, and this is where  jQuery’s ready() method 
differs from the native load event.
The ready() method will not wait for all images to be received before executing code. Instead,
it waits only until the DOM is constructed, which provides a smoother experience.
This behavior simulates including a script reference at the bottom of the document, which we
have been doing for the entire course of this book. It’s not technically needed in our case, but
the ready() method is a central topic in jQuery, so for the purposes of this section, we will be
wrapping all executed code with it.
*/

$(document).ready(function () {
	// jquery goes here
}); // close document.ready