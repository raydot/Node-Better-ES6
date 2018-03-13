"use strict";

const foo = 'foo';
const bar = 'bar';

//old syntax
const myOldObject = {
	foo: foo,
	bar: bar
};

//new syntax
const myNewObject = {
	{ foo, bar };
};

// The latter approach is semantically identical, it's just syntactically sweeter.