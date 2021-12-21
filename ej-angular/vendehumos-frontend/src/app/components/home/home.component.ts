import { Component, OnInit } from '@angular/core';
import { Vendehumos } from 'src/app/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vendehumos: Array<Vendehumos> = [
    {
      id: 1,
      nombre: 'Josef Ajram',
      descripcion: 'Hijo de padre sirio y madre española, Josef Ajram fundó en el año 2000 la empresa Caltal Promotrading con el apoyo de su familia. También es socio de la agencia de marketing digital y social media Molokai así como de Tradercom.',
      categorias: ['Trading'],
      urlImagen: 'https://d4-invdn-com.investing.com/company_logo/e4f787c5c6345b6ac864970aaf150508.jpg?width=170&height=170',
      fechaAlta: new Date(2020, 2, 13),
      votadoPor: [2, 3],
      creadoPor: 1
    },
    {
      id: 2,
      nombre: 'Roberto Gamboa',
      descripcion: 'Experto y referente del tráfico de pago en el mercado de habla hispana. Es el Director del Instituto de Tráfico Online [ITO] y líder de la primera y mayor comunidad de Traffickers Digitales® del mundo que ya ha cambiado la vida a más de 3.500 personas.',
      categorias: ['Trafficker', 'Masterclass'],
      urlImagen: 'https://pbs.twimg.com/media/EhKkbyrXsAEZC8L.jpg',
      fechaAlta: new Date(2020, 2, 13),
      votadoPor: [1],
      creadoPor: 2
    },
    {
      id: 3,
      nombre: 'Willyrex',
      descripcion: 'Guillermo Díaz Ibáñez, más conocido como Willyrex, es un youtuber y streamer español.',
      categorias: ['NFTs', 'Youtuber'],
      urlImagen: 'https://backend-fjwfovoc.nhost.app/storage/o/user/afb5147c-22cc-4490-bc03-ae9f674e95fb/willyrex.jpg',
      fechaAlta: new Date(2020, 2, 13),
      votadoPor: [1, 2],
      creadoPor: 3
    },
    {
      id: 4,
      nombre: 'Anxo Pérez',
      descripcion: 'Anxo Pérez es el creador y CEO de 8Belts.com, un método único en el mundo que garantiza hablar un idioma en menos de 8 meses.',
      categorias: ['Profesor de Inglés', 'Masterclass'],
      urlImagen: 'data:image/jpeg;base64,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',
      fechaAlta: new Date(2020, 2, 13),
      votadoPor: [1, 2, 3, 4],
      creadoPor: 2
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
