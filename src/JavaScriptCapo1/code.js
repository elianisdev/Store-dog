recipiente = "papel";
console.log(recipiente);

/*Tipo de datos*/
string= "cadena de texto";
number= 10;
boolean= true;

/*Variables*/
let variable= "variable";
const constante= "constante";



/*Operadores*/
suma= 5+5;
resta= 5-5;
multiplicacion= 5*5;
division= 5/5;
modulo= 5%5;

/*Operadores de comparación*/
igual= 5==5;
diferente= 5!=5;
mayor= 5>5;
menor= 5<5;
mayorIgual= 5>=5;
menorIgual= 5<=5;

/*Operadores lógicos*/
and= true && true;
or= true || false;
not= !true;

/*Condicionales*/
if (true) {
    console.log("Es verdadero");
}
else{
    console.log("Es falso");
}

/*Ciclos*/
for (let index = 0; index < 5; index++) {
    console.log(index);
}


/*Funciones*/
function nombreFuncion() {
    console.log("Hola");
}
nombreFuncion();

/*Arreglos*/
arreglo = [1,2,3,4,5];
console.log(arreglo[0]);

/*Objetos*/
objeto = {
    nombre: "Juan",
    edad: 20
}
console.log(objeto.nombre);

/*Clases*/
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log("Hola");
    }
}
persona = new Persona("Juan", 20);
console.log(persona.nombre);

/*DOM*/
document.getElementById("id");
document.getElementsByClassName("clase");
document.getElementsByTagName("etiqueta");
document.querySelector("selector");
document.querySelectorAll("selector");
document.createElement("etiqueta");
document.createTextNode("texto");
document.removeChild("elemento");
document.innerHTML = "texto";
document.style = "propiedad: valor";
document.addEventListener("evento", function(){
    console.log("Evento");
});

let numero = null;
console.log(numero);

let nombre = prompt("Ingrese su nombre");
console.log(nombre);

/*operadores aritmeticos*/
let num1 = 5;
let num2 = 10;
let resultado = num1 + num2;
console.log(resultado);

/*operadores de asignacion*/
let a = 5;
let b = 10;
a += b;
document.write(a);

/*concatenacion*/
let nombre1 = "Juan";
let apellido = "Perez";
let nombreCompleto = nombre1 + " " + apellido;
console.log(nombreCompleto);

frase1 = "Hola";
frase2 = `soy ${nombre1}`;

/*operadores logicos*/
let valor1 = true;
let valor2 = false;
let resultado1 = valor1 && valor2;

let numero1 = 10;
let numero2 = 20;

document.write(numero1 === numero2);

/*Operadores logicos*/
let valor3 = true;
let valor4 = false;
let resultado2 = valor3 || valor4;
console.log(resultado2);


num1 = 10;
num2 = 20;
num3 = 30;
num4 = 40;
num5 = 50;

op = (num1 > num2) && (num3 < num4) || (num5 > num4)&& (num5 === num3);
/*False, true true false */

/*condicionales*/
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
}
else{
    console.log("Eres menor de edad");
}

