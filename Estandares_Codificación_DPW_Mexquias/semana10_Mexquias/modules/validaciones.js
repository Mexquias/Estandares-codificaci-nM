export function esNumeroValido(valor) {
    const numero = parseFloat(valor);
    return !isNaN(numero);
}

export function validarDivision(divisor) {
    return divisor !== 0;
}

export function mostrarError(mensaje) {
    const resultadoDiv = document.getElementById("resultado");
    if (resultadoDiv) {
        resultadoDiv.innerHTML = `<span style="color: red;">${mensaje}</span>`;
    }
}

export function limpiarError() {
    const resultadoDiv = document.getElementById("resultado");
    if (resultadoDiv) {
        resultadoDiv.innerHTML = "Esperando operación...";
    }
}
