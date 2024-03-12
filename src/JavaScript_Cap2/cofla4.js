/*realizr una FORMULARIO que contenga nombre,mail y materia perdida, validar mails y nombres y enviar al servidor de manera pulida*/

/*cofla reprobo 2 materias y ahora tiene que enviar un formulario para registrarse en la materia que debe*/

const form = document.querySelector('.form');
const button = document.querySelector('.button');
const name = document.querySelector('.name');
const mail = document.querySelector('.mail');
const materia = document.querySelector('.materia');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('enviando formulario...');
    console.log('nombre: ' + name.value);
    console.log('mail: ' + mail.value);
    console.log('materia: ' + materia.value);
    if (name.value.trim().length > 0 && mail.value.trim().length > 0 && materia.value.trim().length > 0) {
        console.log('formulario enviado');
    } else {
        console.log('formulario no enviado');
    }
}, false);


