/* saving all sandwiches to an object */
var favoriteSandwiches = {
	breakfast : ["Egg, Sausage and Cheese", "Egg Whites on Flatbread", "Egg and Cheese"],
	lunch : ["Turkey Club", "Grilled Cheese", "Peanut Butter and Jelly"],
	dinner : ["Meatball", "Hamburger", "Oatmeal and banana on Rye"],
};

alert(favoriteSandwiches.dinner[0]); // Meatball

/* save meatball sandwich ingredients to another object */
var meatball = {
	bread: "Kaiser Roll",
	meat: "Beef",
	cheese: "Mozzarella"
}

/* alert the type of bread */
alert(meatball.bread); // Kaiser Roll