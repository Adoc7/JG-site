import { Component, OnInit } from '@angular/core';
/* import * as AOS from 'aos';
 */
import { Router } from '@angular/router';


@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss']
})

export class AProposComponent implements OnInit {
  constructor(

    private route: Router,
  ) { }
  ngOnInit(): void {
    /* AOS.init(); */
  }
    goToTechno(){
      this.route.navigate(['technologies'], { fragment: 'graph'});
    } 
  }