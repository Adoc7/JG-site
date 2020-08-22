import { CollapseComponent } from 'angular-bootstrap-md';
import { Component, OnInit , AfterViewInit, ViewChildren } from '@angular/core';
/* import * as AOS from 'aos'; */
import { PortfolioDev } from 'src/app/Model/PortfolioDev';
import { PortfolioDevService } from 'src/app/services/portfolio-dev.service';
import { ContentLoaderModule } from '@ngneat/content-loader';

declare var $:any;
@Component({
  selector: 'app-developpement',
  templateUrl: './developpement.component.html',
  styleUrls: ['./developpement.component.scss']
})

export class DeveloppementComponent implements OnInit {
  @ViewChildren(CollapseComponent) collapses: CollapseComponent[];
  
  loaded = false;
  portfolioDev: PortfolioDev [];

  constructor(
    private portfolioDevService: PortfolioDevService
  ) { }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.collapses.forEach((collapse: CollapseComponent) => {
        collapse.hide();
      });
    })
  }
    
  ngOnInit(): any { 
/*     AOS.init();*/    
setInterval(()=> {this.loaded = true;}
,3000);
this.portfolioDev = this.portfolioDevService.getPortfolioDev();
  }
}