// Use an arrow function to create a lexical this...

"use strict";

let polyglot = {
	name: "Bobb Cobb",
	languages: ["Danish", "Urdu", "Hebrew", "Etrian", "Farsi"],
	introduce: function () {
		this.languages.forEach((language) => {
			// with arrow function no need to create a 
			// variable placeholder for "this"
			console.log("Yo!  I'm " + this.name + ", and I speak " + language + ".");
		});
	}
}

polyglot.introduce();

