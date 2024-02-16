dineroCofla = prompt("Ingrese la cantidad de dinero que tiene cofla?");
dineroRoberto = prompt("Ingrese la cantidad de dinero que tiene roberto?");
dineroPedro = prompt("Ingrese la cantidad de dinero que tiene pedro?")

/*Hcewr funcion para convertir a entero el valor con Parceint y que se muestre al ejecutar*/
dineroCofla = parseInt(dineroCofla)


if (dineroCofla >= 0.6 && dineroCofla < 1) {
  alert("Cofla Compra el helado de agua")
  alert("Y te sobran" + (dineroCofla - 0.6))
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
  alert("Cofla Compra el helado de crema de limon")
  alert("Y te sobran" + (dineroCofla - 1))
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
  alert("Cofla Compra el helado de crema de coco")
  alert("Y te sobran" + (dineroCofla - 1.6))
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
  alert("Cofla Compra el helado de cereza")
  alert("Y te sobran" + (dineroCofla - 1.7))
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
  alert("Cofla Compra el helado de mandarina")
  alert("Y te sobran" + (dineroCofla - 1.8))
}
else if (dineroCofla >= 2.9 ) {
  alert("Cofla Compra el helado de maracuya")
  alert("Y te sobran" + (dineroCofla - 2.9))
}
else {
  alert("Lo siento no puedes comprar helado")
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
  alert("Roberto Compra el helado de agua")
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
  alert("Roberto Compra el helado de crema de limon")
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
  alert("Roberto Compra el helado de crema de coco")
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
  alert("Roberto compra el helado de cereza")
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
  alert("Roberto Compra el helado de mandarina")
}
else if (dineroRoberto >= 2.9 ) {
  alert("Roberto Compra el helado de maracuya")
}
else {
  alert("Lo siento no puedes comprar helado")
}


if (dineroPedro >= 0.6 && dineroPedro < 1) {
  alert("Pedro Compra el helado de agua")
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
  alert("Pedro Compra el helado de crema de limon")
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
  alert("Pedro Compra el helado de crema de coco")
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
  alert("Pedro Compra el helado de cereza")
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
  alert("Pedro Compra el helado de mandarina")
}
else if (dineroPedro >= 2.9 ) {
  alert("Pedro Compra el helado de maracuya")
}
else {
  alert("Lo siento no puedes comprar helado")
}

/*Cofla quiere saber el vuelto*/