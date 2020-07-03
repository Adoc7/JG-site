import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParcoursComponent } from './parcours.component';


const routes: Routes = [
  {path: '', component: ParcoursComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParcoursRoutingModule { }








