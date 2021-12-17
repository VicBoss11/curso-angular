import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IObjetosTareas } from 'src/app/cmp09-http/interfaces';
import { Tarea } from 'src/app/cmp09-http/models/tarea';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private readonly apiUrl: string = environment.urlFirebaseTareas;

  constructor(private http: HttpClient) {
  }

  getTareas(): Observable<Array<Tarea>> {
    return this.http.get<IObjetosTareas>(`${ this.apiUrl }.json`).pipe(
      map((tareas: IObjetosTareas) => {
        let arrayTareas: Array<Tarea> = [];

        for (const key in tareas) {
          const {titulo, completada} = tareas[key];
          const tarea = new Tarea(titulo, completada, key);

          arrayTareas = [...arrayTareas, tarea];
        }

        return arrayTareas;
      })
    );
  }

  createTareas(tarea: any): Observable<any> {
    return this.http.post(`${ this.apiUrl }.json`, tarea);
  }
}
