var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function(){
  console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function(){
  console.log('A greeting ocurred!');
});

emtr.on('greet2', function(){
  console.log('Im Ragnar Lothbrok');
});

console.log('Hello!');
emtr.emit('greet');
emtr.emit('greet2');