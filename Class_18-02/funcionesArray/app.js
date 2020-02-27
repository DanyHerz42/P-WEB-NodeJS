var obj = {
  greet: 'Hello',
  greetr: () => {
    console.log('Hola desde greetr')
  }
}

var key = 'greetr';
obj[key](); //acceder a una propiedad de un objeto por medio de un string que conicide con el nombre de la propiedad

console.log(obj.greet); // acceder a propiedades de un objeto mediante notacion del punto
console.log(obj['greet']); // acceder a propieddes de un objeto mediante brackets
var prop = 'greet'; // acceder a propieddes de un objeto mediante una variable string con el nombre de la propiedad
console.log(obj[prop]);

//funciones y arrays
var arr = [];
arr.push(function () {
  console.log('Hello world 1');
});
arr.push(function () {
  console.log('Hello world 2');
});
arr.push(function () {
  console.log('Hello world 3');
});

// lo de arriba es meter 3 funciones a un array con diferentes saludos

arr.forEach(function (item) { //se hace referencia a cada posicion del array por medio del nombre item
  item();     // se accede a las funciones del array por medio de un recorrido
});

arr[0](); //invocar funciones del array por medios de indice