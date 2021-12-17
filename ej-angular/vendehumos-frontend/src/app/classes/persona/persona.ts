import { Identificable } from 'src/app/interfaces';

export class Persona implements Identificable {
  private id!: number;

  protected constructor(private nombre: string) {
    this.nombre = nombre;
  }

  getId(): number {
    return this.id;
  }

  getNombre(): string {
    return this.nombre;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }
}
