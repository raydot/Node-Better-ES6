"use strict"

//In JS a method is a property on an object that has a function value:
const myObject = {
	foo: function () { // here's your method!
		console.log('bar');
	},
	//In ES2015 we can simply write:
	* range (from, to) {
		while (from < to) {
			if (from === to) 
				return ++from;
			else
				yield from++;
		}
	}
}

// Function name is prepended with * because it's a generator.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

/* 
	These are called "method definitions".  They're similar to traditional functions-
	as-properties but have a few key differences:

	*  You can ONLY call super from a method definition

	*  You are not allowed to call a method definition with new.

	Covered more in http://exploringjs.com/es6/ch_classes.html
*/

