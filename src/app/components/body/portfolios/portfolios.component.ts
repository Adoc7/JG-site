import { Component, OnInit } from '@angular/core';
/* import * as AOS from 'aos';
 */import { PortfolioDev } from 'src/app/Model/PortfolioDev';
import { PortfolioDevService } from 'src/app/services/portfolio-dev.service';

declare var $:any;
@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent implements OnInit {
  public isCollapsed = false;
  portfolioDev: PortfolioDev [];
  constructor(
    private portfolioDevService: PortfolioDevService
  ) {}
  ngOnInit(): any { 
/*     AOS.init();
 *//*     $(".suite").hover(function() {
      $("." + $(this).data('target')).show();
      $(this).hide();
    }); */
    this.portfolioDev = this.portfolioDevService.getPortfolioDev();
  }
}
