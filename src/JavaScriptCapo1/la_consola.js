/*Manejo de consola*/
/*assert
clear
count
debug
dir
dirxml
error
exception

group
groupCollapsed
groupEnd
info
log
markTimeline
profile
profileEnd
table
time
timeEnd
timeStamp
trace
warn

console.log('Hola mundo');
console.error('Error');
console.warn('Advertencia');
console.info('Información');
console.debug('Depuración');
console.assert(5>4, '5 no es mayor que 4');
console.count('contador');
console.count('contador');
console.count('contador');
console.count('contador');
console.count('contador');
 */
/*Caso Cofla usando la consola*/


/*Caso Cofla usando la consola*/
const materias = {
    matematicas: [90, 6,4, "matematicas"],
    ingles: [85, 5,4, "ingles"],
    programacion: [45, 9,2, "programacion"],
    quimica: [90, 9,4, "quimica"],
}

const aprobo = (materia) => {

for (materia in materias) {
    let asistencias = materias[materia];
    if (asistencias >= 90) {
      console.log(`%c${materias[materia][3]}: ${materias[materia][0]}%`, `color: green`);
    } else if (asistencias >= 70) {
      console.log(`%c${materias[materia][3]}: ${materias[materia][3]}%`, `color: orange`);
    } else {
      console.log(`%c${materias[materia][3]}: ${materias[materia][2]}%`, `color: red`);
    }
  }
}

aprobo(materias);
 let trabajo="240 minutos de trabajo";
  let estudio="100 minutos de estudio";
  let tp="30 minutos de trabajo practico";
  let tiempoLibre="30 minutos de tiempo libre";

  console.log("Tareas");
  for ( let i=0; i<14; i++){
    if(i%5===0){
      console.log(trabajo);
    }else if(i%4===0){
      console.log(estudio);
    }else if(i%3===0){
      console.log(tp);
    }else if(i%2===0){
      console.log(tiempoLibre);
    }
  }
  console.log("Fin de las tareas");
  console.log("Fin de las tareas");

