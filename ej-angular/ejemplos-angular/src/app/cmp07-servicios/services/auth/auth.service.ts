import { Injectable } from '@angular/core';
import { EventosService } from 'src/app/cmp07-servicios/services/eventos/eventos.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly keyToken: string = 'jwt';

  constructor(private eventos: EventosService) {
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
