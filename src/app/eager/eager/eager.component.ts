import { Component, OnInit } from '@angular/core';
import { MiskoService } from './../../misko.service';

@Component({
  selector: 'app-eager',
  templateUrl: './eager.component.html',
  styleUrls: ['./eager.component.css']
})
export class EagerComponent implements OnInit {

  id = null;
  constructor(public miskoService: MiskoService) {
    console.log(miskoService, "hey");
    this.id = miskoService.id;
   }

  ngOnInit() {
  }

}