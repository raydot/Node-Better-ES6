//Scripts from https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes

/* 
	JavaScript creates an object that is linked to a prototype,
	instead of being instantiated from a parent and then having
	nothing more to do with it.

	Changes to the prototype propagate to the new object, even
	after instantiation.
*/

"use strict";
class Food {

	constructor(name, protein, carbs, fat) {
		this.name = name;
		this.protein = protein;
		this.carbs = carbs;
		this.fat = fat;
	}

	toString () {
		return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`;
	}

	print () {
		console.log(this.toString());
	}
}

const chicken_breast = new Food('Chicken Breast', 26, 0, 3.5);

chicken_breast.print();
console.log(chicken_breast.protein);

/*
	A few things to note:
	*	Classes can only contain method definitions, not data properties.
	*  	When defining methods you use shorthand method definitions
	*	Unlike when creating objects, you do not separate method definitions 	in class bodies with commas
	* 	You can refer to the properties on instances of the class directly.
*/ 