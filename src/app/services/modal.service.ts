import { Injectable } from '@angular/core';
import { Modal } from '../Model/Modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modal_graph: Modal [];
  constructor() { 
    this.modal_graph = [
/*       new Modal (0, "id_modal","title","path1","path1_name", "path2", "path2_name", "video"),  */
          new Modal (1, "myModal01","Guide des associations", "assets/img/graph_01.jpg", "Couverture du guide", "assets/img/graph_01b.jpg", "Double page du guide"),
          new Modal (2, "myModal02","Affiche : Marche Nordique", "assets/img/graph_02.jpg", "Affiche : Marche Nordique", "", ""),
          new Modal (3, "myModal03","Affiche : Gym", "assets/img/graph_03.jpg", "Affiche : Gym", "", ""),
          new Modal (4, "myModal04","Affiche : Fête du Picodon", "assets/img/graph_04.jpg", "Affiche : Fête du Picodon", "", ""),
          new Modal (5, "myModalDess01","Portrait : Björk", "assets/img/dess_01.jpg", "Portrait : Björk", "", ""),
          new Modal (6, "myModalDess02","Portrait : Serge Gainsbourg et Jane Birkin", "assets/img/dess_02.jpg", "Portrait : Serge Gainsbourg et Jane Birkin", "", ""),
          new Modal (7, "myModalDess03","Portrait : Sharleen Spiterri (Texas)", "assets/img/dess_03.jpg", "Portrait : Sharleen Spiterri (Texas)", "", ""),
          new Modal (8, "myModalDess04","Portrait : Johnny Hallyday", "assets/img/dess_04.jpg", "Portrait : Johnny Hallyday", "", ""),
          new Modal (8, "myModalDess05","Portrait : Mylène Farmer", "assets/img/dess_05.jpg", "Portrait : Mylène Farmer", "", ""),
          new Modal (9, "myModalDess06","Portrait : Calvin Russel", "assets/img/dess_06.jpg", "Portrait : Calvin Russel", "", ""),
    ];
  }
  getModalGraph(): Modal [] {
    return this.modal_graph; 
   }
}