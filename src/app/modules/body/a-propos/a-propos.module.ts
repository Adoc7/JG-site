import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AProposComponent } from './a-propos.component';

import { AProposRoutingModule } from './a-propos-routing.module';
import {ContactModule} from '../contact/contact.module';




@NgModule({
  declarations: [AProposComponent],
  imports: [
    CommonModule,
    AProposRoutingModule,
    ContactModule,

  ],
})
export class AProposModule { }
