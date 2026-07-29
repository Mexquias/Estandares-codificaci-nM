console.log("EJECUTANDO PRUEBAS DE RENDIMIENTO");

function bucleIneficiente() {
    const resultado = document.getElementById("resultado1");
    resultado.innerHTML = "";
    console.time("Bucle ineficiente");
    for (let i = 0; i < 10000; i++) {
        resultado.innerHTML += i + " ";
    }
    console.timeEnd("Bucle ineficiente");
    resultado.innerHTML += `<br><span class="tiempo">Tiempo: Ver consola (F12)</span>`;
}

function bucleEficiente() {
    const resultado = document.getElementById("resultado2");
    resultado.innerHTML = "";
    console.time("Bucle eficiente");
    let acumulador = "";
    const LIMITE = 10000;
    for (let i = 0; i < LIMITE; i++) {
        acumulador += i + " ";
    }
    resultado.innerHTML = acumulador;
    console.timeEnd("Bucle eficiente");
    resultado.innerHTML += `<br><span class="tiempo">Tiempo: Ver consola (F12)</span>`;
}

function domIneficiente() {
    const resultado = document.getElementById("resultado3");
    resultado.innerHTML = "";
    console.time("DOM ineficiente");
    const lista = document.createElement("ul");
    for (let i = 0; i < 500; i++) {
        const item = document.createElement("li");
        item.textContent = "Elemento " + i;
        lista.appendChild(item);
    }
    resultado.appendChild(lista);
    console.timeEnd("DOM ineficiente");
    resultado.innerHTML += `<br><span class="tiempo">Tiempo: Ver consola (F12)</span>`;
}

function domEficiente() {
    const resultado = document.getElementById("resultado4");
    resultado.innerHTML = "";
    console.time("DOM eficiente");
    let html = "<ul>";
    for (let i = 0; i < 500; i++) {
        html += `<li>Elemento ${i}</li>`;
    }
    html += "</ul>";
    resultado.innerHTML = html;
    console.timeEnd("DOM eficiente");
    resultado.innerHTML += `<br><span class="tiempo">Tiempo: Ver consola (F12)</span>`;
}

function calcularIneficiente() {
    const resultado = document.getElementById("resultado5");
    resultado.innerHTML = "";
    console.time("Cálculo ineficiente");
    let html = "";
    for (let i = 1; i <= 100; i++) {
        let raiz = Math.sqrt(i);
        let cuadrado = i * i;
        let cubo = Math.pow(i, 3);
        html += `N: ${i}, R: ${raiz.toFixed(2)}, C2: ${cuadrado}, C3: ${cubo}<br>`;
    }
    resultado.innerHTML = html;
    console.timeEnd("Cálculo ineficiente");
    resultado.innerHTML += `<br><span class="tiempo">Tiempo: Ver consola (F12)</span>`;
}

function calcularEficiente() {
    const resultado = document.getElementById("resultado6");
    resultado.innerHTML = "";
    console.time("Cálculo eficiente");
    let html = "";
    for (let i = 1; i <= 100; i++) {
        let raiz = Math.sqrt(i);
        let cuadrado = i * i;
        let cubo = cuadrado * i;
        html += `N: ${i}, R: ${raiz.toFixed(2)}, C2: ${cuadrado}, C3: ${cubo}<br>`;
    }
    resultado.innerHTML = html;
    console.timeEnd("Cálculo eficiente");
    resultado.innerHTML += `<br><span class="tiempo">Tiempo: Ver consola (F12)</span>`;
}

function ejecutarTodas() {
    console.clear();
    console.log("EJECUTANDO TODAS LAS PRUEBAS");
    console.log("Compara los tiempos en la consola.");
    console.log("");
    bucleIneficiente();
    setTimeout(bucleEficiente, 100);
    setTimeout(domIneficiente, 200);
    setTimeout(domEficiente, 300);
    setTimeout(calcularIneficiente, 400);
    setTimeout(calcularEficiente, 500);
    setTimeout(() => {
        console.log("FIN DE LAS PRUEBAS");
        console.log("¿Cuál fue más rápido?");
    }, 600);
}

window.bucleIneficiente = bucleIneficiente;
window.bucleEficiente = bucleEficiente;
window.domIneficiente = domIneficiente;
window.domEficiente = domEficiente;
window.calcularIneficiente = calcularIneficiente;
window.calcularEficiente = calcularEficiente;
window.ejecutarTodas = ejecutarTodas;

console.log("Aplicación cargada. Usa los botones para probar.");
