
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