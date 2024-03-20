/*json para enviar datos a un servidor se serializa con las coimillas al principio y al final*/
objet = {
    "nombre": "Juan",
    "apellido": "Perez",
    "edad": 25,
    "direccion": {
        "calle": "Av. Siempre Viva",
        "numero": 123
    },
}
/*AJAX*/
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
xhr.send();
console.log(xhr);

/*fetch*/
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(data => console.log(data));

/*async await*/
async function obtenerPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json();
    console.log(data);
}
obtenerPokemon();

