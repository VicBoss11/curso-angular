import { Identificable } from 'src/app/interfaces';

type rol = 'ADMIN' | 'GENERICO';

export class Usuario implements Identificable {
  private id!: number;
  private rol!: rol;
  private urlImagen!: string;
  private vendehumosVotados?: Array<number>;

  constructor(
    private username: string,
    private email: string,
    private password: string
  ) {
  }

  getId(): number {
    return this.id;
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(username: string): void {
    this.username = username;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getPassword(): rol {
    return this.rol;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  getRol(): rol {
    return this.rol;
  }

  setRol(rol: rol): void {
    this.rol = rol;
  }

  getUrlImagen(): string {
    return this.urlImagen;
  }

  setUrlImagen(descripcion: string): void {
    this.urlImagen = descripcion;
  }

  getVendehumosVotados(): string {
    return this.urlImagen;
  }

  setVendehumosVotados(descripcion: string): void {
    this.urlImagen = descripcion;
  }
}
