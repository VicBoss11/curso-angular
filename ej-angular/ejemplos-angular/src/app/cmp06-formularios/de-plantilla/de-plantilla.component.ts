import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-de-plantilla',
  templateUrl: './de-plantilla.component.html',
  styleUrls: ['./de-plantilla.component.css']
})
export class DePlantillaComponent implements OnInit {
  datosFormulario = {
    username: 'c',
    email: 'aaa@aaa.com',
    password: '1234'
  }

  constructor() { }

  ngOnInit(): void {

  }

  registro(form: NgForm): void {
    console.log(form);
  }
}
