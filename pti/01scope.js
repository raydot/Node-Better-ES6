// Code snippets from https://scotch.io/tutorials/better-node-with-es6-pt-i

/*
	Three ways to create a new scope in Javascript:

	1.  Create a function (duh)

	2.  Create a 'catch' block

	3.  Create a code block (block scoping)
*/


// You have to use strict to try this in Node
"use strict";

var foo = "foo"; //global

function baz() {
	if (foo) {
		var bar = "bar"; // scope limited to baz()
		let foobar = foo + bar; //let limits scope to this block
	}

	//both foo (global) and bar(closure) are visible here
	console.log("This situation is " + foo + bar + ". I'm outta here!");

	try {
		console.log("This statement is " + foobar + "! It threw a ReferenceError at me!");
	} catch (err) {
		console.log("Too bad, you got a " + err + ".  No soup for you.");
	}

	try {
		console.log("This proves " + err + " doesn't exist outside of the above `catch` block.");
	} catch (err) {
		console.log("Toldja!");
	}
}

baz();

try {
	console.log(invisible);
} catch(err) {
	console.log("invisible hasn't been declared so we get a " + err + ".");
}

let invisible = "Peek a boo!";  //because this is declared with let it won't "hoist.""