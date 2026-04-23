import { calcularMedia, calcularMediana, filtrarAtipicos } from "./math-utils";

const datos = [10, 20, 30, 100];

console.log("Media:", calcularMedia(datos));
console.log("Mediana:", calcularMediana(datos));
console.log("Filtrados:", filtrarAtipicos(datos, 50));