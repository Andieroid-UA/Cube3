import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanoramaComponent } from './panorama/panorama.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { CubeComponent } from './cube/cube.component';
import { Panorama2Component } from './panorama2/panorama2.component';
import { CubeMovingComponent } from './cube-moving/cube-moving.component';
import { FeaturettesComponent } from './featurettes/featurettes.component';
import { MarketingComponent } from './marketing/marketing.component';

@NgModule({
  declarations: [
    AppComponent,
    PanoramaComponent,
    CarouselComponent,
    HeaderComponent,
    CubeComponent,
    Panorama2Component,
    CubeMovingComponent,
    FeaturettesComponent,
    MarketingComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ]
})
export class AppModule { }
