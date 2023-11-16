import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreejsComponent } from './threejs/threejs.component';
import { PanoramaComponent } from "./panorama/panorama.component";

@NgModule({
    declarations: [
        AppComponent,
        ThreejsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PanoramaComponent
    ]
})
export class AppModule { }
