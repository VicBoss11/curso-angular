import { Component, OnInit } from '@angular/core';

class httpClient {
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private http: httpClient) { }

  ngOnInit(): void {
  }

}
