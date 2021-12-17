import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, fromEvent, map, Observable, Subscriber, take } from 'rxjs';

@Component({
  selector: 'app-cmp08-observables',
  templateUrl: './cmp08-observables.component.html',
  styleUrls: ['./cmp08-observables.component.css']
})
export class Cmp08ObservablesComponent implements OnInit, AfterViewInit {
  @ViewChild('btnMostrar') buttonRef!: ElementRef;

  mostrarHora: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    const miObservable$ = new Observable((subscriber: Subscriber<string>) => {
      subscriber.next('Mensaje 1');

      setTimeout(() => {
        subscriber.next('Mensaje 2');
      }, 3000);

      setTimeout(() => {
        // subscriber.error('Un error');
        subscriber.complete();
      }, 6000);

      setTimeout(() => {
        // subscriber.error('Un error');
        subscriber.next('Otro mensaje más');
      }, 7000);
    });

    miObservable$.subscribe({
      next: (msg: string) => {
        console.log(msg);
      },
      error: (err => {
        console.error(err);
      }),
      complete: () => {
        console.log('Ya no vamos a enviar más mensajes');
      }
    });
  }

  ngAfterViewInit() {
    fromEvent(this.buttonRef.nativeElement, 'click').subscribe(event => {
      alert('Has pulsado el botón');
    });
    fromEvent<MouseEvent>(document, 'mousemove').pipe(
      filter(event => {
        const {clientX, clientY} = event;

        return clientX > 400 && clientY < 300;
      }),
      map(event => {
        return {x: event.clientX, y: event.clientY};
      }),
      take(20)
    ).subscribe((event: IPosicionRaton) => {
      console.log(`Estás moviendo el ratón (${ event.x }, ${ event.y })`);
    });
  }

  toogleMostrarHora() {
    this.mostrarHora = !this.mostrarHora;
  }
}

interface IPosicionRaton {
  x: number;
  y: number;
}
