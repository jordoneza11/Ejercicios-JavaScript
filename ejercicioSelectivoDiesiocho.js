// 18.	“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
// El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00.  Para más de 200 personas el costo por platillo es de $10.00.
// Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva
// Pseudocodigo
//Inicio
// Leer cantidadDePersonas
// Leer costoPorPlatillo
// Leer iva
// Si cantidadDePersonas <= 100 Entonces
// totalSinIva = cantidadDePersonas * costoPorPlatillo
// Sino Si cantidadDePersonas > 100 y cantidadDePersonas <= 200 Entonces
// totalSinIva = cantidadDePersonas * 15
// Sino
// totalSinIva = cantidadDePersonas * 10
// FinSi
// totalConIva = totalSinIva + (totalSinIva * iva)
// Escribir "El presupuesto total es: ", totalConIva
//Fin
function calcularPresupuesto(cantidadDePersonas, costoPorPlatillo, iva) {
    let totalSinIva;
    if (cantidadDePersonas <= 100) {
        totalSinIva = cantidadDePersonas * costoPorPlatillo;
    } else if (cantidadDePersonas > 100 && cantidadDePersonas <= 200) {
        totalSinIva = cantidadDePersonas * 15;
    } else {
        totalSinIva = cantidadDePersonas * 10;
    }
    let totalConIva = totalSinIva + (totalSinIva * iva);
    return totalConIva;
}
const read = require('prompt-sync')();
let cantidadDePersonas = 150;
let costoPorPlatillo = 20.00;
let iva = 0.15;
let presupuestoTotal = calcularPresupuesto(cantidadDePersonas, costoPorPlatillo, iva);
console.log("El presupuesto total es: " + presupuestoTotal); 
