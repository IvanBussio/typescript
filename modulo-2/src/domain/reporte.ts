import { EstadoMatricula } from "./types/estado";

export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Asignaturas: ${estado.asignaturas.length}`;
    case "SUSPENDIDA":
      return `Motivo: ${estado.motivo}`;
    case "FINALIZADA":
      return `Nota media: ${estado.notaMedia}`;
    default:
      const error: never = estado;
      throw new Error("Estado no válido");
  }
}
