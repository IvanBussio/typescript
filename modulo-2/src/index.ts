import { obtenerRecurso } from "./services/api-client";

interface Cliente {
  id: number;
  empresa: string;
}

async function main() {
  const respuesta = await obtenerRecurso<Cliente>("clientes");

  console.log("Código:", respuesta.codigoEstado);
  console.log("Éxito:", respuesta.exito);
  console.log("Datos:", respuesta.datos);
}

main();import { generarReporte } from "./domain/reporte";

const estado = {
  tipo: "ACTIVA",
  asignaturas: ["Matemáticas", "Programación"]
} as const;

console.log(generarReporte(estado));
