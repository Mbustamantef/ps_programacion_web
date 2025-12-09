// CALCULADORA (CON FOR)
// Se repite hasta que el usuario elija 5

const prompt = require("prompt-sync")({ sigint: true });

for (let opcion = 0; opcion !== 5; ) {

  console.log("\n=== CALCULADORA ===");
  console.log("1. Sumar");
  console.log("2. Restar");
  console.log("3. Multiplicar");
  console.log("4. Dividir");
  console.log("5. Salir");

  opcion = Number(prompt("Selecciona una opción: "));

  if (opcion === 5) {
    console.log("\nSaliendo... 👋");
    break;
  }

  if (opcion < 1 || opcion > 5) {
    console.log("⚠️ Opción inválida. Intenta otra vez.");
    continue;
  }

  let a = Number(prompt("Ingresa el primer número: "));
  let b = Number(prompt("Ingresa el segundo número: "));
  let resultado = 0;
  let operacion = "";

  if (opcion === 1) {
    resultado = a + b;
    operacion = `${a} + ${b}`;
  }
  else if (opcion === 2) {
    resultado = a - b;
    operacion = `${a} - ${b}`;
  }
  else if (opcion === 3) {
    resultado = a * b;
    operacion = `${a} * ${b}`;
  }
  else if (opcion === 4) {

    if (b === 0) {
      console.log("❌ No es posible dividir entre cero.");
      continue;
    }

    resultado = a / b;
    operacion = `${a} / ${b}`;
  }

  console.log("\n=== RESULTADO ===");
  console.log("Operación:", operacion);
  console.log("Resultado:", resultado);
}
