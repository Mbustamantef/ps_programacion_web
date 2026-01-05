const potenci1a = (base, exponente) => {
  let resultado = 1;
  for (let cuenta = 0; cuenta < exponente; cuenta++) {
    resultado *= base;
  }
  return resultado;
};

function saludar(quien) {
  console.log("Hola " + quien);
}

function envolverValor(n) {
let local = n;
return () => local;
}
let envolver1 = envolverValor(1);
let envolver2 = envolverValor(2);
console.log(envolver1());
// → 1
console.log(envolver2());
// → 2
