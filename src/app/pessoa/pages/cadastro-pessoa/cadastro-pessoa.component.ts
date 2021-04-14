import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Pessoa } from 'src/app/core/model/model';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(private pessoaService: PessoaService,
              private messageService: MessageService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
  }

  public salvar(form: FormControl): void {
    this.pessoaService.adicionar(this.pessoa).subscribe(
      () => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Lançamento adicionado com sucesso!' });
        form.reset();
        this.pessoa = new Pessoa();
      }, erro => {
        this.errorHandler.handle(erro);
      }
    );
  }

}
