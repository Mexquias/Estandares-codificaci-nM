// Ejercicio 4: Manejar error de división por cero
// Código con validación y try-catch

function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

try {
    let resultado = dividir(10, 0);
    console.log("Resultado:", resultado);
} catch (error) {
    console.log("Error:", error.message);
}
