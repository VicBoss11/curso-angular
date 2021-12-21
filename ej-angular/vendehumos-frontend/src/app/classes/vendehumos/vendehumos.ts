import { Persona } from 'src/app/classes/persona/persona';

export class Vendehumos extends Persona {
  private descripcion!: string;
  private urlImagen!: string;
  private categorias!: Array<string>;
  private fechaAlta!: Date;
  private votadoPor?: Array<number>;
  private creadoPor?: number;

  constructor(nombre: string) {
    super(nombre);
  }

  getDescripcion(): string {
    return this.descripcion;
  }

  setDescripcion(descripcion: string): void {
    this.descripcion = descripcion;
  }

  getUrlImagen(): string {
    return this.urlImagen;
  }

  setUrlImagen(descripcion: string): void {
    this.urlImagen = descripcion;
  }

  getCategorias(): Array<string> {
    return this.categorias;
  }

  setCategorias(categorias: Array<string>): void {
    this.categorias = categorias;
  }

  getFechaAlta(): Date {
    return this.fechaAlta;
  }

  getVotadoPor(): Array<number> | undefined {
    return this.votadoPor;
  }

  setVotadoPor(votadoPor: Array<number>): void {
    this.votadoPor = votadoPor;
  }

  getCreadoPor(): number | undefined {
    return this.creadoPor;
  }

  setCreadoPor(creadoPor: number): void {
    this.creadoPor = creadoPor;
  }
}
