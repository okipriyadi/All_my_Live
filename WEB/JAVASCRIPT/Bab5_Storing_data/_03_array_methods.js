/*
================================
Join
================================
Join takes one parameter, which is the string value you want to output in between each array
item. In this case it is “, plus ”. The result will be [array item], plus [array item], plus [array
item].
*/
 
var breakfast = ["Egg, Sausage and Cheese", "Egg Whites on Flatbread", "Egg and Cheese"];
var lunch = ["Turkey Club", "Grilled Cheese", "Peanut Butter and Jelly"];
var dinner = ["Meatball", "Hamburger", "Oatmeal and banana on Rye"];

/* clean up breakfast for output */
var joinBreakfast = breakfast.join(", plus "); // separate them with a comma, spaces and the word "plus"

/* alert it */
alert(′join: ' + joinBreakfast);


/*
================================
Slice
================================
slice has the capability to output a range of items in an array. For example, if you want to
output items 1 through 4 and leave out item 0 and anything higher than 5, that is a range of
values you can target with slice . In example below we’re accessing the lunch array and output-
ting values 1 & 2 (Grilled Cheese, Peanut Butter and Jelly) and joining them with an amper-
sand (&). The slice method takes two parameters, the first is your starting position and the
second is your ending position in the array. The start parameter is required, the end is optional.
If it’s omitted, the slice will just continue to the end of the array.
*/

// slice lunch, start at 1 and end at 3 (doesn't include 3) */
var sliceLunch = lunch.slice(1, 3);

/* clean and alert lunch */
var joinLunch = sliceLunch.join(" & ");

alert("slice/join: " + joinLunch); // Grilled Cheese & Peanut Butter and Jelly

/*
================================
Shift and unshift
================================
shift and unshift are methods used to add and remove items to/from the beginning of a
specified array. In example below the shift method is set to remove the array item “meatball”
from the dinner array defined earlier . The unshift method will then add the array
item of “Nacho Cheese-wich” to the beginning of the same array. You can then see the result-
ing array with “meatball” removed and “Nacho Cheese-wich” added for an extra-delicious
dinner sandwich array.
*/

// remove the first element of dinner 
var shiftDinner = dinner.shift();
alert(" shift: " + shiftDinner) // meatball

// add an item to the beginning of the array 
var unshiftDinner = dinner.unshift("Nacho Cheese-wich");
alert("unShift: " + dinner) // meatball



/*
================================
Pop
================================
pop is a method reserved for removing and returning the last item in an array. In example
you can see how to remove the last item from the dinner array that was defined
earlier to return an Oatmeal and Banana Sandwich on Rye bread.
*/

// remove an item from the end of the array 
var popDinner = dinner.pop();
alert("pop: " + popDinner) // Oatmeal and banana on Rye


/*
================================
Concat
================================
Concat is short for “concatenate.” It’s a method of copying and combining multiple arrays
into a single array. The original array still exists because the combined array is only a copy.
In below example you can see that the breakfast, lunch, and dinner arrays are all being concat-
enated into the new “ favoriteSandwiches ” array.
*/

/* concatenate all arrays in one */
var favoriteSandwiches = breakfast.concat(lunch, dinner);

/* save HTML body element to a variable */
var target = document.getElementsByTagName("body")[0];

/* output the array values in the HTML */
target.innerHTML = favoriteSandwiches.join("<br>");

/*
This example is a little different because we’re not just alerting the result; we are using the
DOM node “body” and outputting the content to the page with innerHTML . This is much more
likely to happen in real life than alerting a value. Often you will alert a value while trying to
debug or test code as you write it.
*/


/*
================================
Sort
================================
sort is an interesting method; it can output alphabetical or custom sorting of array items. It
takes one optional argument, which is a custom sorting function you would have to write.
Otherwise, it will use basic alphabetical sorting. Something to note is that that numbers will
not be sorted correctly; 30 will be considered lower than 4 because sort does not take into
account true numerical sorting.
In example below using the sort method on the favoriteSandwiches array and output-
ting the alphabetical listing of all combined array items.
Sorting the New Concatenated Array Alphabetically
*/

// sort the concatenated array alphabetically 
var sortFavorites = favoriteSandwiches.sort();

// overwrite the original outputted list with a sorted one 
target.innerHTML = sortFavorites.join("<br>");


