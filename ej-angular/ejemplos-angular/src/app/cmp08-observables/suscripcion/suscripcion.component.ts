import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { interval, Observable, Subscriber, Subscription } from 'rxjs';
import { PagosService } from 'src/app/cmp08-observables/services/pagos/pagos.service';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit {
  @Input() plataforma: string = '';
  @Input() precio: number = 4.95;

  estadoSub: boolean = false;
  fechaProximoPago: Date = new Date();
  suscripcionPlataforma: Subscription | null = null;
  cancelarSubs$ = new EventEmitter<boolean>();

  alert = {
    danger: false,
    info: false,
    success: false,
    mensaje: '',
    mostrar: false
  };

  constructor(private pagosService: PagosService) {
  }

  ngOnInit(): void {
  }

  showAlert(mensaje: string, tipo: string): void {
    this.alert.danger = tipo === 'danger';
    this.alert.info = tipo === 'info';
    this.alert.success = tipo === 'success';
    this.alert.mensaje = mensaje;
    this.alert.mostrar = true;

    setTimeout(() => {
      this.alert.mostrar = false;
    }, 1500);
  }

  getFechaProximoPago(): Date {
    const fecha = new Date();

    fecha.setSeconds(fecha.getSeconds() + 4);

    return fecha;
  }

  activarSuscripcion() {
    const sub$ = new Observable((subscriber: Subscriber<any>) => {
      this.estadoSub = true;
      this.fechaProximoPago = this.getFechaProximoPago();

      const subscription = interval(4000).subscribe(() => {
        console.log('Se sigue ejecutando');

        if (this.pagosService.pagarSuscripcion()) {
          this.fechaProximoPago = this.getFechaProximoPago();

          subscriber.next(`Tu suscripción ha sido renovada (${ this.precio } €)`);
        } else {
          this.estadoSub = false;

          subscriber.error(
            'No se ha podido realizar el pago de la suscripción. Revisa el método de pago para volver a suscribirte'
          );

          subscription.unsubscribe();
        }
      });

      // const intervalId = setInterval(() => {
      //   if (this.pagosService.pagarSuscripcion()) {
      //     this.fechaProximoPago = this.getFechaProximoPago();
      //
      //     subscriber.next(`Tu suscripción ha sido renovada (${ this.precio } €)`);
      //   } else {
      //     this.estadoSub = false;
      //
      //     subscriber.error(
      //       'No se ha podido realizar el pago de la suscripción. Revisa el método de pago para volver a suscribirte'
      //     );
      //
      //     clearInterval(intervalId);
      //   }
      // }, 4000);

      const subscripcionCancelar = this.cancelarSubs$.subscribe(() => {
        this.estadoSub = false;

        subscription.unsubscribe();

        subscriber.complete();

        subscripcionCancelar.unsubscribe();
      });
    });

    sub$.subscribe({
      next: (msg: string) => this.showAlert(msg, 'success'),
      error: (err: string) => this.showAlert(err, 'danger'),
      complete: () => this.showAlert('Has cancelado la suscripción', 'info')
    });
  }

  cancelarSuscripcion() {
    // this.suscripcionPlataforma?.unsubscribe()
    // this.estadoSub = false
    this.cancelarSubs$.emit(true);
  }
}
