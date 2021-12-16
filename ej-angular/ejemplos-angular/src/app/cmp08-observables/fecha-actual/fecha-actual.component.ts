import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-fecha-actual',
  templateUrl: './fecha-actual.component.html',
  styleUrls: ['./fecha-actual.component.css']
})
export class FechaActualComponent implements OnInit, OnDestroy {
  fecha = new Date();
  suscripcion: Subscription | null = null;

  constructor() {
  }

  ngOnInit(): void {
    const fecha$ = interval(1000);

    this.suscripcion = fecha$.subscribe(n => {
      console.log(n);

      this.fecha = new Date();
    });
  }

  ngOnDestroy(): void {
    this.suscripcion?.unsubscribe();
  }
}
