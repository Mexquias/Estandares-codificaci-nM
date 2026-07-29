function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

// FUNCIÓN NUEVA: calcularIGV
function calcularIGV(monto) {
    return monto * 0.18;
}

console.log("EJECUTANDO PRUEBAS");

console.assert(sumar(2, 3) === 5, "Error: sumar(2, 3) debería ser 5");
console.assert(restar(5, 3) === 2, "Error: restar(5, 3) debería ser 2");
console.assert(multiplicar(2, 3) === 6, "Error: multiplicar(2, 3) debería ser 6");
console.assert(dividir(10, 2) === 5, "Error: dividir(10, 2) debería ser 5");
console.assert(dividir(10, 0) === "Error: División por cero",
    "Error: dividir(10, 0) debería retornar mensaje de error");

// Pruebas para calcularIGV
console.assert(calcularIGV(100) === 18, "Error: 18% de 100 debería ser 18");
console.assert(calcularIGV(50) === 9, "Error: 18% de 50 debería ser 9");
console.assert(calcularIGV(0) === 0, "Error: 18% de 0 debería ser 0");

console.log("FIN DE PRUEBAS");
console.log("Todas las pruebas pasaron");
