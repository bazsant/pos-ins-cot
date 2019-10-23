import { Component, OnInit } from '@angular/core';
import { StepsService } from '../steps.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  selecionado;
  cotacoes = [];
  valores = [];

  constructor(private stepsService: StepsService) { }

  ngOnInit() {
    this.stepsService.listarValores().subscribe(x => {
      this.valores = x
    })
  }

  proximoClicado(valorId) {
    this.selecionado = 1;

    const valorRastreamento = 54.9;
    const valor = this.valores.find(x => x[0].bike_price_id === valorId)[2];  

    this.cotacoes = [{
      valor: valorRastreamento,
      plano: 'Rastreador Bike Nacional'
    }, {
      valor: valor.parcel + valorRastreamento,
      plano: 'Bike com Seguro + Rastreador'
    }]
  }

}
