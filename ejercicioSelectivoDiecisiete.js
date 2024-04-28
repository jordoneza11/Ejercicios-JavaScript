// Inicio
// Función CalcularPrecioPorKilo(tipo, tamaño)
// precioInicial = 0  
// Si tipo es igual a 'A' entonces
// Si tamaño es igual a 1 entonces
// precioInicial = 2
// Sino Si tamaño es igual a 2 entonces
// precioInicial = 3
// Fin Si
// Sino Si tipo es igual a 'B' entonces
// Si tamaño es igual a 1 entonces
// precioInicial = -3
// Sino Si tamaño es igual a 2 entonces
// precioInicial = -5
// FinSi
// FinSi        
// precioBase = 10      
// precioFinal = precioBase + precioInicial
// Devolver precioFinal
// Fin Función
// tipoBanano = SolicitarEntrada("Ingrese el tipo de banano (A o B):")
// tamañoBanano = ConvertirEntero(SolicitarEntrada("Ingrese el tamaño del banano (1 o 2):"))
// precioPorKilo = CalcularPrecioPorKilo(tipoBanano, tamañoBanano)
// Mostrar("El productor recibirá $" + precioPorKilo + " por cada kilo de banano que entregue.")
// Función para calcular el precio por kilo de banano para un productor
function calcularPrecioPorKilo(tipo, tamaño) {
    let precioInicial = 0;
    if (tipo === 'A') {
        if (tamaño === 1) {
            precioInicial = 2;
        } else if (tamaño === 2) {
            precioInicial = 3;
        }
    } else if (tipo === 'B') {
        if (tamaño === 1) {
            precioInicial = -3;
        } else if (tamaño === 2) {
            precioInicial = -5;
        }
    }
    let precioBase = 10;
    let precioFinal = precioBase + precioInicial;
    
    return precioFinal;
}
const read = require('prompt-sync')();
let tipoBanano = read("Ingrese el tipo de banano (A o B):");
let tamañoBanano = parseInt(read("Ingrese el tamaño del banano (1 o 2):"));
let precioPorKilo = calcularPrecioPorKilo(tipoBanano.toUpperCase(), tamañoBanano);
console.log("El productor recibirá " + precioPorKilo + " por cada kilo de banano que entregue.");

