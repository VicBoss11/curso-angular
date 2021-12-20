import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  formEditar: FormGroup;

  constructor(private tareasService: TareasService) {
    this.formEditar = new FormGroup({
      id: new FormControl('', Validators.required),
      titulo: new FormControl('', Validators.required),
      completada: new FormControl(false)
    });
  }

  // set titulo(titulo: string) {
  //   this.formEditar.controls['titulo'].setValue(titulo);
  // }
  //
  // set completada(completada: boolean) {
  //   this.formEditar.controls['completada'].setValue(completada);
  // }

  ngOnInit(): void {
    this.getTareas();
  }

  getTareas() {
    this.tareasService.getTareas().subscribe((tareas: Array<Tarea>) => {
      console.log(tareas);
      this.tareas = tareas;
    });
  }

  guardar(): void {
    // const tarea = {
    //   titulo: 'Ver One Piece este finde',
    //   completada: false,
    // }

    const tarea = new Tarea('Ver Vikingos este finde', false);

    this.tareasService.createTarea(tarea).subscribe((datos: IIdNuevaTarea) => {
      console.log(datos);

      tarea.id = datos.name;

      this.tareas = [...this.tareas, tarea];
    });
  }

  actualizar() {
    this.tareasService.updateTarea(this.formEditar.value).subscribe(tareaActualizada => {
      const id = this.formEditar.value.id;

      // SOLUCIÓN 1
      let tarea = this.tareas.find(tarea => tarea.id === id);

      Object.assign(tarea, tareaActualizada)

      // SOLUCIÓN 2
      // const pos = this.tareas.findIndex(tarea => tarea.id === id);
      // this.tareas.splice(
      //   pos,
      //   1,
      //   new Tarea(tareaActualizada.titulo, tareaActualizada.completada, id)
      // );
    });
  }

  rellenarFormulario(tarea: Tarea) {
    // this.titulo = tarea.titulo;
    // this.completada = tarea.completada;

    // Alternativa para actualizar valores del formulario sin acceder a controls
    // this.formEditar.setValue({
    //   titulo: tarea.titulo,
    //   completada: tarea.completada
    // });

    this.formEditar.setValue({...tarea});
  }

  completar(tarea: Tarea): void {
    this.tareasService.completeTarea(tarea).subscribe(response => {
      tarea.completada = response.completada;
    });
  }

  eliminar(idTarea: string): void {
    this.tareasService.deleteTarea(idTarea).subscribe(() => {
      this.tareas = this.tareas.filter(tarea => tarea.id !== idTarea);
    });
    // SOLUCIÓN ALTERNATIVA
    // const pos = this.tareas.findIndex(tarea => tarea.id === idTarea);
    //
    // this.tareas.splice(pos, 1);
  }
}
