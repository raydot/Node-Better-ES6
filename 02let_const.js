/* 
	let & const: who cares?

	There are a few good reasons to use let and const where possible:

	*	Neither let nor const is hoisted

	*	They limit your variables' visibility as much as possible

	*   const helps enforce immutable variabl references
*/

"use strict";

var languages = ['Danish', 'Norwegian', 'Swedish'];

// Pollutes global namespaces.  Ick!
for (var i = 0; i < languages.length; i += 1) {
	console.log(`${languages[i]} is a Scandinavian language.`);
}

console.log("This sad global i = " + i); // 4

for (let j = 0; j < languages.length; j+=1) {
	console.log(`${languages[j]} is a Scandinavian language.`);
}

try {
	console.log(j); // Reference error
} catch(err) {
	console.log(`You got yerself a ${err}.  No dice.`);
}
