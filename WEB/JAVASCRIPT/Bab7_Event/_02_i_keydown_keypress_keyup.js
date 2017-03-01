/*
keydown, keypress, and keyup
keydown , keypress, and keyup refer to the user pressing the keys on the keyboard. Keydown is
the initial press, keyup is when the finger is lifted, and keypress is somewhere in the middle.
Keyup is the most popular of the three events. For example: a person, inside a search box
holding down the letter “u,” a keydown event would return only a single “u,” whereas a keyup
event would create a behavior that is akin to using the string: “uuuuuuuuuuuuuuu.” The keyup
event tends to be more accurate in getting text input values, so it’s more widely used. These
events are often used to perform an autocomplete action on a search form. That is also how we
will be using it on the address book application:
*/

An Autocomplete, keyup Event Listener
// activate autocomplete on keyup
searchField.addEventListener("keyup", addr.search, false);

