
function simpleArraySum(ar) {
  let n = ar.length;
  let result = 0
  for (let i = 0; i < n; i++){
    result = result + ar[i];
    console.log(n, i)
  }
  return result;
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11])) // 31

/*el revisor otorga puntos de en escala de 1-100
* para 3 categorias
* 1. claridad del problema
* 2. originalidad
* 3.dificultad
* Calificacion alice a = (a[0], a[1], a[2])
* Bob b = (b[0], b[1], b [2]).
* tAREA es encontrar los puntos de comparacion
* a[0] con b[0]
*a[1] con b[1]
*a[2] con b[2]
* Si a es mayor a b alice recibe un punto
* si a es menor a b bob recibe punto
* si son = no se reciben puntos
* los puntos de comparacion son los puntos totales que obtuvo una eprsona
* int a[3]: Alice's challenge rating
int b[3]: Bob's challenge rating  */
function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < a.length; i++){
    if (a[i] > b[i]){
      alice++;
    } else if (a[i] < b[i]){
      bob++;
    }
  }
  return [alice, bob];
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10])) // [1, 1]
