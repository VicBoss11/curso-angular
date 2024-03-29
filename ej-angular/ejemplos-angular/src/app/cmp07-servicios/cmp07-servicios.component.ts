import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/cmp07-servicios/services/logger/logger.service';

@Component({
  selector: 'app-cmp07-servicios',
  templateUrl: './cmp07-servicios.component.html',
  styleUrls: ['./cmp07-servicios.component.css']
})
export class Cmp07ServiciosComponent implements OnInit {

  constructor(private logger: LoggerService) {
  }

  ngOnInit(): void {
  }

  mostrarError(value: string): void {
    this.logger.error(value);
  }

  mostrarWarning(value: string): void {
    this.logger.warn(value);
  }
}
