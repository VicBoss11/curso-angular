import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/app/cmp07-servicios/services/auth/auth.service';
import { EventosService } from 'src/app/cmp07-servicios/services/eventos/eventos.service';
import {
  AutenticacionService
} from 'src/app/cmp10-autenticacion/services/autenticacion/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  formLogin: FormGroup;
  disabledLoginButton?: boolean;

  constructor(
    private auth: AuthService,
    private eventos: EventosService,
    private autenticacion: AutenticacionService
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.hasToken();

    this.eventos.authEvent$.subscribe((isLoggedIn: boolean) => {
      console.log('Event Emitter', isLoggedIn);

      this.isLoggedIn = isLoggedIn;
    });

    this.eventos.authEvent$.emit(this.auth.hasToken());
  }

  login(): void {
    const datosLogin = this.formLogin.value;

    this.disabledLoginButton = true;

    this.autenticacion.login(datosLogin).subscribe({
      next: (datos: any) => {
        const token = datos.token;
        const payload = jwtDecode(token);

        console.log(payload);

        this.auth.setToken(token);
        this.disabledLoginButton = false;
      },
      error: (err: any) => {
        this.disabledLoginButton = false;

        alert(err.error.msg);
      }
    });
  }

  logout(): void {
    this.auth.delToken();
  }

  resetForm(): void {
    this.formLogin.reset();
    this.disabledLoginButton = false;
  }
}
