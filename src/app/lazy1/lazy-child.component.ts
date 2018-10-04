import { Component, OnInit } from '@angular/core';
import { Item, ItemService } from './../item.service';
import { MiskoService } from './../misko.service';

@Component({
  selector: 'app-lazy-child',
  template: `<p>lazy child works!</p>
  <li *ngFor="let item of items">
  <span >{{item.rank}}</span> {{item.name}}
  </li>
  Here's the lazy id: {{miskoService.id}}

`,
  styles: []
})
export class LazyChildComponent {
  
  items: Item[];

  constructor(private itemService: ItemService, public miskoService: MiskoService) { }

  ngOnInit(): void {
    this.itemService.getItems().then(items => this.items = items);
  }

}
