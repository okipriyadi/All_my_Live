/*
cara menggunakan event
1. Get a DOM node.
2. Attach an event to it.
3. Execute a specific function when the event is triggered.

Attach an event :
1. even handler
2. even listener

EVEN HANDLER
When using event handlers, the normal event you would attach is always prefaced with
the word “on.” That’s why we’re using “ onclick ” rather than just “click.” This pattern is
applied to all events: 

onsubmit , 		onchange , 		onfocus , 
onblur , 		onmouseover , 	onmouseout ,
ontouchstart , 	ongesturestart , and so on. 

You get the point; every event is on<event>
when using event handlers. The one issue with handlers is that you can attach only a single function
to a specific event of a DOM node. Basically, that means you can’t attach two click functions
to the same button.

EVEN LISTENER
Event listeners have a similar function to that of event handlers in that you still need a DOM
element to attach them to, you still need to identify the event, and you still need a function to
call. The difference is that you don’t have the limitation of the handler when assigning multi-
ple functions to the same DOM element and event. It unties your hands a little as a developer,
and I personally prefer working with them a little more than I do handlers.

An event listener is made up of four parts:
1. The DOM element (“element” in Listing 7.2 )
2. The event type (“event” in Listing 7.2 )
3. The eventListener , aka the function (anonymous function in Listing 7.2 )
4. A Boolean value used to initiate something called “capture” (set to false in Listing 7.2 )


*/

//==================================Even Handler==================================

/* wrap it in an anonymous function to contain the variables */
(function(){
	// HTML: <button type="button" id="btn">a button</button>
	// save the button to a variable
	var btn = document.getElementById("btn");
	// Use an event handler to attach the "onclick" event
	btn.onclick = function(){
		// alert inside this anonymous callback function
		alert('clicked the button');
	}
})();


//==================================Even Listener==================================
// event listener with an anonymous function
element.addeventListenter("event", function(){
	// stuff you want the function to do
}, false);


/*
Argumen ke tiga dari event listenter adalah "CAPTURE" yang pada contoh diatas di set menjad false
You will be setting this capture option to false 99% of the time. Setting it to true is like getting
on a megaphone and announcing to all the parent DOM nodes that an event is firing on a
particular node. 

Setting to false prevents this behavior because, for the most part, it is unneces-
sary. It’s officially called “event propagation.” There is a very detailed and confusing explana-
tion in the W3C DOM specification, but as I said, 99% of the time just set it to false and
move on.

In Listing 7.2.1 you will see a more real-world example of a basic event listener being set on a
button, which has an ID value of “ btn .” We’re using the getElementById() method to save it
to a variable and add the event listener to it. The event is defined as “ click ,” and we’re execut-
ing an anonymous function to alert a message and setting the capture Boolean to false.
*/

/* wrap it in an anonymous function to contain the variables */
(function(){
	/* HTML: <button type="button" id="btn">a button</button> */
	// save the button to a variable
	var btn = document.getElementById("btn");
	// attach a "click" listener to the button
	btn.addEventListener("click", function(){
		alert('clicked the button');
	}, false);
})();

/*
Dukungan browser

Support is a small caveat of using the addEventListener() method. It’s one of the instances
where “it works where you expect it to work.” Internet Explorer 8 and earlier do not support
addEventListener(), but there is something that functions in almost the same way. The
method used in IE8 and earlier is called attachEvent(); the most obvious difference between
the two methods is that attachEvent() takes only two arguments. It excludes the capture
Boolean value because before Internet Explorer 9, there was no event propagation model avail-
able in IE. So it makes sense why the value didn’t exist.

Because there is no overlap in support of the two methods, it either exists or it doesn’t; you
don’t need to detect the browser version (which is bad, anyway), you can detect for the pres-
ence of addEventListener() and modify your script with an if statement accordingly. If the
method exists, use it; if not, use attachEvent().
Listing 7.2.2 shows how to use an if statement to detect for the presence of
addEventListener and conditionally let the browser decide which method to use.
*/

var btn = document.getElementById("btn");
if(btn.addEventListener){
	/* if eventListener is supported do this */
	btn.addEventListener("click", function(){
		// alert inside this anonymous callback function
		alert("clicked the button");
	}, false);
} else {
	/* if it's not supported do this (for IE8 and below) */
	element.attachEvent("click", function(){
	// alert inside this anonymous callback function
	alert("Clicked the button");
	});
}


/*Binding Events
When binding (attaching) events to DOM elements, there are a few weird things to note.
Remember that when a function is nested inside an object, it’s actually called a method? Well,
something similar is going on with event listeners and event binding.

When a function is inside an addEventListener() method, it’s called an event listener.
It’s still a function when it’s outside the addEventListener() method, but when it’s in the
context of that particular method it’s referred to as an event listener. It’s the listener you’re
adding to the event.

There is one other strange thing about calling functions inside the addEventListener()
method. They don’t have parentheses like they’ve had up to this point in the book. Because the
parentheses mean “call this now” and we don’t want to do that in a listener, you leave them
off. 

Listing 7.3 shows how to use a predefined function as a listener by dropping the parenthe-
ses off. If the parentheses were to be left on, the function would execute immediately on load
of the page, even if it’s inside the addEventListener() method.

*/

//Binding an Event to a DOM Element

var btn = document.getElementByID("btn");

function alertMessage(){
	alert("clicked the button");
}

// or use a predefined function (event handler), "alertMessage"
btn.addEventListener("click", alertMessage, false);

/*
n previous chapters, we spoke about adding a dynamic nature to functions by passing argu-
ments through them. With no parentheses, you can’t pass any arguments into the function,
can you? No, but that’s okay.

In order to pass arguments into a function while using addEventListener() , you need to use
the function as a callback instead by nesting it inside an anonymous function. This may sound
a little confusing, but Listing 7.3.1 shows you how to use an anonymous function and a call-
back function to achieve this goal.
*/


var btn = document.getElementByID("btn");
// define your function normally
function alertMessage(message) {
	alert(message);
}

// or use a predefined function (event handler), "alertMessage"
btn.addEventListener("click", function() {
	// callback function!
	alertMessage("clicked the button");
	}, false);
	
/*Unbinding Events
Just like how you want to bind (attach) events to DOM elements, sometimes you want to
unbind (detach) events from DOM nodes. Most of the time you’ll probably attach an event and
leave it alone, but if you want to clean up after yourself, you can certainly remove the listener
just as easily as you can add it. Internet Explorer version 8 and earlier have their own methods
for removing events (detaching events). Listing 7.3.2 shows an example of how to remove and
detach an event similar to the way they are added.*/

if(btn.removeEventListener){
	// if removeEventListener is supported
	btn.removeEventListener("click", alertMessage, false);
} else {
	// if removeEventListener isn't supported (IE8 and below)
	btn.detachEvent("click", alertMessage);
}

