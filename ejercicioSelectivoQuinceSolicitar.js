// 15.Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. Si el año de fabricación es anterior a 2010, aplicar un descuento del 10% sobre el precio de venta y mostrar el precio final.
// Pseudocodigo
//Inicio
// Escribir "Ingrese el precio de venta del vehiculo nuevo"
// Leer precioVenta
// Escribir "Ingrese el año de fabricacion"
// Leer añoFabricacion
// Si añoFabricacion<2010 Entonces
// descuento=precioVenta*0.10
// Sino
// descuento=0
// FinSi
// precioFinal= precioVenta-descuento
// Escribir "El precio final del vehiculo es de  " +precioFinal
//Fin
const read = require('prompt-sync')();
let precioVenta= read("Ingrese el precio de venta del vehiculo nuevo")
precioVenta= parseFloat(precioVenta)
let añoFabricacion= read("Ingrese el año de fabricacion")
añoFabricacion= parseInt(añoFabricacion)
if (añoFabricacion<2010){
    descuento= precioVenta*0.10
}
else {
    descuento=0
}
let precioFinal= precioVenta-descuento
console.log("El precio final del vehiculo es de " +precioFinal+ " dolares")