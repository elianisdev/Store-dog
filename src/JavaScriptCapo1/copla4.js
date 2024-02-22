/*perfeccionar calculadora */
/*Crear calculadora*/

class Calculadora1 {
  constructor() {
  }
  sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
  }
  restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
  }
  multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
  }
  dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
  }
  calculadora1 = (num1, num2, operacion) => {
    return operacion(num1, num2);
  }
}
const calculadora = new  Calculadora();

console.log(calculadora(2, 2, sumar));
console.log(calculadora(2, 2, restar));
console.log(calculadora(2, 2, multiplicar));
console.log(calculadora(2, 2, dividir));
/*perfeccionar calculadora */

/*perfeccionar calculadora */
/*Crear una funcion */

 obtenerInformacion = (material) => {
materias = {
  fisica: ["perez", "pedro", "pepito", "cofla", "maria"],
  programacion: ["rodriguez", "pedro", "pepito", "cofla", "maria"],
  logica: ["hernandez", "pedro", "pepito", "cofla", "maria"],
}
if (materias[material] !== undefined) {
  return materias[material];
}
else {
  return `La materia no existe`;
}
}
/*cREAR FUNCION EN CUANTAS CLASE ESTA UN ALUMNO*/
const mostrarInfo = (alumno) => {
  let informacion = [alumno];
  for (materia in materias) {
    if (materias[materia].includes(alumno)) {
      informacion.push(materia);
    }
  }
  return informacion;
}
console.log(obtenerInformacion(`fisica`));
console.log(mostrarInfo(`cofla`));
