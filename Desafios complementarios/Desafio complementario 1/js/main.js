const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const descuento = (a, b) => sumar (a, b) / 100;

let productoPrecio = 2500;
let cantidadProducto = 20;
let totalDescuento = 15;

let precioNuevo = restar(sumar(productoPrecio, cantidadProducto), sumar(descuento(productoPrecio, totalDescuento),cantidadProducto));;
console.log(precioNuevo);