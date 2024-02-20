/*Clases*/
class animal {
  constructor (especie, edad, color){
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
  }
  verInfo= () =>
    document.write(this.info + '<br>')
}
let dog = new animal('perro', 5, 'marron');
document.write(dog.info + '<br>');

/*abstraccion*/

class animales{
  constructor (especie, edad, color){
    this.especie = especie;
    this.edad = edad;
    this.color = color;
  }
  verInfo= () =>
    document.write(`Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}` + '<br>')
}
let cat = new animales('gato', 2, 'blanco');
cat.verInfo();

/*Herencia es crear una clase q toma lo q puede hacer kla anterior clase y agregarle mas cosas*/
class perro extends animales{
  constructor(especie, edad, color, raza){
    super(especie, edad, color);
    this.raza = raza;
  }
  ladrar = () =>
    document.write('Guau' + '<br>')
}
  verInfo= () => {
    document.write(`Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color} y soy de raza ${this.raza}<br>`);
  }
/*static*/
class calculadora {
  static sumar(a, b){
    return a + b;
  }
  static restar(a, b){
    return a - b;
  }
}
document.write('La suma es: ' + calculadora.sumar(5, 3) + '<br>');
document.write('La resta es: ' + calculadora.restar(5, 3) + '<br>');

/*getters*/
class persona {
  constructor(nombre, apellido){
    this._nombre = nombre;
    this._apellido = apellido;
  }
  get nombre(){
    return this._nombre;
  }
  get apellido(){
    return this._apellido;
  }
}
const persona1 = new persona('Juan', 'Perez');
document.write(persona1.nombre + '<br>');
/*set*/



