const prompt = require("prompt-sync")({ sigint: true });

const categoriaValida = function (c) {
  return c === "G" || c === "P" || c === "V";
};

const precioCategoria = function (c) {
  if (c === "G") return 50000;
  if (c === "P") return 80000;
  return 120000; // V
};

const cantidadValida = function (n) {
  return typeof n === "number" && Number.isInteger(n) && !Number.isNaN(n) && n > 0 && n <= 10;
};

const procesarEntradas = function () {
  const clientes = Number(prompt("Cantidad de clientes:"));
  if (!(typeof clientes === "number" && Number.isInteger(clientes) && clientes > 0)) {
    console.log("Cantidad inválida.");
    return;
  }

  let totalRecaudado = 0;
  let clientesVip = 0;

  for (let i = 1; i <= clientes; i++) {
    const categoria = prompt(`Cliente ${i} - Categoría (G=General, P=Preferencial, V=VIP):`).toUpperCase();
    const cantidad = Number(prompt(`Cliente ${i} - Cantidad de entradas (1 a 10):`));

    if (!categoriaValida(categoria) || !cantidadValida(cantidad)) {
      console.log("Datos inválidos. Reingrese cliente.");
      i--;
      continue;
    }

    const precio = precioCategoria(categoria);
    const subtotal = precio * cantidad;

    let descuento = 0;
    if (cantidad > 5) {
      descuento = subtotal * 0.10;
    }

    const total = subtotal - descuento;

    console.log(`Cliente ${i} -> Subtotal: ${subtotal} | Descuento: ${descuento} | Total: ${total}`);

    totalRecaudado += total;
    if (categoria === "V") clientesVip++;
  }

  console.log("Clientes que compraron VIP:", clientesVip);
  console.log("Total recaudado:", totalRecaudado);
};

procesarEntradas();
