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

/*Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.

Constraints

 .

Output Format

Print a staircase of size  using # symbols and spaces.

Note: The last line must have  spaces in it.

Sample Input

6
Sample Output

     #
    ##
   ###
  ####
 #####
######
Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of .*/

function staircase(n) {
  for (let i = 1; i <= n; i++){
    console.log(' '.repeat(n - i) + '#'.repeat(i));
  }
}