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
} finally {
    console.log("Intento de división completado");
}
