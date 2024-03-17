/*realizr una FORMULARIO que contenga nombre,mail y materia perdida, validar mails y nombres y enviar al servidor de manera pulida*/

/*cofla reprobo 2 materias y ahora tiene que enviar un formulario para registrarse en la materia que debe*/

const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const materia = document.getElementById("materia");
const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    if (validarMail(mail) && validarNombre(nombre)) {
        enviarDatos();
    }
}
);

const validarMail = (mail) => {
    if (mail.value.includes("@") && mail.value.includes(".")) {
        return true;
    } else {
        alert("Mail no valido");
        return false;
    }
}

const validarNombre = (nombre) => {
    if (nombre.value.length > 0) {
        return true;
    } else {
        alert("Nombre no valido");
        return false;
    }
}

const enviarDatos = () => {
    const datos = {
        nombre: nombre.value,
        mail: mail.value,
        materia: materia.value
    }
    console.log(datos);
    //enviar datos al servidor
}



