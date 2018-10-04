import { Component, OnInit, Input } from '@angular/core';
import { Stuff, StuffService } from './stuff.service';
import { MiskoService } from './misko.service';

@Component({
  selector: 'app-transclusion-child',
  template: `<p>Here's the tranclusion child:</p>
    <li *ngFor="let stuff of stuff">
  <span >{{stuff.rank}}</span> {{stuff.name}}
  </li> 
  <hello></hello>
  Here's the transclusion id: {{miskoService.id}}`,
  styles: [],
  providers: []
})
export class TransclusionComponentChild {

  stuff: Stuff[];

  constructor(private stuffService: StuffService, public miskoService: MiskoService) { }

  ngOnInit(): void {
    this.stuffService.getStuff().then(stuff => this.stuff = stuff);
  }

}
