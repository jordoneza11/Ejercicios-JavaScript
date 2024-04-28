// 13. Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento.
// Pseudocodigo
// Escribir "Ingrese el precio del producto"
// Leer precioProducto
// Escribir "Ingrese el porcentaje del descuento"
// Leer porcentajeDescuento
// descuento=precioProducto*(porcentajeDescuento/100)
// precioFinal= precioProducto-descuento
const read = require('prompt-sync')();
let precioProducto= read("Ingrese el precio del producto")
precioProducto= parseFloat(precioProducto)
let porcentajeDescuento= read("Ingrese el porcentaje de descuento")
porcentajeDescuento= parseFloat(porcentajeDescuento)
let descuento= precioProducto*(porcentajeDescuento/100)
let precioFinal= precioProducto-descuento
console.log("El total a pagar es " +precioFinal+ " dolares")