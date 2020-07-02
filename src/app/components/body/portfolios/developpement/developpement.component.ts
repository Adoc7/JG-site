import { CollapseComponent } from 'angular-bootstrap-md';
import { Component, OnInit , AfterViewInit, ViewChildren } from '@angular/core';
import * as AOS from 'aos';
import { PortfolioDev } from 'src/app/Model/PortfolioDev';
import { PortfolioDevService } from 'src/app/services/portfolio-dev.service';

declare var $:any;
@Component({
  selector: 'app-developpement',
  templateUrl: './developpement.component.html',
  styleUrls: ['./developpement.component.scss']
})

export class DeveloppementComponent implements OnInit {
  @ViewChildren(CollapseComponent) collapses: CollapseComponent[];
 
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
   
/*     $(".suite").hover(function() {
      $("." + $(this).data('target')).show();
      $(this).hide();
    }); */
    this.portfolioDev = this.portfolioDevService.getPortfolioDev();
    AOS.init();
    
/*     $('.modal').each(function(){
      var src = $(this).find('iframe').attr('src');
      $(this).on('click', function(){
      $(this).find('iframe').attr('src', '');
      $(this).find('iframe').attr('src', src);
       });
      }); */
  }
}