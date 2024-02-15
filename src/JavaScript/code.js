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

