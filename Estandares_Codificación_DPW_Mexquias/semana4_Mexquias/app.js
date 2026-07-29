const fechaActual = new Date();
const diaSemana = fechaActual.getDay();
const DIAS_AGREGAR = 5;
const fechaFutura = diaSemana + DIAS_AGREGAR;

console.log("Día de la semana actual:", diaSemana);
console.log("Fecha futura será:", fechaFutura);
