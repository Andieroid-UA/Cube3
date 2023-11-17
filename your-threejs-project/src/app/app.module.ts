import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreejsComponent } from './threejs/threejs.component';
import { PanoramaComponent } from './panorama/panorama.component'; // Add this import statement



@NgModule({
  declarations: [
    AppComponent,
    ThreejsComponent,
    PanoramaComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ]
})
export class AppModule { }
