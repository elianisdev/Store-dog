/*concat junta dos o mas cadebnas y retorna una nueva*/

let cadena = "Cadena de prueba"
resultado = cadena.concat(" con concat")
document.write(resultado)

/*startWith si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false */

let cadena1 = "Cadena de prueba"
resultado = cadena1.startsWith("Cadena")
document.write(resultado)

/*endsWith si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false */

let cadena2 = "Cadena de prueba"
resultado = cadena2.endsWith("prueba")
document.write(resultado)

/*includes si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false */

let cadena3 = "Cadena de prueba"
resultado = cadena3.includes("de")
document.write(resultado)

/*indexOf devuelve el indice de la primera aparicion de la cadena, sino la encuentra devuelve -1 */

let cadena4 = "Cadena de prueba"
resultado = cadena4.indexOf("ca")
document.write(resultado)

/*lastIndexOf devuelve el indice de la ultima aparicion de la cadena, sino la encuentra devuelve -1 */

let cadena5 = "Cadena de prueba"
resultado = cadena5.lastIndexOf("a")
document.write(resultado)

/*padStart rellena la cadena con un texto hasta alcanzar la longitud deseada */

let cadena6 = "Cadena de prueba"
resultado = cadena6.padStart(30, "Hola")
document.write(resultado)

/*padEnd rellena la cadena con un texto hasta alcanzar la longitud deseada */

let cadena7 = "Cadena de prueba"
resultado = cadena7.padEnd(10, "Hola")
document.write(resultado)

/*repeat repite la cadena el numero de veces que se le indique */

let cadena8 = "Cadena de prueba"
resultado = cadena8.repeat(3)
document.write(resultado)

/*replace reemplaza una cadena por otra */

let cadena9 = "Cadena de prueba"
resultado = cadena9.replace("prueba", "reemplazo")
document.write(resultado)

/*slice extrae una seccion de una cadena y devuelve una cadena nueva */

let cadena10 = "Cadena de prueba"
resultado = cadena10.slice(3, 10)
document.write(resultado)

/*split divide una cadena en subcadenas y las devuelve en un array */

let cadena11 = "Cadena, de, prueba"
resultado = cadena11.split(",")
document.write(resultado)

/*substring devuelve una subcadena de una cadena */

let cadena12 = "Cadena de prueba"
resultado = cadena12.substring(3, 10)
document.write(resultado)

/*toLowerCase convierte una cadena a minusculas */

let cadena13 = "Cadena de prueba"
resultado = cadena13.toLowerCase()
document.write(resultado)

/*toUpperCase convierte una cadena a mayusculas */

let cadena14 = "Cadena de prueba"
resultado = cadena14.toUpperCase()
document.write(resultado)

/*trim elimina los espacios en blanco al principio y al final de la cadena */

let cadena15 = "Cadena de prueba"
resultado = cadena15.trim()
document.write(resultado)

/*valueOf devuelve el valor primitivo de un objeto string */

let cadena16 = "Cadena de prueba"
resultado = cadena16.valueOf()
document.write(resultado)

// Path: metodos-matematicos.js
/*Math.abs devuelve el valor absoluto de un numero */

let numero = -5
resultado = Math.abs(numero)
document.write(resultado)

/*Math.ceil devuelve el entero mas grande mayor o igual que un numero */

let numero1 = 5.1
resultado = Math.ceil(numero1)
document.write(resultado)

/*Math.floor devuelve el entero mas pequeño menor o igual que un numero */

let numero2 = 5.9
resultado = Math.floor(numero2)
document.write(resultado)

/*Math.pow devuelve la base elevada al exponente */

let numero3 = 5
resultado = Math.pow(numero3, 2)
document.write(resultado)

/*Math.random devuelve un numero pseudo-aleatorio entre 0 y 1 */

resultado = Math.random()
document.write(resultado)

/*Math.round devuelve el valor de un numero redondeado al entero mas cercano */

let numero4 = 5.5
resultado = Math.round(numero4)
document.write(resultado)





