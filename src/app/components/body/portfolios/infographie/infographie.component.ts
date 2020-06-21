import { Component, OnInit } from '@angular/core';
import { TechnologieService } from 'src/app/services/technologie.service';
import { Technologie } from 'src/app/Model/Technologie';

@Component({
  selector: 'app-infographie',
  templateUrl: './infographie.component.html',
  styleUrls: ['./infographie.component.scss']
})
export class InfographieComponent implements OnInit {
  infographies: Technologie [];
  constructor(
    private technologieService: TechnologieService
  ) { }

  ngOnInit(): void {
    this.infographies = this.technologieService.getInfographie();
  }

}
