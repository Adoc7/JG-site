import { Component, OnInit } from '@angular/core';
import { Technologie } from 'src/app/Model/Technologie';
import { TechnologieService } from 'src/app/services/technologie.service';

@Component({
  selector: 'app-draws',
  templateUrl: './draws.component.html',
  styleUrls: ['./draws.component.scss']
})
export class DrawsComponent implements OnInit {
  graph_draws: Technologie []
  pastel_draws: Technologie []
  constructor(
    private technologieService: TechnologieService
  ) { }

  ngOnInit(): void {
    this.graph_draws = this.technologieService.getGraphDraws();
    this.pastel_draws = this.technologieService.getPastelDraws();
  }
}