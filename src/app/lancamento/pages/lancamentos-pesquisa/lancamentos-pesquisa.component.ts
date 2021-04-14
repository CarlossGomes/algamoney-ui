import { LancamentoFiltro, LancamentoService } from './../../services/lancamento.service';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  public lancamentos = [];

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit(): void {
    // this.pesquisar();
  }

  public pesquisar(pagina = 0): void {
    this.filtro.pagina = pagina;
    this.lancamentoService.pesquisar(this.filtro).subscribe(
      response => {
        this.lancamentos = response.content;
        this.totalRegistros = response.totalElements;
      }
    );
  }

  public aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}
