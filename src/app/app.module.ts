import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FlexLayoutModule, ParticlesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
