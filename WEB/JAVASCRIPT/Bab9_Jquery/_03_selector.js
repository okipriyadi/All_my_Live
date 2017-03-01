/*
=======================================
Selecting an Element by ID
=======================================
*/
// native JavaScript version
var container = document.getElementById("container");
// native JavaScript - newer version
var container = document.querySelector("#container");
// jQuery version
var container = $("#container");


/*
=======================================
Selecting an Element by Class Name
=======================================
*/
// native JavaScript version
var module = document.getElementsByClassName("module");
// native JavaScript - newer version
var module = document.querySelector(".module");
// native JavaScript - newer version, return array
var module = document.querySelectorAll(".module");
// jQuery version
var module = $(".module");

