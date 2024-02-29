let ventana = window.open('http://www.google.com', '_blank', 'location=yes');
ventana.closed; // false

window.alert('Hola Mundo');
window.print();
window.prompt('Dime tu nombre');
window.confirm('¿Estás seguro?'); // true o false
window.open('http://www.google.com', '_blank', 'location=yes');
window.close();
window.scrollBy(0, 100);
window.scrollTo(0, 100);
window.innerHeight;
window.innerWidth;
window.outerHeight;
window.outerWidth;
window.screenX;
window.screenY;
window.screenLeft;
window.screenTop;
window.location.href;
window.location.protocol;
window.location.host;
window.location.hostname;
window.location.port;

const screen = window.screen // en consola
console.log(screen);
// Screen {availWidth: 1920, availHeight: 1040, width: 1920, height: 1080, colorDepth: 24, …}
// availHeight: 1040
// availLeft: 0
// availTop: 0
// availWidth: 1920
// colorDepth: 24
// height: 1080
// pixelDepth: 24
// width: 1920
// __proto__: Screen

window.location.pathname;
window.location.search;
window.location.hash;
window.location.reload();
window.location.assign('http://www.google.com');
window.location.replace('http://www.google.com');
window.location.origin;
window.location.hostname;
window.location.port;
window.location.pathname;
window.location.search;
window.location.hash;


/*Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe .

Constraints



Output Format

Print the following  lines, each to  decimals:

proportion of positive values
proportion of negative values
proportion of zeros
Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Sample Output

0.500000
0.333333
0.166667
Explanation

There are  positive numbers,  negative numbers, and  zero in the array.
The proportions of occurrence are positive: , negative:  and zeros: .

Language
JavaScript (Node.js)
More
7891011121314151617181920212223242526272829303334353637383940413231
   let


}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));


Line: 31 Col: 8

Test against custom input
*/

function plusMinus(arr) {

  let positive = 0;
  let negative = 0;
  let zero = 0;
  let total = arr.length;
  for (let i = 0; i < total; i++){
    if (arr[i] > 0){
      positive++;
    }else if (arr[i] < 0){
      negative++;
    }else{
      zero++;
    }
  }
  console.log((positive / total).toFixed(6));
  console.log((negative / total).toFixed(6));
  console.log((zero / total).toFixed(6));
}