import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesComponent } from './technologies.component';

import { TechnologiesRoutingModule } from './technologies-routing.module';
import {ContactModule} from '../contact/contact.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';





@NgModule({
  declarations: [TechnologiesComponent],
  imports: [
    CommonModule,
    TechnologiesRoutingModule,
    ContactModule,
    MDBBootstrapModule
  ]
})
export class TechnologiesModule { }
