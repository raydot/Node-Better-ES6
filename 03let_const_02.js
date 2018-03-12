"use strict";

// Simple & Clean as each loop gets a fresh copy of i

for (let i = 1; i < 6; i += 1) {  //why not i++?
	setTimeout(function() {
		console.log("I've waited " + i + " seconds!");
	}, 1000 * i);
}

// Dysfunctional and sad as each loops shares a copy of j
for (var j = 0; j < 6; j += 1) {
	setTimeout(function() {
		console.log("I've waited " + j + " seconds for this!");
	}, 1000 * j)
}