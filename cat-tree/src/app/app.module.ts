// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KittyCADComponent } from './kitty-cad/kitty-cad.component'; // Import the KittyCADComponent

@NgModule({
  declarations: [
    AppComponent,
    KittyCADComponent // Include the KittyCADComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
