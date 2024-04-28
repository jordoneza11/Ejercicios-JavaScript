// 12. Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
// Pseudocodigo
// Escribir "Ingrese el monto de la factura"
// Leer montoFactura
// Escribir "Ingrese el porcentaje del IVA"
// Leer porcentajeIva
// montoIva= montoFactura*(porcentajeIva/100)
// montoTotal=montoFactura+montoIva
// Escribir "Su monto total es de " +montoTotal+ "dolares"
const read = require('prompt-sync')();
let montoFactura= read("Ingrese el monto de la factura")
montoFactura= parseFloat(montoFactura)
let porcentajeIva= read("Ingrese el porcentaje del IVA")
lporcentajeIva= parseFloat(porcentajeIva)
let montoIva = montoFactura*(porcentajeIva/100)
let montoTotal = montoFactura+montoIva
console.log("Usted tiene que pagar un total de " +montoTotal+ " dolares")
