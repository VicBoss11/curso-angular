export interface Identificable {
  getId(): number;
}

export interface Vendehumos {
  id?: number,
  nombre: string,
  descripcion: string,
  categorias: Array<string>,
  urlImagen: string,
  fechaAlta: Date,
  votadoPor?: Array<number>,
  creadoPor: number
}
