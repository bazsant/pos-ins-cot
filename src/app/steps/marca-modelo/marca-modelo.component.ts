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
  valores = [];

  @Output() proximoClicado = new EventEmitter;

  constructor(private stepsService: StepsService) { }

  ngOnInit() {
    this.stepsService.listarMarcas().subscribe(x => {
      this.marcas = x;
    })

    for (let i = 1; i < 149; i++) {
      this.valores.push({ id: i, valor: 1000 + (i * 500) })
    }
  }

  proximo() {
    this.proximoClicado.emit(this.valorId);
  }

}
