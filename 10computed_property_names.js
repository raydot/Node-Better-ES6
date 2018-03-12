"use strict";

// This is a bit of a niche case, but ES6 allows you to use expressions as property names

const myObj {
	//set propety name equal to return value of foo function
	[foo ()] () { //what's going on with this syntax?!
		return 'foo';
	}
};

function foo() {
	return 'foo';
}

console.log(myObj.foo()); //'foo'

/* 
	According to Dr. Raushmayer in Exploring ES6, the main use case for
	this feature is in setting property names equal to Symbol values.
*/