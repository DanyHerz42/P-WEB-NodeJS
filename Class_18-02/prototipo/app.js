function Person(firstName, lastName) { // definicion de un objeto
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greet = function () { //Esta es la forma de extender la funcionalidad de un prototipo sin tener que ir a donde esta declarado el objeto
  console.log(`Hello, ${this.firstName} ${this.lastName}`);
}

var john = new Person('John','Doe');
console.log(john.firstName);''
john.greet(); //metodo que se crea usando el prototype de arriba

var jane = new Person('Jane','Doe');
console.log(jane.firstName);
jane.greet(); //metodo que se crea usando el prototype de arriba

console.log(john.__proto__); // forma de acceder al prototype de un objeto
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__); // el prototype de jane y john son iguales, retorna true