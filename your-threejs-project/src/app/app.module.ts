import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanoramaComponent } from './element-threejs/panorama/panorama.component';
import { CarouselComponent } from './page-main/carousel/carousel.component';
import { HeaderComponent } from './shared/header/header.component';
import { CubeComponent } from './element-threejs/cube/cube.component';
import { Panorama2Component } from './element-threejs/panorama2/panorama2.component';
import { CubeMovingComponent } from './element-threejs/cube-moving/cube-moving.component';
import { FeaturettesComponent } from './page-main/featurettes/featurettes.component';
import { MarketingComponent } from './page-main/marketing/marketing.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';

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
    MarketingComponent,
    HomeComponent,
    DemoComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ]
})
export class AppModule { }
