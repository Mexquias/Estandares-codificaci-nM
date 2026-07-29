for (let contador = 0; contador < 10; contador++) {
    console.log(contador);
}

console.log("---");

let a = 0;
let b = 1;
for (let i = 0; i < 10; i++) {
    let temp = a + b;
    a = b;
    b = temp;
    console.log(a);
}
