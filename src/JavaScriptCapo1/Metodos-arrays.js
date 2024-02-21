/*Metodos Arrays*/

//Metodo .push() - Agrega un elemento al final del array
let frutas = ['manzana', 'pera', 'uva'];
frutas.push('naranja');
console.log(frutas); //['manzana', 'pera', 'uva', 'naranja']

//Metodo .pop() - Elimina el ultimo elemento del array
let frutass = ['manzana', 'pera', 'uva'];
frutass.pop();
console.log(frutass); //['manzana', 'pera']

//Metodo .unshift() - Agrega un elemento al inicio del array
let frutasss = ['manzana', 'pera', 'uva'];
frutasss.unshift('naranja');
console.log(frutasss); //['naranja', 'manzana', 'pera', 'uva']

//Metodo .shift() - Elimina el primer elemento del array
let frutassss = ['manzana', 'pera', 'uva'];
frutassss.shift();
console.log(frutassss); //['pera', 'uva']

//Metodo .indexOf() - Busca un elemento en el array y devuelve su posicion

let frutas1 = ['manzana', 'pera', 'uva'];
let posicion = frutas1.indexOf('pera');
console.log(posicion); //1

//Metodo .splice() - Elimina elementos de un array y opcionalmente los reemplaza
let frutas2 = ['manzana', 'pera', 'uva'];
frutas2.splice(1, 1);
console.log(frutas2); //['manzana', 'uva']


//Metodo .slice() - Copia elementos de un array
let frutas3 = ['manzana', 'pera', 'uva'];
let copia = frutas3.slice();
console.log(copia); //['manzana', 'pera', 'uva']

//Metodo .concat() - Une dos o mas arrays
let frutas4 = ['manzana', 'pera', 'uva'];
let verduras = ['lechuga', 'tomate', 'pepino'];
let comida = frutas4.concat(verduras);
console.log(comida); //['manzana', 'pera', 'uva', 'lechuga', 'tomate', 'pepino']

//Metodo .join() - Une todos los elementos de un array en un string
let frutas5 = ['manzana', 'pera', 'uva'];
let cadena = frutas5.join();
console.log(cadena); //manzana,pera,uva

//Metodo .reverse() - Invierte el orden de los elementos de un array
let frutas6 = ['manzana', 'pera', 'uva'];
frutas6.reverse();
console.log(frutas6); //['uva', 'pera', 'manzana']

//Metodo .sort() - Ordena los elementos de un array
let frutas7 = ['manzana', 'pera', 'uva'];
frutas7.sort();
console.log(frutas7); //['manzana', 'pera', 'uva']

//Metodo .filter() - Crea un nuevo array con todos los elementos que cumplan la condicion
let frutas8 = ['manzana', 'pera', 'uva'];
let resultado = frutas8.filter(fruta => fruta.length > 4);
console.log(resultado); //['manzana']

//Metodo .map() - Crea un nuevo array con los resultados de la llamada a la funcion indicada
let frutas9 = ['manzana', 'pera', 'uva'];
let resultado2 = frutas9.map(fruta => fruta.length);
console.log(resultado2); //[7, 4, 3]

//Metodo .reduce() - Aplica una funcion a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un unico valor
let frutas10 = [1, 2, 3, 4];
let resultado3 = frutas10.reduce((total, valor) => total + valor, 0);
console.log(resultado3); //10

//Metodo .forEach() - Ejecuta la funcion indicada una vez por cada elemento del array
let frutas11 = ['manzana', 'pera', 'uva'];
frutas11.forEach(fruta => console.log(fruta)); //manzana, pera, uva

//Metodo .every() - Comprueba si todos los elementos del array cumplen la condicion
let frutas12 = ['manzana', 'pera', 'uva'];
let resultado4 = frutas12.every(fruta => fruta.length > 4);
console.log(resultado4); //false

//Metodo .some() - Comprueba si algun elemento del array cumple la condicion
let frutas13 = ['manzana', 'pera', 'uva'];
let resultado5 = frutas13.some(fruta => fruta.length > 4);
console.log(resultado5); //true

//Metodo .find() - Devuelve el primer elemento del array que cumple la condicion
let frutas14 = ['manzana', 'pera', 'uva'];
let resultado6 = frutas14.find(fruta => fruta.length > 4);
console.log(resultado6); //manzana

//Metodo .findIndex() - Devuelve el indice del primer elemento del array que cumple la condicion
let frutas15 = ['manzana', 'pera', 'uva'];
let resultado7 = frutas15.findIndex(fruta => fruta.length > 4);
console.log(resultado7); //0

//Metodo .includes() - Comprueba si un array contiene un elemento determinado
let frutas16 = ['manzana', 'pera', 'uva'];
let resultado8 = frutas16.includes('pera');
console.log(resultado8); //true

//Metodo .fill() - Rellena todos los elementos de un array con un valor estatico
let frutas17 = ['manzana', 'pera', 'uva'];
frutas17.fill('naranja');
console.log(frutas17); //['naranja', 'naranja', 'naranja']



