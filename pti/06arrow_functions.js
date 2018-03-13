//Arrow functions have a few types of syntax:

"use strict";

let languages = ["Danish", "Urdu", "Hebrew", "Etrian", "Farsi"];

// In a multiline arrow function you must use curly braces,
// and include an explicit return statement.
let languages_lower = languages.map((language) => {
	return language.toLowerCase()
});

// In a single-line arrow function, curly braces are optional and
// the function implicityly returns the value of the last expression.
// You can include return but it's optional.
let languages_lower = languages.map((language) => language.toLowerCase());

// If your arrow function only takes one argument you don't need to wrap it in parentheses
let languages_lower = languages.map(language => language.toLowerCase());

// More than one, parentheses back on!
let languages_lower = languages.map((language, unused_param) => language.toLowerCase());

console.log(languages_lower);

//finally, if your function takes NO arguments, you must include empty
//parentheses before the arrow.
(() => alert("hello!"))(); //why empty parentheses after?!

/* 
	Still more on arrow functions here:
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/