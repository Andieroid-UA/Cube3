import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ThreeComponent } from './three/three.component';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        ThreeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
    ]
})
export class AppModule {
 }
