const esMayorDeEdad = function (edad) {
  if (typeof edad !== "number" || Number.isNaN(edad) || edad < 0) {
    return "Edad inválida";
  }

  return edad >= 18 ? "Mayor de edad" : "Menor de edad";
};

console.log(esMayorDeEdad(20)); // Mayor de edad
console.log(esMayorDeEdad(15)); // Menor de edad