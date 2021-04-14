import { MessageService } from 'primeng/api';
import { LancamentoService } from './../../services/lancamento.service';
import { FormControl } from '@angular/forms';
import { Lancamento } from './../../../core/model/model';
import { PessoaService } from './../../../pessoa/services/pessoa.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { CategoriaService } from './../../../categoria/services/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categorias = [];
  pessoas = [];
  lancamento = new Lancamento();

  constructor(private categoriaService: CategoriaService,
              private pessoaService: PessoaService,
              private lancamentoService: LancamentoService,
              private messageService: MessageService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.carregarCategorias();
    this.carregarPessoas();
  }

  public salvar(form: FormControl): void {
    this.lancamentoService.adicionar(this.lancamento).subscribe(
      () => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Lançamento adicionado com sucesso!' });
        form.reset();
        this.lancamento = new Lancamento();
      }, erro => {
        this.errorHandler.handle(erro);
      }
    );
  }

  public carregarCategorias(): object {
    return this.categoriaService.listarTodas().subscribe(
      response => {
        this.categorias = response.map(c => ({ label: c.nome, value: c.codigo }));
      }, erro => {
        this.errorHandler.handle(erro);
      }
    );
  }

  public carregarPessoas(): object {
    return this.pessoaService.listarTodas().subscribe(
      response => {
        this.pessoas = response.content.map(p => ({ label: p.nome, value: p.codigo }));
      }, erro => {
        this.errorHandler.handle(erro);
      }
    );
  }

}
