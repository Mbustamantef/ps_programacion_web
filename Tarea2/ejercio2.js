const prompt = require("prompt-sync")({ sigint: true });

const numeroInicial = Number(prompt("Ingrese un numero entre 1 y 10"));

  if (numeroInicial < 0 || numeroInicial > 10) {
    console.log("El numero no esta entre el  1 y el 10");
  }

  for (fila = 1; fila <= numeroInicial; fila++) {
    for (espacio = 1; espacio <= numeroInicial - fila; espacio++) {
      process.stdout.write(" ");
    }
    for (i = fila; i >= 1; i--) {
      process.stdout.write(i + "");
    }
    for (i = 2; i <= fila; i++) {
      process.stdout.write(i + "");
    }
    console.log()
  }

