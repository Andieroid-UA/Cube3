// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/threejs', pathMatch: 'full' },
  { path: 'threejs', component: AppComponent },
  { path: 'demo', component: DemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
