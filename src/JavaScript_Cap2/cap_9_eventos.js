/*manejador de eventois asi no se recomienda manejar los eventos es mas facil usarlos desde los html ejemplo si se queire dar oncllick a un boton*/
const button = document.querySelector('.button');
button.addEventListener('click', () => {
    console.log('button was clicked');
}