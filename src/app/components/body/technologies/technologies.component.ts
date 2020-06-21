import { CollapseComponent } from 'angular-bootstrap-md';
import { Component, OnInit , AfterViewInit, ViewChildren } from '@angular/core';
/* import { timer } from 'rxjs'; */
import { Technologie } from 'src/app/Model/Technologie';
import { TechnologieService } from 'src/app/services/technologie.service';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  
  @ViewChildren(CollapseComponent) collapses: CollapseComponent [];
 
  graphisme: Technologie [];
  front_langages: Technologie [];
  front_frameworks: Technologie [];
  front_librairies: Technologie [];
  front_cms: Technologie [];
  back_langages: Technologie [];
  back_frameworks: Technologie [];
  back_applications: Technologie [];

  constructor(
    private route: Router,
    private technologieService: TechnologieService
    ) {}
    
    ngAfterViewInit() {
      Promise.resolve().then(() => {
        this.collapses.forEach((collapse: CollapseComponent) => {
          collapse.hide();
        });
      })
    }
  ngOnInit(): any {
    this.graphisme = this.technologieService.getGraphisme();
    this.front_langages = this.technologieService.getFrontLangages();
    this.front_frameworks = this.technologieService.getFrontFrameworks();
    this.front_librairies = this.technologieService.getFrontLibrairies();
    this.front_cms = this.technologieService.getFrontCMS();

    this.back_langages = this.technologieService.getBackLangages();
    this.back_frameworks = this.technologieService.getBackFrameworks();
    this.back_applications = this.technologieService.getBackApplications();
    
/*     this.dataService.addData('Data de technos');
 */    
    // AUTRES TOGGLES
/*     $(".but").hover(function() {
    $("." + $(this).data('target')).slideToggle(timer);
     }); */
                   
/*      $(".butpdf").click(function() {
         $("." + $(this).data('target')).slideToggle(timer);                
     }); */


 /*     $(".suite").hover(function() {
       $("." + $(this).data('target')).show();
       $(this).hide();
     }); */
  }

  goToFolioInfo(){
    this.route.navigate(['portfolios'], { fragment: 'info'});
  }
  goToFolioDev(){
    this.route.navigate(['portfolios'], { fragment: 'dev'});
  }
}
