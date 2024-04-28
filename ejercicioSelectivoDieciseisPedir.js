// 16. Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual.
// Pseudocodigo
//Inicio
// Escribir "Ingrese su sueldo mensual"
// Leer sueldoMensual
// sueldoAnual= sueldoMensual*12
// Si sueldoAnual>30000 Entonces
// excedente=sueldoAnual-30000
// impuesto=sueldoAnual*0.15
// sueldoAnual=impuesto
// Escribir "Su sueldo anual es " +sueldoAnual
//Fin
const read = require('prompt-sync')();
let sueldoMensual= read("Ingrese su sueldo mensual")
sueldoMensual= parseFloat(sueldoMensual)
let sueldoAnual=sueldoMensual*12
if (sueldoAnual>30000) {
    let excedente=sueldoAnual-30000
    let impuesto=sueldoAnual*0.15
    sueldoAnual=impuesto
}
console.log("Su sueldo anual es de " +sueldoAnual+ " dolares")
