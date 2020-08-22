import { Injectable } from '@angular/core';
import { Technologie } from '../Model/Technologie';

@Injectable({
  providedIn: 'root'
})
export class TechnologieService {
  private graphisme: Technologie [];
  private front_langages: Technologie [];
  private front_frameworks: Technologie [];
  private front_librairies: Technologie [];
  private front_cms: Technologie [];
  ///////////
  private back_langages: Technologie [];
  private back_frameworks: Technologie [];
  private back_applications: Technologie [];
  ///////////
  private infographie: Technologie [];
  ///////////
  private graph_draws: Technologie [];
  private pastel_draws: Technologie [];
  ///////////
  constructor() { 
    this.graphisme = [
      new Technologie (1, 'Photoshop', "", "assets/img/logos/ad_phot.svg"),
      new Technologie (2, 'Illustrator', "", "assets/img/logos/ad_ill.svg"),
      new Technologie (3, 'InDesign', "", "assets/img/logos/ad_ind.svg" ),
      new Technologie (4, 'AfterEffect', "", "assets/img/logos/ad_ae.svg" ),
    ];
    this.front_langages = [
      new Technologie (1, 'html 5', "", "assets/img/logos/html5.svg"),
      new Technologie (2, 'CSS 3', "", "assets/img/logos/CSS3.svg"),
      new Technologie (3, 'JavaScript', "", "assets/img/logos/js.svg"),
      new Technologie (4, 'TypeScript', "", "assets/img/logos/typescript.svg"),
      new Technologie (5, 'JSON', "", "assets/img/logos/json.svg"),
      new Technologie (6, 'Ajax', "", "assets/img/logos/ajax.svg"),
    ];
    this.front_frameworks = [
      new Technologie (1, 'Bootstrap 4 et 5', "", "assets/img/logos/bootstrap.svg"),
      new Technologie (2, 'Angular 9', "", "assets/img/logos/angular.svg"),
      new Technologie (3, 'Cordova', "","assets/img/logos/cordova.svg" ),
    ];
    this.front_librairies = [
      new Technologie (1, 'React JS', "", "assets/img/logos/react.svg"),
      new Technologie (2, 'React Native', "", "assets/img/logos/react.svg"),
      new Technologie (3, 'jQuery', "", "assets/img/logos/jquery.svg"),
      new Technologie (4, 'Three.JS', "", "assets/img/logos/3js.svg" ),
    ];
    this.front_cms = [
      new Technologie (1, 'Presta Shop', "", "assets/img/logos/prestashop.svg"),
      new Technologie (2, 'Word Press', "", "assets/img/logos/wordpress.svg"),
    ];
    ///////////
    this.back_langages = [
      new Technologie (1, 'PHP 7', "", "assets/img/logos/php.svg"),
      new Technologie (2, 'SQL', "", "assets/img/logos/sql.svg"),
      new Technologie (3, 'MySQL', "", "assets/img/logos/mysql.svg"),
    ];
    this.back_frameworks = [
      new Technologie (1, 'Symfony 4 et 5', "", "assets/img/logos/symfony.svg"),
      new Technologie (2, 'Doctrine', "", "assets/img/logos/doctrine.svg"),
      new Technologie (3, 'Twig', "", "assets/img/logos/twig.svg" ),
      new Technologie (4, 'Composer', "", "assets/img/logos/composer.svg" ),
    ];
    this.back_applications = [
      new Technologie (1, 'Git', "", "assets/img/logos/git.svg"),
      new Technologie (2, 'Github', "", "assets/img/logos/github.svg"),
      new Technologie (3, 'Apache Server', "", "assets/img/logos/apache-server.svg" ),
      new Technologie (4, 'Php MyAdmin', "", "assets/img/logos/phpmyadmin.svg" ),
    ];
    this.infographie = [
      new Technologie (1, 'Couverture de catalogue', "#myModal01", "assets/img/thumb-graph-01.jpg"),
      new Technologie (2, 'Affiche MN', "#myModal02", "assets/img/thumb-graph-02.jpg"),
      new Technologie (3, 'Affiche Gym', "#myModal03", "assets/img/thumb-graph-03.jpg"),
      new Technologie (4, 'Affiche Fête du Picodon', "#myModal04", "assets/img/thumb-graph-04.jpg"),
    ];
    this.graph_draws = [
      new Technologie (1, 'Bjork', "#myModalDess01", "assets/img/thumb-dess-01.jpg"),
      new Technologie (2, 'S. Gainsbourg et J. Birkin', "#myModalDess02", "assets/img/thumb-dess-02.jpg"),
      new Technologie (3, 'S. Spiteri', "#myModalDess03", "assets/img/thumb-dess-03.jpg" ),
    ];
    this.pastel_draws = [
      new Technologie (1, 'J. Hallyday', "#myModalDess04", "assets/img/thumb-dess-04.jpg" ),
      new Technologie (2, 'M. Farmer', "#myModalDess05", "assets/img/thumb-dess-05.jpg" ),
      new Technologie (3, 'C. Russel',  "#myModalDess06", "assets/img/thumb-dess-06.jpg" ),
    ];
  }
  ///////////
  getGraphisme(): Technologie []  {
    return this.graphisme; 
  }
  getFrontLangages(): Technologie []  {
    return this.front_langages; 
  }
  getFrontFrameworks(): Technologie []  {
    return this.front_frameworks;  
  }
  getFrontLibrairies(): Technologie []  {
    return this.front_librairies;  
  }
  getFrontCMS(): Technologie []  {
    return this.front_cms;  
  }
  ///////////
  getBackLangages(): Technologie []  {
    return this.back_langages; 
  }
  getBackFrameworks(): Technologie []  {
    return this.back_frameworks;  
  }
  getBackApplications(): Technologie []  {
    return this.back_applications;  
  }
  getInfographie(): Technologie []  {
    return this.infographie; 
  }
  getGraphDraws(): Technologie []  {
    return this.graph_draws; 
  }
  getPastelDraws(): Technologie []  {
    return this.pastel_draws; 
  }
}