import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AProposComponent } from './a-propos.component';

const routes: Routes = [
  {path: 'apropos', component: AProposComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AProposRoutingModule { }
