fetch("https://63a2728da543280f776fa958.mockapi.io/api/v1/users",{
    method: "POST",
    body: `{
      "name": "Eliana Suancha",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/914.jpg"}`,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json())
.then(data => console.log(data));


// Path: fetch.js
let headers = {
  method: "POST",
  body: `{
      "name": "Eliana Suancha",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/914.jpg"}`,
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
};
fetch("https://63a2728da543280f776fa958.mockapi.io/api/v1/users",{headers})
  .then(response => response.json())
  .then(data => console.log(data));

/*Para acceder a una imagen con fecth hago lo siguiente*/
fetch("https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/914.jpg")
  .then(response => response.blob())
  .then(blob => {
    let url = URL.createObjectURL(blob);
    let img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
  });

/*Libreria Axios*/

// Path: src/JavaScript_Cap2/axios.js


// Path: axios.js /*La mejor forma de usar axios es esta */
axios.post("https://63a2728da543280f776fa958.mockapi.io/api/v1/users",{
  "name": "Eliana Suancha",
  "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/914.jpg"
}).then(response => console.log(response.data));


axios("https://pokeapi.co/api/v2/encounter-method/{3}")
.then(response => console.log(response.data));

/*ejemplo de adxios 2 se pone axios seguido de la url entre llaves metodo, la data q sewria el objeto con la informacion  */

axios("https://pokeapi.co/api/v2/encounter-method/{3}", {
  method: "post",
  data: {
    "nombre": "amia"
  }
}).then(response => console.log(response.data));
