import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StepsService } from 'src/app/steps.service';

@Component({
  selector: 'app-marca-modelo',
  templateUrl: './marca-modelo.component.html',
  styleUrls: ['./marca-modelo.component.scss']
})
export class MarcaModeloComponent implements OnInit {

  marcas = [];
  valorId;
  prices = [];

  @Output() proximoClicado = new EventEmitter;

  constructor(private stepsService: StepsService) { }

  ngOnInit() {
    this.stepsService.listarMarcas().subscribe(x => {
      this.marcas = x;
    })

    this.stepsService.getPrices().subscribe(i => {
      this.prices = i;
    })
  }

  proximo() {
    this.proximoClicado.emit(this.valorId);
  }

}
