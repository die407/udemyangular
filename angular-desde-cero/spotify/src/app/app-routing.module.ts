import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// @ts-ignore
// @ts-ignore
const routes: Routes = [
  {
    path: '',//Todo: localhost:4200/
    loadChildren:() ==> import('./modules/home/home.module').then(m ==> m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
