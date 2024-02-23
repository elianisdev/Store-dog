/*Como obtener el valor */

// 1. Obtener el valor de un input

parrafo = document.getElementById('parrafo');
document.write(parrafo)

parrafo = document.getElementsByTagName('p');
document.write(parrafo)

parrafo = document.querySelector('.parrafo');
document.write(parrafo)
parrafo = document.querySelectorAll('p');
document.write(parrafo)

/*Ejemplo para modificar el valor de un atributo inicialmente era una arra y luego lo modifico con setAtributte y puedo cambiar el type color agregar elementos*/
//const rango = document.querySelector('.rango');
/*Modificar el valor de un atributo*/
rango.setAttribute('type', 'color');

/*Para obtener el valor */
const rango = document.querySelector('.rango');
document.write(rango.getAttribute('type'))

/*PARA RMOVER UN ATRIBUTO*/
rango.removeAttribute('type');
document.write(rango.getAttribute('type'))
