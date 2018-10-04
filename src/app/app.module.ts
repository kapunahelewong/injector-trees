import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// import { MiskoService } from './misko.service';

import { AppRoutingModule } from './app-routing.module';
import { TransclusionComponent } from './transclusion.component';
import { TransclusionComponentChild } from './transcluded-child.component';
import { EagerModule } from './eager/eager.module';


@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, EagerModule],
  declarations: [AppComponent, HelloComponent, TransclusionComponent, TransclusionComponentChild],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
