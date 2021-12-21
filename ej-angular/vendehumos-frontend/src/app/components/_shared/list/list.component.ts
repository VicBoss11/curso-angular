import { Component, Input, OnInit } from '@angular/core';
import { Vendehumos } from 'src/app/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() vendehumos!: Array<Vendehumos>;

  constructor() { }

  ngOnInit(): void {
  }

}
