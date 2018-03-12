"use strict";

//create a new globetrotter!
const globetrotter = {
	//Language spoken in current country
	const current_lang = undefined,

	//number of countries visited
	let countries = 0,

	//see how many countryies we've travelled to
	get countryCount() {
		return this.countries;
	},

	//reset language after we fliy!
	set languages (language) {
		// increment countries
		countries += 1;

		// reset current language
		this.current_lang = language;
	}
};

globetrotter.language = 'Polish';
console.log(globetrotter.countryCount);

globetrotter.language = 'Swahili';
console.log(globetrotter.countryCount

/*  
	Everything that's true of getters applies to setters as well, except:
	* Unlike getters, which can take no arguments, setters must take exactly one argument.

	Breaking either rule throws an error.
*/
