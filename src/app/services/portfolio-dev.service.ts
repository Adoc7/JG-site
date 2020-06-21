import { Injectable } from '@angular/core';
import { PortfolioDev } from '../Model/PortfolioDev';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDevService {
  private developpement: PortfolioDev [];

  constructor() {
    this.developpement = [
      new PortfolioDev (1, "APP MOBILE CORDOVA", "THREE.JS", "#Modal3js", "codevr", "assets/img/screen-VR.jpg", "PROJET 360° DE", "RÉALITÉ VIRTUELLE", "THE HOUSE OF THE BALLENESQUE", "Durant mon expérience professionnelle chez Panoramic Perception, il m'a été confié de travailler sur un projet VR.", "L'objectif était de réaliser une application mobile fonctionnelle en integrant les photos panoramiques de M. R. Gramolini prises sur les lieux de l'exposition de M. R. Ballen ; ainsi que des éléments graphiques afin de produire plusieurs scènes interactives en 3D avec le", "framework Cordova, la librairie Three.js, Javascript les langages HTML, CSS."),
      new PortfolioDev (2, "CODAGE BACK-END", "SYMFONY 4", "#ModalSymbnb", "loc", "assets/img/screen-symBNB.jpg", "PROJET DE", "LOCATION", "IMMOBILIERE", "Ce projet de location d'appartements ou de maisons est tout droit inspiré d'airbnb.", "Cette plateforme permet de mettre en relation des proprétaires souhaitant louer leur(s) bien(s) immobilier(s) et des voyageurs. Les propriétaires qui s'inscrivent peuvent déposer leurs annonces. Et les personnes ayant besoin d'un logement d'appoint ont la possibilités de réserver en ligne le bien qui les interessent.", "Technologies : Symfony, WebPack Encore, Doctrine, Twig, Php, PhpMyAdmin."),
      new PortfolioDev (3, "CODAGE BACK-END", "SYMFONY 4", "#ModalSymAgence", "vente", "assets/img/screen-symAgence.jpg", "PROJET DE", "VENTE", "IMMOBILIERE", "Ce projet de vente immobilière permet de mettre en relation des propriétaires souhaitant vendre leurs biens et des acquéreurs", "Les propriétaires qui s'inscrivent peuvent déposer leur annonce. Et les personnes ayant besoin d'acheter un logement ont la possibilités de de le faire grâce à des filtres qui facilitent leur recherche.", "Technologies : Symfony, Doctrine, Twig, Php, PhpMyAdmin."),
      new PortfolioDev (4, "CODAGE FRONT-END", "ANGULAR 6", "#ModalAngResto", "reserv", "assets/img/screen-angResto.jpg", "PROJET DE", "RÉSERVATION", "AU RESTAURANT", "La Tablée du Développeur est un projet qui a de quoi assouvir l'appétit ou les appétences de codage.", "Cette application mobile permet de réserver une table avec une réactivité en temps réel.", "Technologies : Angular, Material Design."),
    ];
   }// Fin Constructeur
   getPortfolioDev(): PortfolioDev [] {
     return this.developpement;
   }
}