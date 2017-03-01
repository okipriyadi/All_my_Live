/*
A fallback is something you create in case your main feature doesn’t work
The second level of fallback creation is when you want to use a feature in JavaScript that
doesn’t have good browser support, but you can accomplish the same behavior with something
else

Suppose you want to use one of the new forms of data storage that shipped with HTML5,
localStorage . JavaScript already has the capability of storing data. We’ve been using it for years;
it’s called cookies . In this case there are three levels of fallbacks. below shows how you
would fall back from localStorage to cookies , to a server-side storage method.

skema javascript dalam menyimpan data
1.a. jika javascript menyala --> Apakah Localstorage support di browser yg sedang dipakai
1.b. jika tidak --> fallback to server
2.a. Apakah Localstorage support di browser yg sedang dipakai --> gunakan itu
2.b. jika tidak --> gunakan cookie
*/


/* You know JavaScript is enabled at this point because none of this would applyotherwise */
/* check if localStorage is supported */
if(typeof window.localStorage !== "undefined"){
	// use localStorage
} else {
	// use normal cookies
}

