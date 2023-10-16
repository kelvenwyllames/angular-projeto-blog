import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input()
  smallPhotoCover: string =
    'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg';

  @Input()
  smallDateCard: string = '15 de Outubro, 2023';

  @Input()
  smallCardTitle: string =
    'Beberapa cara menggunakan bold typography pada design website';
  constructor() {}

  ngOnInit(): void {}
}
