/*Objeto math*/
// Propiedades
console.log(Math.E); // Constante de Euler
console.log(Math.LN2); // Logaritmo natural de 2
console.log(Math.LN10); // Logaritmo natural de 10
console.log(Math.LOG2E); // Logaritmo base 2 de E
console.log(Math.LOG10E); // Logaritmo base 10 de E
console.log(Math.PI); // Valor de PI
console.log(Math.SQRT1_2); // Raiz cuadrada de 1/2
console.log(Math.SQRT2); // Raiz cuadrada de 2

// Métodos
console.log(Math.abs(-7.8)); // Valor absoluto
console.log(Math.ceil(7.8)); // Redondeo hacia arriba
console.log(Math.floor(7.8)); // Redondeo hacia abajo
console.log(Math.round(7.8)); // Redondeo
console.log(Math.max(7, 8, 9)); // Valor máximo
console.log(Math.min(7, 8, 9)); // Valor mínimo
console.log(Math.pow(2, 3)); // Potencia
console.log(Math.random()); // Número aleatorio
console.log(Math.sqrt(9)); // Raiz cuadrada
console.log(Math.sign(-7.8)); // Signo
console.log(Math.trunc(7.8)); // Elimina los decimales

// Path: objeto-date.js
/*Objeto date*/
// Crear un objeto date
let fecha = new Date();
console.log(fecha);
// Crear un objeto date con una fecha específica
let fecha2 = new Date(2021, 11, 31, 23, 59, 59);
console.log(fecha2);

// Métodos
console.log(fecha.getDate()); // Día del mes
console.log(fecha.getDay()); // Día de la semana
console.log(fecha.getFullYear()); // Año
console.log(fecha.getHours()); // Horas
console.log(fecha.getMilliseconds()); // Milisegundos
console.log(fecha.getMinutes()); // Minutos
console.log(fecha.getMonth()); // Mes
console.log(fecha.getSeconds()); // Segundos
console.log(fecha.getTime()); // Tiempo en milisegundos
console.log(fecha.getTimezoneOffset()); // Diferencia horaria
console.log(fecha.getUTCDate()); // Día del mes en UTC
console.log(fecha.getUTCDay()); // Día de la semana en UTC
console.log(fecha.getUTCFullYear()); // Año en UTC
console.log(fecha.getUTCHours()); // Horas en UTC
console.log(fecha.getUTCMilliseconds()); // Milisegundos en UTC
console.log(fecha.getUTCMinutes()); // Minutos en UTC
console.log(fecha.getUTCMonth()); // Mes en UTC
console.log(fecha.getUTCSeconds()); // Segundos en UTC

