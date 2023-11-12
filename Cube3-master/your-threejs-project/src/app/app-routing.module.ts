// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreejsComponent } from './threejs/threejs.component';

const routes: Routes = [
  { path: '', component: ThreejsComponent }, // Root route displays ThreejsComponent
  // Add other routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
