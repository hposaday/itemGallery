import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stg-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() name: string;
  @Input() price: number;
  @Input() category: string;
  @Input() imageLink: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
