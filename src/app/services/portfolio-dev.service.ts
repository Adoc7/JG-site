import { Injectable } from '@angular/core';
import { PortfolioDev } from '../Model/PortfolioDev';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDevService {

   constructor(){}
    developpement:PortfolioDev[] = [
      {id:1, over_title:"APP MOBILE CORDOVA", title:"THREE.JS", modal:"#Modal3js", lire_plus:"codevr", path:"assets/img/scr-VR.jpg", content_over_title:"PROJET 360° DE", content_title:"RÉALITÉ VIRTUELLE", content_sub_title:"THE HOUSE OF THE BALLENESQUE", content:"Durant mon expérience professionnelle chez Panoramic Perception, il m'a été confié de travailler sur un projet VR.", content_sub:"L'objectif était de réaliser une application mobile fonctionnelle en integrant les photos panoramiques de M. R. Gramolini prises sur les lieux de l'exposition de M. R. Ballen ; ainsi que des éléments graphiques afin de produire plusieurs scènes interactives en 3D avec le", content_sub_technos:"framework Cordova, la librairie Three.js, Javascript les langages HTML, CSS."},
      {id:2, over_title:"CODAGE BACK-END", title:"SYMFONY 4", modal:"#ModalSymbnb", lire_plus:"loc", path:"assets/img/scr-symBNB.jpg", content_over_title:"PROJET DE", content_title:"LOCATION", content_sub_title:"IMMOBILIERE", content:"Ce projet de location d'appartements ou de maisons est tout droit inspiré d'airbnb.", content_sub:"Cette plateforme permet de mettre en relation des proprétaires souhaitant louer leur(s) bien(s) immobilier(s) et des voyageurs. Les propriétaires qui s'inscrivent peuvent déposer leurs annonces. Et les personnes ayant besoin d'un logement d'appoint ont la possibilités de réserver en ligne le bien qui les interessent.", content_sub_technos:"Technologies : Symfony, WebPack Encore, Doctrine, Twig, Php, PhpMyAdmin."},
      {id:3, over_title:"CODAGE BACK-END", title:"SYMFONY 4", modal:"#ModalSymAgence", lire_plus:"vente", path:"assets/img/scr-symAgence.jpg", content_over_title:"PROJET DE", content_title:"VENTE", content_sub_title:"IMMOBILIERE", content:"Ce projet de vente immobilière permet de mettre en relation des propriétaires souhaitant vendre leurs biens et des acquéreurs", content_sub:"Les propriétaires qui s'inscrivent peuvent déposer leur annonce. Et les personnes ayant besoin d'acheter un logement ont la possibilités de de le faire grâce à des filtres qui facilitent leur recherche.", content_sub_technos:"Technologies : Symfony, Doctrine, Twig, Php, PhpMyAdmin."},
      {id:4, over_title:"CODAGE FRONT-END", title:"ANGULAR 6", modal:"#ModalAngResto", lire_plus:"reserv", path:"assets/img/scr-angResto.jpg", content_over_title:"PROJET DE", content_title:"RÉSERVATION", content_sub_title:"AU RESTAURANT", content:"La Tablée du Développeur est un projet qui a de quoi assouvir l'appétit ou les appétences de codage.", content_sub:"Cette application mobile permet de réserver une table avec une réactivité en temps réel.", content_sub_technos:"Technologies : Angular, Material Design."}
    ]
   getPortfolioDev(): PortfolioDev [] {
     return this.developpement;
   }
}

