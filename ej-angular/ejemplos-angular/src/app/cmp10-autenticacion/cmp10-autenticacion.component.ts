import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/cmp07-servicios/services/auth/auth.service';
import { socket } from 'src/main';

@Component({
  selector: 'app-cmp10-autenticacion',
  templateUrl: './cmp10-autenticacion.component.html',
  styleUrls: ['./cmp10-autenticacion.component.css']
})
export class Cmp10AutenticacionComponent implements OnInit {
  formNoticia: FormGroup;
  noticias: Array<any> = [];

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private zone: NgZone
  ) {
    this.formNoticia = new FormGroup({
      title: new FormControl(''),
      content: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3200/noticias').subscribe(
      (noticias: any) => this.noticias = noticias
    );

    socket.on('nuevaNoticia', nuevaNoticia => {
      this.zone.run(() => {
        this.noticias = [...this.noticias, nuevaNoticia];
      })
    });
  }

  guardarNoticia(): void {
    const noticia = this.formNoticia.value;

    noticia.userId = this.auth.getUserIdFromToken();

    // ESTO DEBERÍA DE ESTAR EN UN SERVICIO
    this.http.post('http://localhost:3200/noticias', noticia)
      .subscribe(nuevaNoticia => {
        alert('La noticia se ha publicado correctamente');
      });
  }
}
