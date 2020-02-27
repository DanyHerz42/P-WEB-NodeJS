var greet = require('./greet');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed Hello world'; //cambia el value del key greeting

var greet3b = require('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4(); //se declara un nuevo objeto a partir del require
grtr.greet();
