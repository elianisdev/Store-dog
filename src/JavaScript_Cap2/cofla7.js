const sendButton = document.getElementById('snd-nota');

sendButton.addEventListener("click", () => {
  let resultado, mensaje;
  try {
    prevRes = parseInt(document.getElementById('nota').value);
    if (isNaN(prevRes)) {
      throw new Error('No es un número');
    }
    resultado = verificarNota(prevRes);
    mensaje = 'Nota enviada';
  } catch (error) {
    resultado = 'Error';
    mensaje = 'inesperado estas intentando hackearme?';
  }
  abrirModal(resultado, mensaje);
});

const verificarNota = (prevRes) => {
  let resultado;
  switch (prevRes) {
case 10:
      console.log('Excelente');
      break;
    case 9:
      console.log('Muy bien');
      break;
    case 8:
      console.log('Bien');
      break;
    case 7:
      console.log('Regular');
      break;
    case 6:
      console.log('Mal');
      break;
    default:
      console.log('Muy mal');

  }
  return resultado;
}
const abrirModal = (mensaje, resultado) => {
console.log( mensaje, resultado);

}



