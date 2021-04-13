import { LancamentoFiltro, LancamentoService } from './../../services/lancamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  filtro = new LancamentoFiltro();
  public lancamentos = [];

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  public pesquisar(): void {
    this.lancamentoService.pesquisar(this.filtro).subscribe(
      response => {
        this.lancamentos = response.content;
        console.log(response.totalElements);
      }
    )
  }

}
