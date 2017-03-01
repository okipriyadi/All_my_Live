/*
In Listing 10.2.4 , you will find four methods of traveling around the DOM:
1. parent() — Get the immediate parent node.
2. parents() — Look through all parent nodes until you find a selector match (can travel multiple levels).
3. find() — Travel down the DOM until you find a match (can travel multiple levels).
4. siblings() — Get sibling elements that match the selector.
*/

// travels up one level
$(".module").parent().addClass('module-parent');

// travels up multiple levels
$("p").parents("#container").addClass('p-parents');

// travels down
$("#container").find(".module").addClass('container-find');

// travels sideways
$(".module").siblings(".module").addClass('module-siblings');

// get first module
$(".module").first().addClass('first-module');

// get next module
$(".module").first().next().addClass('second-module');

// get last module
$(".module").last().addClass('last-module');

// get previous module
$(".module").last().prev().addClass('second-to-last-module');

