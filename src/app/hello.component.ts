import { Component, Input } from '@angular/core';
import { MiskoService } from './misko.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>  Here's the id from hello component: {{test.id}} <hr />`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  name: string;

  constructor(public test: MiskoService) {
    this.name = test.name;
  }
}
