/*Sentencia switch*/
let dia = 3;
let texto = "";
switch (dia) {
    case 1:
        texto = "Lunes";
        break;
    case 2:
        texto = "Martes";
        break;
    case 3:
        texto = "Miercoles";
        break;
    case 4:
        texto = "Jueves";
        break;
    case 5:
        texto = "Viernes";
        break;
    case 6:
        texto = "Sabado";
        break;
    case 7:
        texto = "Domingo";
        break;
    default:
        texto = "Dia no valido";
}
console.log(texto);

/*try- catch*/
try {
    let numero = 10;
    if (isNaN(numero)) {
        throw "No es un numero";
    }
    console.log(numero);
}
catch (error) {
    console.log(error);
}
/*finally*/
try {
    console.log("En el try se ejecuta el codigo");
}
catch (error) {
    console.log("En el catch se ejecuta el codigo");
}
finally {
    console.log("En el finally se ejecuta el codigo");
}
/*Sentencia for*/

for (let i = 0; i < 5; i++) {
    console.log(i);

}
/*Sentencia for in*/
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30
};
for (let propiedad in persona) {
    console.log(propiedad);
}

/*Sentencia for of*/
let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
    console.log(numero);
}
/*Sentencia while*/
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}
/*Sentencia do-while*/
let contador = 0;
do {
    console.log(contador);
    contador++;
}
while (contador < 5);
/*Sentencia break*/
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
/*throw*/
let numero = 10;
if (isNaN(numero)) {
    throw "No es un numero";
}
console.log(numero);
/*Sentencia continue*/
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
/*Sentencia return*/
function sumar(a, b) {
    return a + b;
}
console.log(sumar(5, 3));
