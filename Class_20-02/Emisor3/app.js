var person = {
  firstname: ' ',
  lastname: ' ',
  greet: function() {
    return `Hi ${this.firstname} ${this.lastname}`
  }
}

var john = Object.create(person); //esta es otra forma de escribir un objeto sin necesidad de **New**
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john.greet())
console.log(john);

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';
console.log(jane.greet())
console.log(jane);
