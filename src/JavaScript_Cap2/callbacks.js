/*callbacks funcion flecha*/
let doWork = (data, callback) => {
    callback('done');
}

doWork('data', (result) => {
    console.log(result);
});

let name =(name, callback) => {
    callback('Hola ' + name);
}

name('Mia', (result) => {
    console.log(result);
});

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const personas = [
  ['Mia', 20],
  ['Luis', 25],
  ['Sofia', 30],
  ['Carlos', 35]
];

for (let i = 0; i < personas.length; i++) {
  let persona = new Person(personas[i][0], personas[i][1]);
  console.log(persona);
}


