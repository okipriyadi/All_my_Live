/*array*/
var favoriteSandwiches = ["Egg, Sausage and Cheese", "Turkey Club", "Meatball"];

/* index build automatically for you when combining array declarations and assignment */
favoriteSandwiches[0] == "Egg, Sausage and Cheese";
favoriteSandwiches[1] == "Turkey Club";
favoriteSandwiches[2] == "Meatball";


/*======================An Example of an Associative Array======================*/
/* declare the array */
var favoriteSandwiches = [];

/* manually set the values */
favoriteSandwiches["breakfast"] = "Egg, Sausage and Cheese";
favoriteSandwiches["lunch"] = "Turkey Club";
favoriteSandwiches["dinner"] = "Meatball";

/* alert lunch */
alert(favoriteSandwiches["lunch"]); // Turkey Club

/*======================An Example of multidimensional Array======================*/
/* declare breakfast normally */
var breakfast = ["Egg, Sausage and Cheese", "Egg Whites on Flatbread", "Egg and Cheese"];

/* declare lunch normally */
var lunch = ["Turkey Club", "Grilled Cheese", "Peanut Butter and Jelly"];

/* declare dinner normally */
var dinner = ["Meatball", "Hamburger", "Oatmeal and banana on Rye"];

/* combine all the arrays into "favorite sandwiches"*/
var favoriteSandwiches = [breakfast, lunch, dinner];

alert(favoriteSandwiches[0][1]); // Egg Whites on Flatbread
alert(favoriteSandwiches[1][0]); // Turkey Club
alert(favoriteSandwiches[2][1]); // Hamburger

/*======================push data to Array======================*/
/* declare breakfast normally */
var breakfast = ["Egg, Sausage and Cheese", "Egg Whites on Flatbread", "Egg and Cheese"];

/* add a Jalapeño bagel and ham to the breakfast array */
breakfast.push("Jalapeño Bagel & Ham");

/* alert the whole array */
alert(breakfast);
/* pull out the newest
alert(breakfast[3])
