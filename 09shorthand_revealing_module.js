"use strict";

// For more on the revaling module pattern:
https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript

function Module() {
	function foo() {
		return 'foo';
	}

	function bar() {
		return 'bar';
	}

	//Write this:
	const publicAPI = {foo, bar}

	//not this:
	// const publicAPI = {
	// 	foo: foo, 
	// 	bar: bar
	// }
	return publicAPI;
};

// Here, we create a publicAPI object whose key foo refers to the
// foo method and whose key bar refers to the bar method
