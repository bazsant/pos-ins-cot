import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-marca-modelo',
  templateUrl: './marca-modelo.component.html',
  styleUrls: ['./marca-modelo.component.scss']
})
export class MarcaModeloComponent implements OnInit {

  marcas = [
    { 'id': 1, 'tipo': 'Bike 1' },
    { 'id': 2, 'tipo': 'Bike 2' },
    { 'id': 3, 'tipo': 'Bike 3' }
  ];

  valores = [];

  @Output() proximoClicado = new EventEmitter;

  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 149; i++) {
      this.valores.push({ id: i, valor: 1000 + (i * 500)})    
    }
  }

  proximo() {
    this.proximoClicado.emit();
  }

}
