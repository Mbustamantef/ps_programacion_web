const prompt = require("prompt-sync")({ sigint: true });

const cantidadParedes = Number(prompt("Cuantas paredes deseas pintar: \t"));

if (Number.isNaN(cantidadParedes) || cantidadParedes <= 0) {
  console.log("Cantidad de paredes invalidas");
  process.exit(1);
} else {
  let areaTotal = 0;
  let contador = 1;

while (contador <= cantidadParedes) {
  const ancho = Number(prompt("Ancho de la pared \t" + contador + " \t(m) "));
  const alto = Number(prompt("Alto de la pared \t" + contador + "\t(m) "));
  if (Number.isNaN(ancho) || Number.isNaN(alto) || ancho <= 0 || alto <= 0) {
    console.log("Datos invalidos,Vuelve a ingresar esta pared");
    continue;
  }
  areaTotal += alto * ancho;
  contador ++;
}

const litros = areaTotal/12;
const baldes= Math.ceil(litros/10);

console.log("Area total:",areaTotal.toFixed(2),"m2")
console.log("litros necesarios", litros.toFixed(2))
console.log("baldes a comprar;",baldes)
}