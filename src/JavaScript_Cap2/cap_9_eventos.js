/*manejador de eventois asi no se recomienda manejar los eventos es mas facil usarlos desde los html ejemplo si se queire dar oncllick a un boton*/
const button = document.querySelector('.button');
button.addEventListener('click', () => {
    console.log('button was clicked');
}
);
/*manejador de eventos con parametros*/
const button = document.querySelector('.button');
button.addEventListener('click', (event) => {
    console.log(event);
}
);
/*manejador de eventos con parametros*/
const button = document.querySelector('.button');
button.addEventListener('click', (event) => {
    console.log(event
    );
    console.log(event.target);

}
);
 setTimeout(() => {
    button.removeEventListener('click', () => {
        console.log('button was clicked');
    }
    );
}
, 3000);