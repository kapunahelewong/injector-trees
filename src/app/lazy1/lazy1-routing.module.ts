import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lazy1Component } from './lazy1-component';
import { ItemService } from './../item.service';
import { MiskoService } from './../misko.service';


const routes: Routes = [
  {
    path: '',
    component: Lazy1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ItemService, MiskoService]
})
export class Lazy1RoutingModule { }




