// Ejercicio 1: Identifica violaciones en try-catch
// Código corregido

try {
    let resultado = 10 / 0;
    console.log("Resultado:", resultado);
} catch (error) {
    console.log("Ocurrió un error:", error.message);
}
