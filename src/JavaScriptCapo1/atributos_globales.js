const titulo = document.querySelector(".titulo")
/*modificar el stributo para cambiar el titulo, texto debe estar en true */
//titulo.setAttribute("contentEditable", "true")

/*modificar el stributo para que quede el texto tal cual el titulo, texto debe estar en false */
titulo.setAttribute("contentEditable", "false")
/*no se recomienda hacerlo desde el atributo sino desde css*/
titulo.setAttribute("dir", "rtl")

/*atributos de inputs*/
// input = document.querySelector(".input-normal")
//input.setAttribute("type", "password")
//input.setAttribute("placeholder", "ingrese su contraseña")
//input.setAttribute("value", "123456")
//input.setAttribute("readonly", "true")
//input.setAttribute("disabled", "true")

const input = document.querySelector(".input-normal");

//document.write(input.className)
//document.write(input.value)
document.write(input.type = "range")
input.setAttribute("minlength", "4")
titulo.style.color = "red"