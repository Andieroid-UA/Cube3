import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanoramaComponent } from './shared/element-threejs/panorama/panorama.component';
import { CarouselComponent } from './page-main/carousel/carousel.component';
import { HeaderComponent } from './shared/header/header.component';
import { CubeComponent } from './shared/element-threejs/cube/cube.component';
import { Panorama2Component } from './shared/element-threejs/panorama2/panorama2.component';
import { CubeMovingComponent } from './shared/element-threejs/cube-moving/cube-moving.component';
import { FeaturettesComponent } from './page-main/featurettes/featurettes.component';
import { MarketingComponent } from './page-main/marketing/marketing.component';
import { HomeComponent } from './page-main/home/home.component';
import { DemoComponent } from './page-demo/demo/demo.component';
import { WindowProgressComponent } from "./page-demo/window-progress/window-progress.component";
import { WindowMainComponent } from "./page-demo/window-main/window-main.component";
import { WindowInstructionsComponent } from "./page-demo/window-instructions/window-instructions.component";
import { WindowContentComponent } from './page-demo/window-content/window-content.component';
import { LoginComponent } from './page-account/login/login.component';
import { SignupComponent } from './page-account/signup/signup.component';
import { SplashComponent } from './page-account/splash/splash.component';

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
        DemoComponent,
        WindowProgressComponent,
        WindowMainComponent,
        WindowInstructionsComponent,
        WindowContentComponent,
        LoginComponent,
        SignupComponent,
        SplashComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule
    ]
})
export class AppModule { }
