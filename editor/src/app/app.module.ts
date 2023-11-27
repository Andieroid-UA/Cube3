import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThreeJsViewerComponent } from './three-jsviewer/three-jsviewer.component';

@NgModule({
    declarations: [
        AppComponent,
        ThreeJsViewerComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
    ]
})
export class AppModule { }
