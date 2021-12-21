import { Component, Input, OnInit } from '@angular/core';
import { Vendehumos } from 'src/app/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() vendehumos!: Vendehumos;

  constructor() { }

  ngOnInit(): void {
  }
}
