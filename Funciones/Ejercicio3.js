const prompt = require("prompt-sync")({ sigint: true });
// 3) Facturación de energía eléctrica por tramos
// Una compañía eléctrica factura según consumo mensual (kWh):
// Hasta 200 kWh: 450 por kWh
// Más de 200 y hasta 500 kWh: 520 por kWh
// Más de 500 kWh: 610 por kWh
// Además, si el consumo es mayor a 700 kWh, se agrega un recargo fijo de 50.000.
// Escribir un programa que lea el consumo mensual de N clientes (N se ingresa al inicio) y muestre por cada cliente: consumo, tarifa aplicada, total. Al final, imprimir cuántos clientes quedaron en cada tramo y el total recaudado.

const esEnteroPositivo = (n) => {
  return (
    typeof n === "number" && Number.isInteger(n) && !Number.isNaN(n) && n > 0
  );
};

const esConsumoValido = (kwh) => {
  typeof kwh === "number" &&
    Number.isInteger(kwh) &&
    !Number.isNaN(kwh) &&
    kwh >= 0;
};

const tarifaPorConsumo = (kwh) => {
  if (kwh <= 200) return 450;
  if (kwh <= 500) return 520;
  return 610;
};

const tramoConsumo = (kWh) => {
  if (kWh <= 200) return "Tramo 1";
  if (kWh <= 500) return "Tramo 2";
  return "Tramo 3";
};

const facturaEnergia = () => {
  const n = Number(prompt("Ingrese la cantidad de clientes:"));
  if (!esEnteroPositivo(n)) {
    console.log("Cantidad Invalida");
    return;
  }
  let tramo1 = 0,
    tramo2 = 0,
    tramo3 = 0;
  let totalRecaudado = 0;

  for (let i = 1; i <= n; i++) {
    const kwh = Number(prompt(`Cliente ${i} - Consumo (Kwh):`))
    if(!esConsumoValido(kwh)){
        console.log("Consumo invalido");
        i--;
        continue;
    }
  }
};
