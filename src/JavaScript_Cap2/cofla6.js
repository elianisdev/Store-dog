alumno = [{
    nombre: "Cofla",
    email: "cofla@mail.com",
    materia: "Programación",
},
  {
    nombre: "karen",
    email: "karen@mail.com",
    materia: "fisica",
  },
  {
    nombre: "laura",
    email: "laura@mail.com",
    materia: "calculo",
  },
  {
    nombre: "jorge",
    email: "jorge@mail.com",
    materia: "ciencias",
  },
  {
    nombre: "mia",
    email: "mia@mail.com",
    materia: "Programación",
  }
];
let boto = document.querySelector(".boton");
let alumnosTotales = [];


for (let alumno in alumnosTotales) {

 let datos = alumnosTotales[alumno];
 let nombre = datos.nombre;
  let email = datos.email;
let materia = datos.materia;
  document.querySelector(".grid-container").innerHTML = `<div class= "grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <div class= "grid-item nombre">Eliana Suancha</div>
        <div class="grid-item email">elianitasuanguz@gmail.com</div>
        <div class="grid-item materia">logica de programacion</div>
        <div class="grid-item semana"></div>`;
}
boto.addEventListener("click", function () {
  let nombre = document.querySelector(".nombre").value;
  let email = document.querySelector(".email").value;
  let materia = document.querySelector(".materia").value;
  let semana = document.querySelector(".semana").value;
  document.querySelector(".grid-container").innerHTML = `<div class= "grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">${semana}</div>`;
  alumnosTotales.push({
    nombre: nombre,
    email: email,
    materia: materia,
    semana: semana
  });
  console.log(alumnosTotales);
} )

