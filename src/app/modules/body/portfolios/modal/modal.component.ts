import { Component, OnInit } from '@angular/core';
import { Modal } from 'src/app/Model/Modal';
import { ModalService } from 'src/app/services/modal.service';
declare var $:any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  modals: Modal [];

 constructor(
    private modalService: ModalService,

 ) { }

  ngOnInit(): void {
    this.modals = this.modalService.getModalGraph();
    $('.modal').each(function(){
      var src = $(this).find('iframe').attr('src');
      $(this).on('click', function(){
      $(this).find('iframe').attr('src', '');
      $(this).find('iframe').attr('src', src);
       });
      });    
 }
 // MODAL

}
