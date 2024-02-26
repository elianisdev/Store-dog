function compareTriplets(a, b) {
  let jugador1 = 0;
  let jugador2 = 0;
  for (let i = 0; i < a.length; i++){
    if (a[i] > b[i]){
      jugador1++;
    }else if (a[i] < b[i]){
      jugador2++;
    }
  }
  return [jugador1, jugador2]
}

/*Dada una matriz cuadrada, calcula la diferencia absoluta entre las sumas de sus diagonales.

Por ejemplo, la matriz cuadrada se muestra a continuación:

1 2 3
4 5 6
9 8 9
La diagonal de izquierda a derecha = . La diagonal de derecha a izquierda = . Su diferencia absoluta es.

Función descriptiva

Complete la función en el editor a continuación.

diagonalDifference toma el siguiente parámetro:

int arr[n][m]: una matriz de números enteros
Devolver

int: la diferencia diagonal absoluta
Formato de entrada

La primera línea contiene un único número entero, el número de filas y columnas de la matriz cuadrada.
Cada una de las siguientes líneas describe una fila y consta de números enteros separados por espacios.

Restricciones

Formato de salida

Devuelve la diferencia absoluta entre las sumas de las dos diagonales de la matriz como un único número entero.

Entrada de muestra

3
11 2 4
4 5 6
10 8-12
Salida de muestra

15
Explicación

La diagonal primaria es:

11
   5
     -12
Suma en la diagonal primaria: 11 + 5 - 12 = 4

La diagonal secundaria es:

     4
   5
10
Suma en la diagonal secundaria: 4 + 5 + 10 = 19
Diferencia: |4 - 19| = 15

Nota: |x| es el valor absoluto de x*/

function diagonalDifference(arr) {
  let suma1 = 0;
  let suma2 = 0;
  for (let i = 0; i < arr.length; i++){
    suma1 += arr[i][i];
    suma2 += arr[i][arr.length - 1 - i];
  }
  return Math.abs(suma1 - suma2);
}

