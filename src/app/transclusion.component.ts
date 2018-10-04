import { Component, OnInit, Input } from '@angular/core';
import { Stuff, StuffService } from './stuff.service';

@Component({
  selector: 'app-transclusion',
  template: `<p>{{childItem}}</p>
    <li *ngFor="let stuff of stuff">
  <span >{{stuff.rank}}</span> {{stuff.name}}
  </li>
  <app-transclusion-child></app-transclusion-child>`,
  styles: [],
  providers: [StuffService]
})
export class TransclusionComponent {

  @Input() childItem;

  stuff: Stuff[];

  constructor(private stuffService: StuffService) { }

  ngOnInit(): void {
    this.stuffService.getStuff().then(stuff => this.stuff = stuff);
  }

}
