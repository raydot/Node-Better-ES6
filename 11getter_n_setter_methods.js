"use strict";

// Example adapted from MDN's page on getters
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

const speakingObj = {
	//track how many times "speak" has been called
	words: [],

	speak(word) {
		this.words.push(word);
		console.log('speakingObj says ' + word + '!');
	},

	get called() {
		//returns latest word
		const words = this.words;
		if (!words.length)
			return 'So far, the speakingObj is silent.';
		else
			return 'The last thing speakingObj said was: ' + words[words.length - 1];
	}
};

console.log(speakingObj.called); // nothing yet!

speakingObj.speak('AHEM!'); // speakingObj says ahem

speakingObj.speak('Well hello!'); // etc...

console.log(speakingObj.called); // what you would expect!

/* 
	Some things to keep in mind:
	*	Getters can't take arguments.
	*	You can't have properties with the same names as your getter functions.
	*	You can create a getter dynamically by using:
		Object.defineProperty(OBJECT, "property name", { get : function () {. . .} })
	See file #12 for an example of that last one.
*/

