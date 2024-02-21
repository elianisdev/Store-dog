
/*quiere ver 3 celulares*/
class celulares {
  constructor(color, peso, resolucionPantalla, resolucionCamara, ram) {
    this.color = color;
    this.peso = peso;
    this.resolucionPantalla = resolucionPantalla;
    this.resolucionCamara = resolucionCamara;
    this.ram = ram;
    this.encender = false;
  }
  encender() {
    if (this.encender === false) {
      alert("celular prendido");
      this.encender = true;
    } else {
      alert("celular apagado");
      this.encender = true;
    }
  }
  reiniciar() {
    if (this.encender === true) {
      alert("reiniciando celular");
    }
    else {
      alert("el celular esta apagado");
    }
  }
  tomarFoto() {
    console.log("foto tomada en " + this.resolucionCamara);
  }
  grabarVideo() {
    console.log("grabando video en " + this.resolucionCamara);
  }
  mostrarInfo() {
    return `Color: ${this.color} Peso: ${this.peso} Resolucion de Pantalla: ${this.resolucionPantalla} Resolucion de Camara: ${this.resolucionCamara} Memoria Ram: ${this.ram}`;
  }
}
celular1 = new celulares("rojo", "150g", "5", "720", "2GB");
celular2 = new celulares("azul", "155g", "5.4", "1080", "3GB");
celular3 =  new celulares

console.log(celular1.mostrarInfo());
console.log(celular2.mostrarInfo());
console.log(celular3.mostrarInfo());
celular1.encender();
celular1.reiniciar();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.mostrarInfo();

/*implementar para celulares de alta gama*/
class altaGama extends celulares {
  constructor(color, peso, resolucionPantalla, resolucionCamara, ram, resolucionCamaraExtra, grabarVideoLento) {
    super(color, peso, resolucionPantalla, resolucionCamara, ram);
    this.resolucionCamaraExtra = resolucionCamaraExtra;
    this.grabarVideoLento = grabarVideoLento;
  }
  grabarVideoLento() {
    console.log("grabando video en camara lenta");
  }
  reconocimientoFacial() {
    console.log("vamos a iniciar un reconocimiento facial");
  }
  mostrarInfo() {
    return super.mostrarInfo() + ` Resolucion de Camara Extra: ${this.resolucionCamaraExtra} Grabar Video Lento: ${this.grabarVideoLento}`;
  }
}
/*Crear una app descargas puntuacion peso */
class app {
  constructor(nombre, peso) {
    this.nombre = nombre;
    this.peso = peso;
  }
  instalar() {
    console.log("instalando app " + this.nombre);
  }
  desinstalar() {
    console.log("desinstalando app " + this.nombre);
  }
}
app1 = new app("facebook", "100mb");
app2 = new app("instagram", "200mb");
app3 = new app("whatsapp", "300mb");

