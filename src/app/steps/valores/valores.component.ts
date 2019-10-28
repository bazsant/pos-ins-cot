import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.scss']
})
export class ValoresComponent implements OnInit {
  @Input() cotacoes = [];
  @Output() cotacaoSelecionada = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  cotacaoClick(cotacao) {
    this.cotacaoSelecionada.emit(cotacao);
  }
}
