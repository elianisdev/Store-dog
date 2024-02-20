/*Un joven muy afortunado logro ganar el primer premio de la loteria... exacto, estamos hablando del pobre al que cofla le dio una mano, este pobre decide hacer una fiesta para celebrar que salio de la pobreza con este millonario compro una maquina que deja pasar solamente a los mayores de edad, entre otras cosas ...
* 1. dejar pasar solo a los mayore4s de edad
* 2. la primera persona que entre despues de las 2 am , no paga*/

let free = false;
const validarCliente = (time, age) => {
  if (time >= 2 && time < 7 && !free) {
    free = true;
  }
  if (age >= 18) {
    console.log(`puede pasar`);
  } else {
    console.log(`no puede pasar`);
  }
};

validarCliente(2, 25);
validarCliente(2, 17);
validarCliente(2, 18);

/*cofla vuelve de la comisaria exausto y por lo cansado que estaba se fue a dormir.. al otro dia comienza las clases de la universidad (cfla quiere ser prograsmador y se inscribio en la facultad de desarrollo de software
) en su curso en total son 19 alumnos, pero surgio un proboema que complico un poc la facultad: se rompio el sistema de registro de asistencia y durante los proximos 30 dias no se podran hacer registros de datos de ningun tipo por ende las clases no podran comenzar hasta que esto este solucionado*/

/*1. Crear mini sitema que nos permita registrar los alumnos que estan presentes (P) y ausentes (A) en clase.
* 2. pasado los 30 dias mostrar la situacion final de todos los alumnos ( nro total de presentes y ausentes)
* 3. se puede tener un maximo de 10 % de ausencias por semestre, si se tienen mas aclarar que esta reprobado*/

let cantidad = prompt(`Cuantos alumnos son?`);
let alumnosTotales = [];
for (let i = 0; i < cantidad; i++) {
  alumnosTotales[i] = [prompt(`Nombre del alumno ${i + 1}`), 0];
}

const tomarAsistencia = (nombre, p) => {
 let presencia = prompt(nombre);
  if (presencia === `p` || presencia === `P`) {
    alumnosTotales[p][1]++;
  }
}
 for (i = 0; i < 30; i++) {
   for (alumno in alumnosTotales) {
     tomarAsistencia(alumnosTotales[alumno][0], alumno);
   }
 }

  for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    __________Presentes: ${alumnosTotales[alumno][1]} <br>
    __________Ausentes: ${30 - alumnosTotales[alumno][1]}`;
    if (30 - alumnosTotales[alumno][1] > 18) {
      resultado += `<b>Reprobado por inasistencias</b><br>`;
    } else {
      resultado += `<br>`;
    }
    document.write(resultado);
  }
  console.log(alumnosTotales);

  /*Crear calculadora*/
  const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
  }
  const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
  }
  const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
  }
  const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
  }
  const calculadora = (num1, num2, operacion) => {
    return operacion(num1, num2);
  }
  console.log(calculadora(2, 2, sumar));
  console.log(calculadora(2, 2, restar));
  console.log(calculadora(2, 2, multiplicar));
  console.log(calculadora(2, 2, dividir));
  console.log(calculadora(2, 2, (num1, num2) => num1 * num2)); //funcion anonima
