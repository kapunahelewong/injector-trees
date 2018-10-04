import { Component, OnInit } from '@angular/core';
import { Item, ItemService } from './../item.service';


@Component({
  selector: 'app-lazy1',
  template: `<p>lazy1 works!</p>
  <li *ngFor="let item of items">
  <span >{{item.rank}}</span> {{item.name}}
  </li>
  <app-lazy-child></app-lazy-child>
`,
  styles: [`* {font-family: Lato;}`]
})
export class Lazy1Component {
  
  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().then(items => this.items = items);
  }

}
