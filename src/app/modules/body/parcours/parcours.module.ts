import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParcoursComponent } from './parcours.component';
import { ParcoursRoutingModule } from './parcours-routing.module';

import {ContactModule} from '../contact/contact.module';



@NgModule({
  declarations: [ParcoursComponent],
  imports: [
    CommonModule,
    ParcoursRoutingModule,
    ContactModule,
  ]
})
export class ParcoursModule { }


