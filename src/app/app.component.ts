import { Component } from '@angular/core';
import { MiskoService } from './misko.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  // providers: [{ provide: MiskoService, useValue: { name: 'Igor (element)', id: 'Kapunahele' } }],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  parentItem = "Transcluded stuff."
}
