import { Component, OnInit } from '@angular/core';
import { Modal } from 'src/app/Model/Modal';
import { ModalService } from 'src/app/services/modal.service';


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

 }
}
