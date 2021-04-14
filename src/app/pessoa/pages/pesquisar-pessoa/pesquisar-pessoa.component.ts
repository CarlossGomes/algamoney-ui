import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { PessoaFiltro, PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-pesquisar-pessoa',
  templateUrl: './pesquisar-pessoa.component.html',
  styleUrls: ['./pesquisar-pessoa.component.css']
})
export class PesquisarPessoaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new PessoaFiltro();
  public pessoas = [];
  @ViewChild('tabela') grid;

  constructor(private pessoaService: PessoaService,
              private errorHandler: ErrorHandlerService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }


  public pesquisar(pagina = 0): void {
    this.filtro.pagina = pagina;
    this.pessoaService.pesquisar(this.filtro).subscribe(
      response => {
        this.pessoas = response.content;

        this.totalRegistros = response.totalElements;
      }, erro => {
        this.errorHandler.handle(erro);
      }
    );
  }

  public listarTodas(): void {
    this.pessoaService.listarTodas().subscribe(
      response => {
        this.pessoas = response.content;
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

  public confirmarExclusao(pessoa: any): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.excluir(pessoa);
      }
    });
  }

  public excluir(pessoa: any): void {
    this.pessoaService.excluir(pessoa.codigo).subscribe(
      () => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
          this.pesquisar();
        }
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Pessoa excluída com sucesso!' });
      }, erro => {
        this.errorHandler.handle(erro);
      });
  }

  public alterarStatus(pessoa: any): void {

    this.pessoaService.alterarStatus(pessoa.codigo, pessoa.ativo === true ? false : true).subscribe(
      () => {
        this.grid.first = 0;
        this.pesquisar();
      }, erro => {
        this.errorHandler.handle(erro);
      }
    );
  }

}
