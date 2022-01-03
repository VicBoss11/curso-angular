import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { EventosService } from 'src/app/cmp07-servicios/services/eventos/eventos.service';

interface JwtPayload {
  id: number;
  rol: string;
  nombre: string;
  iat: number;
  lang: string;
  theme: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly keyToken: string = 'jwt';

  constructor(private eventos: EventosService) {
  }

  getUserIdFromToken(): number {
    const token = this.getToken()!;
    const payload: JwtPayload = jwtDecode(token);

    return payload.id;
  }

  getUserNameFromToken(): string {
    const token = this.getToken()!;
    const payload: JwtPayload = jwtDecode(token);

    return payload.nombre;
  }

  getToken(): string | null {
    return localStorage.getItem(this.keyToken);
  }

  setToken(token: string): void {
    localStorage.setItem(this.keyToken, token);

    this.eventos.authEvent$.emit(true);
  }

  delToken(): void {
    localStorage.removeItem(this.keyToken);

    this.eventos.authEvent$.emit(false)
  }

  hasToken(): boolean {
    return !!this.getToken();
  }
}
