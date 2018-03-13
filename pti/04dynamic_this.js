/*  
	Issues:
	* Inside of introduce, this.name is undefined.
	* Right outside of the callback, in the foreach, it refers to polyglot.
	* What we want is for the "this" in our inner function to refer to 
	the same object it refers to in our outer function.

	Functions in JS always define their own "this" values upon invocation.  This is known as "dynamic this."
	https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/ch2.md

	None of these rules involves figuring out "this" from nearby context, as there is no way to do so.

	So you have to use a workaround:

	1.	Save this to "self" (or whatever) and use that or
	2.  Call "bind" on the inner function to permanantly set its "this" value

	This works, but it's not great.  
	
	What if JS set up "this" by stepping through parent scopes until it finds it?  
	This is known as "lexical this."  See "04this_quirks_02" for an example.
*/

"use strict";

const polyglot = {
	name: "Bobb Cobb",
	languages: ["Danish", "Urdu", "Hebrew", "Etrian", "Farsi"],
	introduce: function() {
		// this.name is "Bobb Cobb"
		const self = this;
		this.languages.forEach(function(language) {
			// this.name is undefined, so we have to use this holding variable.
			console.log("Hi! I'm " + self.name + ", and I speak " + language + ".");
		});
	}
}

polyglot.introduce();