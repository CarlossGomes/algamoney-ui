import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { LancamentoFiltro, LancamentoService } from './../../services/lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  public lancamentos = [];
  @ViewChild('tabela') grid: { first: number; };

  constructor(private lancamentoService: LancamentoService,
              private errorHandler: ErrorHandlerService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }

  public pesquisar(pagina = 0): void {
    this.filtro.pagina = pagina;
    this.lancamentoService.pesquisar(this.filtro).subscribe(
      response => {
        this.lancamentos = response.content;
        this.totalRegistros = response.totalElements;
      }, erro => {
        this.errorHandler.handle(erro);
      }
    );
  }

  public aoMudarPagina(event: LazyLoadEvent): void {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  public confirmarExclusao(lancamento: any): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

  public excluir(lancamento: any): void {
    this.lancamentoService.excluir(lancamento.codigo).subscribe(
      () => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
          this.pesquisar();
        }
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Lançamento excluído com sucesso!' });
      }, erro => {
        this.errorHandler.handle(erro);
      });
  }

}
