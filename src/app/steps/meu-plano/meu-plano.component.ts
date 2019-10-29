import { Component, OnInit, Input } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-meu-plano',
  templateUrl: './meu-plano.component.html',
  styleUrls: ['./meu-plano.component.scss']
})
export class MeuPlanoComponent implements OnInit {

  @Input() cotacao = {
    plano: '',
    valor: 0
  };

  constructor() { }

  ngOnInit() {

  }

  contratar() {
    swal.fire('Parabéns!', 'Contratação realizado com sucesso!', 'success');
  }

}
