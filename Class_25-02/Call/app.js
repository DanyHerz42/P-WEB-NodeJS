var obj = {
  name: 'John Doe',
  greet: function(param) {
    console.log(`Hello ${this.name} ${param}`);
  }
}

obj.greet();
obj.greet.call({name: 'Jane Doe'}); //el call nos permite llamar funciones de un objeto y sobreescribir atributos del objeto
obj.greet.apply({name: 'Jane Doe'});

var param = 'SIUUUU';
obj.greet.call({name: 'El bicho'}, param);


