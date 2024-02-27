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


