function encontrarSolucion(objetivo) {
  function encontrar(actual, historia) {
    if (actual === objetivo) {
      return historia;
    } else if (actual > objetivo) {
      return null;
    } else {
      return (
        encontrar(actual + 5, `(${historia} + 5)`) ||
        encontrar(actual * 3, `(${historia} * 3)`)
      );
    }
  }
  return encontrar(3, "1");
}
console.log(encontrarSolucion(30));
// → (((1 * 3) + 5) * 3)
