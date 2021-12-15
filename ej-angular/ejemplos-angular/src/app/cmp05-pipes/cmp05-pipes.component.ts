import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp05-pipes',
  templateUrl: './cmp05-pipes.component.html',
  styleUrls: ['./cmp05-pipes.component.css']
})
export class Cmp05PipesComponent implements OnInit {
  producto = {
    titulo: 'one plus 9 pro',
    descripcion: 'fhkasdkhfd dfhkhfkakdfhdk fdkahfkhdfkha fsdf kakdfs fdjafkdjkfjdkjfkjdkjfjadf fdjfjdskfsdfkjdf fkdsfkososlapsdkfdjafkdjkfjdkjfkjdkjfjadf fdjfjdskfsdfkjdf fkdsfkososlapsdk fdjafkdjkfjdkjfkjdkjfjadf fdjfjdskfsdfkjdf fkdsfkososlapsdk fdjafkdjkfjdkjfkjdkjfjadf fdjfjdskfsdfkjdf fkdsfkososlapsdk',
    precio: 800,
    fechaLanzamiento: new Date(2021, 2, 13)
  }

  tareas: Array<string> = [
    'Tarea 1',
    'Tarea 2',
    'Tarea 3'
  ]

  filtroTxt: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTarea(event: any): void {
    this.tareas = [...this.tareas, event.target.value]
  }
}
