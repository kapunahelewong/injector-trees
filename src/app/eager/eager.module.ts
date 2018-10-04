import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerComponent } from './eager/eager.component';
import { MiskoService } from './../misko.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ EagerComponent ],
  exports: [EagerComponent],
  providers: [{provide: MiskoService, useValue: {id: 'Eager-Misko'} }]
})
export class EagerModule { }