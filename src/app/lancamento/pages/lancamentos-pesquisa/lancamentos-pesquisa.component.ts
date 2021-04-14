import { LancamentoFiltro, LancamentoService } from './../../services/lancamento.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent, MessageService } from 'primeng/api';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  public lancamentos = [];
  @ViewChild('tabela') grid;

  constructor(private lancamentoService: LancamentoService, private messageService: MessageService) { }

  ngOnInit(): void {
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

  public excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento.codigo).subscribe(
      () => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Lançamento excluído com sucesso!' });
      });
  }

}
