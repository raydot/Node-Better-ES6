"use strict";

const speakingObj = {
	//track how many times "speak" has been called
	words : [],

	speak(word) {
		this.words.push(word);
		console.log('speakingObj says ' + word + '!');
	}
};

// This is just to prove a point, not really the way to do things:
function called() {
	//returns latest word
	const words = this.words;
	if (!words.length) 
		return "speakingObj has said nothing yet.";
	else
		return words[words.length - 1];
};

Object.defineProperty(speakingObj, "called", get : getCalled)