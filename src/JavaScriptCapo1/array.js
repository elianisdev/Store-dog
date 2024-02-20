/*let frutas = ["manzana", "pera", "uva", "fresa", "mango"];
document.write(frutas[4] );*/


/*array asociativos*/
/*let persona = {
    name: "Juan",
    age: 20,
    phone: "1234567890"
}
document.write(persona.name);*/

/*Bucles e iteración*/
/*for (let index = 0; index < frutas.length; index++) {
    document.write(frutas[index]);
}*/
/*SDe crea una variable para el ciclo for */

for (let i = 0; i < 6; i++) {
    document.write(i + "<br>");
}

/*Continue para saltar un numero o letras  en la iteracion*/
for (let i = 0; i < 6; i++) {
    if (i == 3) {
        continue;
    }
    document.write(i + "<br>");
}
/*for in*/
let animales = ["perro", "gato", "tigre", "leon"];
for (let animal in animales) {
    document.write(animales[animal] + "<br>");
}
/*for of*/
for (let animal of animales) {
    document.write(animal + "<br>");
}
/*fUNCIONES*/
/*function suma(a, b) {
    return a + b;
}
document.write(suma(5, 5));*/
/*Funciones flecha*/
const saludar = (nombre) => {
    return "Hola " + nombre + "!";
}
saludar("eliana");
/*foreach*/