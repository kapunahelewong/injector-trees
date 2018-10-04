import { Injectable } from '@angular/core';

@Injectable()
export class MiskoService {
  name = 'Misko';
  static counter = 0;
  id = 0
  constructor() {
    this.id = MiskoService.counter++;
    console.log('MiskoService was created', this.id);
   }

}