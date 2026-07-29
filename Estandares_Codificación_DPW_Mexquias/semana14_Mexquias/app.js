function saludar() {
    const nombre = document.getElementById("nombre").value;
    const salida = document.getElementById("salida");

    if (!nombre || nombre.trim() === "") {
        salida.textContent = "Error: El nombre no puede estar vacío";
        return;
    }

    const nombreSeguro = nombre.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    salida.textContent = "Bienvenido " + nombreSeguro;
}

console.log("Aplicación cargada (versión segura contra XSS)");
