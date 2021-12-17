import { Tarea } from 'src/app/cmp09-http/models/tarea';

export interface IIdNuevaTarea {
  name: string;
}

export interface IObjetosTareas {
  [key: string]: Tarea;
}
