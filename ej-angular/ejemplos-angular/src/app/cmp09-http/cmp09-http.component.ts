import { Component, OnInit } from '@angular/core';
import { IIdNuevaTarea } from 'src/app/cmp09-http/interfaces';
import { Tarea } from 'src/app/cmp09-http/models/tarea';
import { TareasService } from 'src/app/cmp09-http/services/tareas/tareas.service';

@Component({
  selector: 'app-cmp09-http',
  templateUrl: './cmp09-http.component.html',
  styleUrls: ['./cmp09-http.component.css']
})
export class Cmp09HttpComponent implements OnInit {
  tareas: Array<Tarea> = [];

  constructor(private tareasService: TareasService) {
  }

  ngOnInit(): void {
    this.getTareas();
  }

  getTareas() {
    this.tareasService.getTareas().subscribe((tareas: Array<Tarea>) => {
      console.log(tareas);
      this.tareas = tareas;
    });
  }

  guardar() {
    // const tarea = {
    //   titulo: 'Ver One Piece este finde',
    //   completada: false,
    // }

    const tarea = new Tarea('Ver Vikingos este finde', false);

    this.tareasService.createTareas(tarea).subscribe((datos: IIdNuevaTarea) => {
      console.log(datos);

      tarea.id = datos.name;

      this.tareas = [...this.tareas, tarea];
    });
  }
}
