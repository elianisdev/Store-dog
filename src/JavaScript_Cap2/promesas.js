/*promesass*/
let miPromesa = new Promise((resolve, reject) => {
    let expresion = true;
    if(expresion)
        resolve('Resolvió correcto');
    else
        reject('Se produjo un error');
}
);

miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);

console.log(miPromesa)

/*asinc-await*/
const objeto = {
    nombre: 'Juan',
    edad: 25,
    pais: 'Colombia'
}

const obtenerInformacion = () => {
    return objeto;
}

//console.log(obtenerInformacion());

const mostrarResultado = async () => {
    resultado = await obtenerInformacion();
    console.log(resultado);
}
mostrarResultado();