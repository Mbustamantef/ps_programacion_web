const prompt = require("prompt-sync")({ sigint: true });

const esNumeroValido = function (n) {
  return typeof n === "number" && !Number.isNaN(n);
};

const calcularDescuentoPorcentaje = function (subtotal) {
  if (subtotal < 200000) return 0.1;
  if (subtotal < 800000) return 0.15;
  return 0.2;
};
const calcularTotalCompra = function () {
  let subtotal = 0;
  while (true) {
    const precio = Number(
      prompt("Ingrese el precio del articulo (0 puede terminar) :")
    );
    if (!esNumeroValido(precio) || precio < 0) {
      console.log("Precio invalido");
      continue;
    }
    if (precio === 0) break;

    const cantidad = Number(
      prompt("Ingrese cantidad de articulo (con 0 puede terminar)")
    );
    if (!esNumeroValido(cantidad) || cantidad < 0) {
      console.log("Cantidad invalida");
      continue;
    }
    if (cantidad === 0) break;

    subtotal += precio * cantidad;
  }
  const porcentaje = calcularDescuentoPorcentaje(subtotal);
  const descuento = subtotal * porcentaje;
  const total = subtotal - descuento;

  console.log("Subtotal:", subtotal);
  console.log("Descuento", (porcentaje * 100).toFixed(0) + "%");
  console.log("Monto Descontado" ,descuento);
  console.log("Total a pagar",total);
};

calcularTotalCompra();