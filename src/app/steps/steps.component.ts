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
  cotacaoVigente;

  constructor(private stepsService: StepsService) {}

  ngOnInit() {
    this.stepsService.listarValores().subscribe(x => {
      this.valores = x;
    });
  }

  proximoClicado(valorId) {
    this.selecionado = 1;

    const valorRastreamento = 54.9;
    const valor = this.valores.find(x => x[0].bike_price_id === valorId)[2];

    this.cotacoes = [
      {
        valor: valorRastreamento,
        plano: 'Rastreador Bike Nacional',
        servicos: [
          'Maior índice de recuperação',
          'Equipamento com tamanho reduzido',
          'Rastreador cedido em comodato',
          'Atuação Nacional',
          'O dinheiro das mensalidades de volta em caso de não recuperação',
          'Possibilidade de monitoramento via Internet e Ituran App'
        ]
      },
      {
        valor: valor.parcel + valorRastreamento,
        plano: 'Bike com Seguro + Rastreador',
        servicos: [
          'Rastreador cedido em comodato',
          'Incluso no Seguro:',
          'Indenização de 100% FIPE',
          'Perda Total por Roubo e Furto',
          'Assistência 24 horas'
        ]
      }
    ];
  }

  cotacaoSelecionada(cotacao) {
    this.selecionado = 2;

    this.cotacaoVigente = cotacao;
  }
}
