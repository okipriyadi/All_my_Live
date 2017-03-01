var favoriteSandwiches = {
	"breakfast" : [{
					"name": "Egg, Sausage and Cheese",
					"bread": "English Muffin"
					},{
					"name": "Egg Whites on Flatbread",
					"bread": "Flatbread"
					}],
	"lunch" : [{
					"name": "Turkey Club",
					"bread": "Wheat Bread"
				},{
					"name": "Grilled Cheese",
					"bread": "White Bread"
					}],
	"dinner" : [{
					"name": "Meatball",
					"bread": "Kaiser Roll"
					},{
					"name": "Hamburger",
					"bread": "Hamburger Roll"
					}]
};

/* go to dinner and get the name of the first item */
alert(favoriteSandwiches.dinner[0].name); // meatball