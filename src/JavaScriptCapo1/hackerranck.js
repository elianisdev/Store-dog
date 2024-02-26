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
function diagonalDifference(arr) {
  let suma1 = 0;
  let suma2 = 0;
  for (let i = 0; i < arr.length; i++){
    suma1 += arr[i][i];
    suma2 += arr[i][arr.length - 1 - i];
  }
  return Math.abs(suma1 - suma2);
}

