// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page-main/home/home.component';
import { DemoComponent } from './page-demo/demo/demo.component';
import { SplashComponent } from './page-account/splash/splash.component';
import { SignupComponent } from './page-account/signup/signup.component';
import { LoginComponent } from './page-account/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: HomeComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'splash', component: SplashComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
